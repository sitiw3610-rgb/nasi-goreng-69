import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { menuItems, formatRp, MenuItem, Category } from "@/data/menuData";
import { useLang } from "@/i18n/LanguageContext";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const HASH_TO_CAT: Record<string, Category> = {
  "nasi-goreng": "nasi-goreng",
  "mie-goreng": "mie-goreng",
  "hotplate": "hotplate",
  "minuman": "minuman",
  "menu-lain": "lain",
  "lain": "lain",
};

export const MenuSection = () => {
  const { t, lang } = useLang();
  const { add, setOpen } = useCart();
  const location = useLocation();
  const [cat, setCat] = useState<Category>("nasi-goreng");
  const [preview, setPreview] = useState<MenuItem | null>(null);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const target = HASH_TO_CAT[hash];
    if (target) {
      setCat(target);
      requestAnimationFrame(() => {
        const el = document.getElementById(hash) || document.getElementById("menu");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash, location.key]);

  const cats: { key: Category; label: string }[] = [
    { key: "nasi-goreng", label: t.menu.categories["nasi-goreng"] },
    { key: "mie-goreng", label: t.menu.categories["mie-goreng"] },
    { key: "hotplate", label: t.menu.categories.hotplate },
    { key: "minuman", label: t.menu.categories.minuman },
    { key: "lain", label: t.menu.categories.lain },
  ];

  const counts = cats.reduce<Record<Category, number>>((acc, c) => {
    acc[c.key] = menuItems.filter((m) => m.category === c.key).length;
    return acc;
  }, { "nasi-goreng": 0, "mie-goreng": 0, hotplate: 0, minuman: 0, lain: 0 });

  const filtered = menuItems.filter((m) => m.category === cat);

  const handleAdd = (item: MenuItem) => {
    add(item);
    toast.success(`${item.name[lang]} ${lang === "id" ? "ditambahkan" : "added"}`, {
      action: { label: lang === "id" ? "Lihat" : "View", onClick: () => setOpen(true) },
    });
  };

  return (
    <section id="menu" className="py-24 md:py-32 bg-background">
      <div className="container container-px">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">{t.menu.label}</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-brand text-balance">{t.menu.title}</h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c.key}
              onClick={() => setCat(c.key)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-all border inline-flex items-center gap-2",
                cat === c.key
                  ? "bg-brand text-brand-foreground border-brand shadow-soft"
                  : "bg-background text-foreground/70 border-border hover:border-brand hover:text-brand"
              )}
            >
              {c.label}
              <span className={cn(
                "text-[10px] font-bold rounded-full px-1.5 py-0.5 min-w-[20px] text-center",
                cat === c.key ? "bg-brand-foreground/20 text-brand-foreground" : "bg-muted text-foreground/60"
              )}>
                {counts[c.key]}
              </span>
            </button>
          ))}
        </div>

        <div id={cat === "lain" ? "menu-lain" : cat} className="scroll-mt-24" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((m) => (
            <article
              key={m.id}
              className="group bg-background rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-soft hover:-translate-y-1 transition-all"
            >
              <button
                type="button"
                onClick={() => setPreview(m)}
                aria-label={`${lang === "id" ? "Lihat foto" : "View photo"} ${m.name[lang]}`}
                className={cn(
                  "relative overflow-hidden bg-brand-cream w-full block focus:outline-none focus:ring-2 focus:ring-brand",
                  m.category === "minuman" ? "aspect-[687/1030]" : "aspect-square"
                )}
              >
                <img
                  src={m.image}
                  alt={m.name[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                  loading="lazy"
                  width={m.category === "minuman" ? 687 : 800}
                  height={m.category === "minuman" ? 1030 : 800}
                />
                {m.badge && (
                  <span className="absolute top-3 left-3 bg-brand-soft text-brand-soft-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-soft">
                    {m.badge[lang]}
                  </span>
                )}
              </button>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-brand leading-tight">{m.name[lang]}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2 leading-relaxed">{m.desc[lang]}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold text-brand">{formatRp(m.price)}</span>
                  <Button
                    size="sm"
                    onClick={() => handleAdd(m)}
                    className="rounded-full bg-brand hover:bg-brand/90 text-brand-foreground h-9 px-4 text-xs font-semibold"
                  >
                    <Plus className="w-3.5 h-3.5 mr-1" />
                    {t.menu.add}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={!!preview} onOpenChange={(o) => !o && setPreview(null)}>
        <DialogContent className="max-w-3xl p-0 bg-transparent border-0 shadow-none [&>button]:hidden">
          <DialogTitle className="sr-only">{preview?.name[lang]}</DialogTitle>
          {preview && (
            <div className="relative">
              <button
                onClick={() => setPreview(null)}
                aria-label="Close"
                className="absolute -top-3 -right-3 z-10 w-10 h-10 rounded-full bg-background text-foreground shadow-soft flex items-center justify-center hover:scale-105 transition-transform"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={preview.image}
                alt={preview.name[lang]}
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
              />
              <div className="mt-3 text-center">
                <p className="font-display text-base md:text-lg font-bold text-brand-foreground bg-brand/85 backdrop-blur inline-block px-4 py-1.5 rounded-full">
                  {preview.name[lang]} — {formatRp(preview.price)}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
