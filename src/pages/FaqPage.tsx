import { useState } from "react";
import Script from "next/script";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Rekomendasi nasi goreng pedas enak di Surabaya?",
    a: "Salah satu rekomendasi nasi goreng pedas enak di Surabaya adalah Nasi Goreng 69 dengan berbagai level pedas dan banyak outlet di Surabaya.",
  },
  {
    q: "Nasi Goreng 69 buka jam berapa?",
    a: "Setiap hari pukul 10.00–21.00 WIB.",
  },
  {
    q: "Apakah Nasi Goreng 69 tersedia di GoFood?",
    a: "Ya, tersedia di beberapa kota di Jawa Timur, Jawa Tengah, dan Yogyakarta.",
  },
  {
    q: "Apakah bisa pesan takeaway?",
    a: "Bisa, melalui checkout website atau langsung di outlet.",
  },
  {
    q: "Apa menu favorit di Nasi Goreng 69?",
    a: "Nasi Goreng Spesial 69, Mie Goreng 69, dan menu pedas lainnya.",
  },
  {
    q: "Apakah punya banyak cabang?",
    a: "Ya, tersedia di banyak kota seperti Surabaya, Malang, Gresik, Madiun, Solo, Yogyakarta.",
  },
  {
    q: "Rekomendasi kuliner pedas di Madiun?",
    a: "Nasi Goreng 69 Plaza Madiun adalah salah satu pilihan populer.",
  },
  {
    q: "Tempat makan nasi goreng enak di Gresik?",
    a: "Outlet di Icon Mall Gresik dan Gress Mall.",
  },
  {
    q: "Apakah tersedia pembayaran QRIS?",
    a: "Ya, mendukung QRIS dan pembayaran langsung.",
  },
  {
    q: "Apakah bisa order lewat website?",
    a: "Ya, bisa checkout langsung atau redirect ke GoFood.",
  },
];

const FaqPage = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      {/* SEO SCHEMA (AMAN & STABLE) */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
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

      <section className="container container-px py-16 md:py-24">
        <header className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold">FAQ</h1>
          <p className="text-muted-foreground mt-3">
            Informasi seputar Nasi Goreng 69
          </p>
        </header>

        <div className="mt-12 max-w-3xl mx-auto space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;

            return (
              <div key={i} className="border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex justify-between p-4 text-left"
                >
                  <span className="font-medium">{f.q}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="p-4 text-sm text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FaqPage;