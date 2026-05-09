import { Link } from "react-router-dom";
import { menuItems, formatRp } from "@/data/menuData";
import { useLang } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const MenuPreviewSection = () => {
  const { t, lang } = useLang();

  // Ambil 4 menu unggulan: 2 nasi goreng + 1 mie + 1 hotplate (yang punya badge diutamakan)
  const featured = [
    ...menuItems.filter((m) => m.category === "nasi-goreng").slice(0, 2),
    ...menuItems.filter((m) => m.category === "mie-goreng").slice(0, 1),
    ...menuItems.filter((m) => m.category === "hotplate").slice(0, 1),
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container container-px">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">{t.menu.label}</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-brand text-balance">{t.menu.title}</h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((m) => (
            <article
              key={m.id}
              className="group bg-background rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-soft hover:-translate-y-1 transition-all"
            >
              <div className={cn("relative overflow-hidden bg-brand-cream aspect-square")}>
                <img
                  src={m.image}
                  alt={m.name[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={800}
                />
                {m.badge && (
                  <span className="absolute top-3 left-3 bg-brand-soft text-brand-soft-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-soft">
                    {m.badge[lang]}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-brand leading-tight line-clamp-1">{m.name[lang]}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2 leading-relaxed">{m.desc[lang]}</p>
                <div className="mt-4 font-bold text-brand">{formatRp(m.price)}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-brand hover:bg-brand/90 text-brand-foreground font-semibold px-8"
          >
            <Link to="/menu">
              {lang === "id" ? "Lihat Selengkapnya" : "View Full Menu"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
