import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import { translations } from "@/i18n/translations";
import { useLang } from "@/i18n/LanguageContext";

const FaqPage = () => {
  const [open, setOpen] = useState<number | null>(0);

  const { lang } = useLang();
  const t = translations[lang];

  const FAQS = t.faq.items;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="container container-px py-16 md:py-24">
      {/* HEADER */}
      <header className="max-w-3xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {t.faq.label}
        </p>

        <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">
          {t.faq.title}
        </h1>

        <p className="mt-4 text-base md:text-lg text-muted-foreground">
          {t.faq.subtitle}
        </p>
      </header>

      {/* FAQ LIST */}
      <div className="mt-12 max-w-3xl mx-auto space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;

          return (
            <div
              key={i}
              className="rounded-2xl border bg-card overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex justify-between px-5 py-4 text-left"
              >
                <span className="font-semibold">{f.q}</span>

                <ChevronDown
                  className={cn(
                    "w-5 h-5 transition-transform duration-300",
                    isOpen && "rotate-180"
                  )}
                />
              </button>

              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 text-sm text-muted-foreground">
                    {f.a}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }),
        }}
      />
    </section>
  );
};

export default FaqPage;