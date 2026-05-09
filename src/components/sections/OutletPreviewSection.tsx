import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

const featuredOutlets = [
  { name: "Nasi Goreng 69 WTC Surabaya", city: "Surabaya" },
  { name: "Nasi Goreng 69 Tunjungan Plaza", city: "Surabaya" },
  { name: "Nasi Goreng 69 MATOS Malang", city: "Malang" },
  { name: "Nasi Goreng 69 Hartono Mall Solo", city: "Solo" },
  { name: "Nasi Goreng 69 Hartono Mall Yogyakarta", city: "Yogyakarta" },
  { name: "Nasi Goreng 69 Paragon Semarang", city: "Semarang" },
];

export const OutletPreviewSection = () => {
  const { t, lang } = useLang();

  return (
    <section className="py-24 md:py-32 bg-brand-cream/40">
      <div className="container container-px">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">{t.outlet.label}</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-brand text-balance">{t.outlet.title}</h2>
          <p className="mt-4 text-sm text-muted-foreground italic">
            Surabaya · Malang · Sidoarjo · Gresik · Solo · Yogyakarta · Semarang · {lang === "id" ? "dan kota lainnya" : "and more"}
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredOutlets.map((o) => (
            <div
              key={o.name}
              className="group flex items-center gap-4 bg-background border border-border rounded-2xl p-5 hover:border-brand hover:shadow-soft transition-all"
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-warm grid place-items-center">
                <MapPin className="w-5 h-5 text-brand" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-sm font-bold text-brand leading-snug truncate">{o.name}</h3>
                <span className="mt-1 inline-block text-[10px] font-bold uppercase tracking-widest text-brand/70">
                  {o.city}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-brand hover:bg-brand/90 text-brand-foreground font-semibold px-8"
          >
            <Link to="/outlet">
              {lang === "id" ? "Lihat Semua Outlet" : "View All Outlets"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
