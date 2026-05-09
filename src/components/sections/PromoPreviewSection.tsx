import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Tag, Sparkles, ArrowRight } from "lucide-react";

const previewPromos = [
  {
    code: "Rp 3x.xxx",
    icon: Sparkles,
    title: { id: "Combo Juara 1", en: "Combo Juara 1" },
    desc: { id: "Beli 1 menu favorit , Free 1 lagi dari pilihan:\nNasgor Ayam, Nasgor Ikan Asin, Miegor Ayam", en: "Buy 1 favorite menu, get 1 free from choices:\nNasgor Ayam, Nasgor Ikan Asin, Miegor Ayam" },
    tone: "soft",
  },
  {
    code: "Rp 3x.xxx",
    icon: Tag,
    title: { id: "1. Nasgor Chiken Katsu + Es Teh\n2. Miegor Chiken Katsu + Es Teh\n3. Nasi Chiken Katsu + Es Teh", en: "1. Nasgor Chiken Katsu + Es Teh\n2. Miegor Chiken Katsu + Es Teh\n3. Nasi Chiken Katsu + Es Teh" },
    desc: { id: "", en: "" },
    tone: "brand",
  },
];

export const PromoPreviewSection = () => {
  const { t, lang } = useLang();

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container container-px">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">{t.promo.label}</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-brand text-balance">{t.promo.title}</h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {previewPromos.map((p) => {
            const Icon = p.icon;
            const isBrand = p.tone === "brand";
            return (
              <div
                key={p.code}
                className={`relative rounded-2xl p-8 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all overflow-hidden ${
                  isBrand ? "bg-gradient-brand text-brand-foreground" : "bg-background border border-border text-foreground"
                }`}
              >
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-brand-cream/40" />
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-brand-cream/40" />

                <div className={`w-12 h-12 rounded-full grid place-items-center mb-5 ${isBrand ? "bg-brand-soft text-brand-soft-foreground" : "bg-brand/10 text-brand"}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className={`font-display text-2xl font-bold leading-tight whitespace-pre-line ${isBrand ? "" : "text-brand"}`}>{p.title[lang]}</h3>
                <p className={`mt-2 text-sm leading-relaxed whitespace-pre-line ${isBrand ? "text-brand-foreground/80" : "text-muted-foreground"}`}>{p.desc[lang]}</p>

                <div className="mt-6 pt-5 border-t border-dashed border-current/20 flex items-center justify-between gap-3">
                  <div>
                    <p className={`text-[10px] uppercase tracking-widest ${isBrand ? "text-brand-foreground/70" : "text-muted-foreground"}`}>
                      {lang === "id" ? "Harga" : "Price"}
                    </p>
                    <p className="font-mono font-bold text-base">{p.code}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-brand hover:bg-brand/90 text-brand-foreground font-semibold px-8"
          >
            <Link to="/promo">
              {lang === "id" ? "Lihat Semua Promo" : "View All Promos"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
