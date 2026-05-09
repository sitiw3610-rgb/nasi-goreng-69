import { useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Plus, X } from "lucide-react";
import { toast } from "sonner";
import { MenuItem, formatRp } from "@/data/menuData";
import promoHero from "@/assets/promo-hero.png";
import comboJuara1 from "@/assets/combo-juara-1.jpg";
import promoTpl2 from "@/assets/combo-juara-2.jpg";
import promoTpl3 from "@/assets/combo-juara-3.jpg";
import promoTpl4 from "@/assets/bukber-spesial.jpg";

const promoTemplates: MenuItem[] = [
  {
    id: "promo-combo-juara-1",
    price: 31363,
    image: comboJuara1,
    category: "lain",
    name: { id: "Combo Juara 1", en: "Combo Juara 1" },
    desc: {
      id: "Beli 1 menu favorit , Free 1 lagi dari pilihan:\nNasgor Ayam, Nasgor Ikan Asin, Miegor Ayam",
      en: "Buy 1 favorite menu, get 1 free from selection:\nChicken Fried Rice, Salted Fish FR, Chicken Fried Noodle",
    },
  },
  {
    id: "promo-combo-juara-2",
    price: 31363,
    image: promoTpl2,
    category: "lain",
    name: { id: "Combo Juara 2", en: "Combo Juara 2" },
    desc: {
      id: "1. Nasgor Chiken Katsu + Es Teh\n2. Miegor Chiken Katsu + Es Teh\n3. Nasi Chiken Katsu + Es Teh",
      en: "1. Chicken Katsu Fried Rice + Ice Tea\n2. Chicken Katsu Fried Noodle + Ice Tea\n3. Chicken Katsu Rice + Ice Tea",
    },
  },
  {
    id: "promo-combo-juara-3",
    price: 32727,
    image: promoTpl3,
    category: "lain",
    name: { id: "Combo Juara 3", en: "Combo Juara 3" },
    desc: {
      id: "Beli menu apapun Free 1 pilihan:\nNasgor Ayam, Mie Goreng Ayam, Mie Ayam 69",
      en: "Buy any menu, get 1 free choice:\nChicken Fried Rice, Chicken Fried Noodle, Mie Ayam 69",
    },
  },
  {
    id: "promo-bukber-spesial",
    price: 136363,
    image: promoTpl4,
    category: "lain",
    name: { id: "Bukber Spesial", en: "Special Bukber" },
    desc: {
      id: "1 Porsi ayam mentega, 1 Porsi capcay ayam, 1 Porsi koloke, 3 Porsi nasi putihdan Free refill lemon tea",
      en: "1 Portion of butter chicken, 1 Portion of chicken capcay, 1 Portion of koloke, 3 Portions of white rice and Free refill lemon tea",
    },
  },
];

export const PromoSection = () => {
  const { lang } = useLang();
  const { add, setOpen } = useCart();
  const [preview, setPreview] = useState<MenuItem | null>(null);

  const handleAdd = (item: MenuItem) => {
    add(item);
    toast.success(`${item.name[lang]} ${lang === "id" ? "ditambahkan" : "added"}`, {
      action: { label: lang === "id" ? "Lihat" : "View", onClick: () => setOpen(true) },
    });
  };

  return (
    <section id="promo" className="relative overflow-hidden">
      {/* HERO PROMO - 2 column layout: image left, text right */}
      <div className="bg-background py-16 md:py-24">
        <div className="container container-px">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left: Image */}
            <div className="flex justify-center md:justify-end">
              <div
                className="relative w-full max-w-[420px] overflow-hidden bg-transparent"
                style={{ aspectRatio: "3 / 4" }}
              >
                <img
                  src={promoHero}
                  alt={lang === "id" ? "Promo Nasi Goreng 69" : "Nasi Goreng 69 Promo"}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right: Headline */}
            <div className="text-center md:text-left">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-brand">
                {lang === "id" ? (
                  <>
                    Harga Santai,{" "}
                    <span className="text-primary">Rasa Ga Main-Main</span>
                  </>
                ) : (
                  <>
                    Chill Prices,{" "}
                    <span className="text-primary">Serious Flavor</span>
                  </>
                )}
              </h2>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0">
                {lang === "id"
                  ? "Nikmati paket terbaik kami dengan harga hemat yang pas di kantong!"
                  : "Enjoy our best bundles at prices that fit your pocket!"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 PROMO TEMPLATES */}
      <div className="bg-brand-cream/30 py-16 md:py-24">
        <div className="container container-px">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
            {promoTemplates.map((p) => (
              <article
                key={p.id}
                className="group w-full max-w-[300px] bg-background rounded-2xl shadow-card hover:shadow-soft hover:-translate-y-1 transition-all overflow-hidden border border-border/50 flex flex-col"
              >
                {/* Click image to preview full */}
                <button
                  type="button"
                  onClick={() => setPreview(p)}
                  aria-label={`${lang === "id" ? "Lihat foto" : "View photo"} ${p.name[lang]}`}
                  className="relative w-full bg-muted overflow-hidden block focus:outline-none focus:ring-2 focus:ring-brand"
                  style={{ aspectRatio: "274 / 372" }}
                >
                  <img
                    src={p.image}
                    alt={p.name[lang]}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                  />
                </button>
                {/* Description column */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-bold text-brand leading-tight">
                    {p.name[lang]}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1 whitespace-pre-line">
                    {p.desc[lang]}
                  </p>
                  <div className="mt-4 pt-4 border-t border-dashed border-border flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        {lang === "id" ? "Harga" : "Price"}
                      </p>
                      <p className="font-mono font-bold text-sm text-foreground">{formatRp(p.price)}</p>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => handleAdd(p)}
                      className="rounded-full font-semibold bg-brand hover:bg-brand/90 text-brand-foreground"
                    >
                      <Plus className="w-3.5 h-3.5 mr-1" />
                      {lang === "id" ? "Tambah" : "Add"}
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Image preview dialog */}
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
