import { useLang } from "@/i18n/LanguageContext";
import { ShoppingBag, ListChecks, Send } from "lucide-react";

export const HowItWorksSection = () => {
  const { t } = useLang();
  const icons = [ShoppingBag, ListChecks, Send];

  return (
    <section className="py-20 md:py-28 bg-brand-cream/40">
      <div className="container container-px">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">{t.how.label}</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-brand text-balance">{t.how.title}</h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* connecting dotted line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] border-t-2 border-dashed border-brand/25" />

          {t.how.steps.map((s, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="relative bg-background rounded-2xl p-8 shadow-card hover:shadow-soft transition-all hover:-translate-y-1 text-center">
                <div className="relative z-10 w-20 h-20 mx-auto rounded-full bg-gradient-warm grid place-items-center shadow-soft">
                  <Icon className="w-8 h-8 text-brand" />
                </div>
                <span className="absolute top-4 right-4 font-display text-5xl font-bold text-brand/10">0{i + 1}</span>
                <h3 className="mt-5 font-display text-xl font-bold text-brand">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
