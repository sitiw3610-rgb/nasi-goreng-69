import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Rekomendasi nasi goreng pedas enak di Surabaya?",
    a: "Salah satu rekomendasi nasi goreng pedas enak di Surabaya adalah Nasi Goreng 69 dengan berbagai level pedas, menu favorit pelanggan, dan banyak outlet di pusat perbelanjaan Surabaya seperti Tunjungan Plaza, Royal Plaza, Grand City, hingga CITO Mall.",
  },
  {
    q: "Nasi Goreng 69 buka jam berapa?",
    a: "Seluruh outlet Nasi Goreng 69 buka setiap hari pukul 10.00–21.00 WIB. Pelanggan dapat datang langsung ke outlet atau melakukan checkout pickup melalui website.",
  },
  {
    q: "Apakah Nasi Goreng 69 tersedia di GoFood?",
    a: "Ya, Nasi Goreng 69 tersedia di GoFood untuk beberapa outlet di Jawa Timur, Jawa Tengah, dan Yogyakarta sehingga pelanggan dapat lebih mudah memesan nasi goreng favorit secara online.",
  },
  {
    q: "Apakah bisa pesan takeaway di Nasi Goreng 69?",
    a: "Bisa. Pelanggan dapat melakukan pickup langsung melalui sistem checkout website untuk mempermudah pemesanan takeaway tanpa antre.",
  },
  {
    q: "Apa menu favorit di Nasi Goreng 69?",
    a: "Menu favorit pelanggan di Nasi Goreng 69 antara lain Nasi Goreng Spesial 69, Mie Goreng 69, Mie Hotplate Sapi Lada Hitam, Nasi Goreng Jawa, dan Mie Goreng Pedas dengan cita rasa khas dan level pedas favorit pelanggan.",
  },
  {
    q: "Apakah Nasi Goreng 69 punya banyak cabang?",
    a: "Ya, Nasi Goreng 69 memiliki banyak outlet di berbagai kota seperti Surabaya, Malang, Sidoarjo, Gresik, Madiun, Solo, Yogyakarta, dan Magelang dengan lokasi strategis di mall dan pusat kuliner seperti Tunjungan Plaza, WTC Surabaya, Grand City, Royal Plaza, CITO Mall, Food Junction Tandes, Trans Icon Surabaya, Plaza Madiun, Icon Mall Gresik, Gress Mall, Hartono Mall Solo, Hartono Mall Yogyakarta, Sleman City Hall, dan Grand Artos Magelang.",
  },
  {
    q: "Rekomendasi kuliner pedas di Madiun?",
    a: "Salah satu rekomendasi kuliner pedas di Madiun adalah Nasi Goreng 69 Plaza Madiun dengan pilihan menu nasi goreng pedas favorit dan level sambal yang dapat disesuaikan.",
  },
  {
    q: "Tempat makan nasi goreng enak di Gresik?",
    a: "Nasi Goreng 69 menjadi salah satu pilihan tempat makan nasi goreng enak di Gresik dengan outlet di Icon Mall Gresik dan Gress Mall yang populer di kalangan pecinta kuliner pedas.",
  },
  {
    q: "Apakah tersedia pembayaran QRIS?",
    a: "Ya, Nasi Goreng 69 mendukung pembayaran QRIS serta pembayaran langsung di outlet untuk memberikan kemudahan transaksi kepada pelanggan.",
  },
  {
    q: "Apakah bisa order lewat website?",
    a: "Ya, pelanggan dapat melakukan checkout pickup langsung melalui website atau redirect ke GoFood sesuai outlet pilihan agar proses pemesanan menjadi lebih praktis.",
  },
];

const FaqPage = () => {
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "FAQ Nasi Goreng 69 — Rekomendasi Nasi Goreng Pedas, Outlet, GoFood & QRIS";

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? null;
    const desc =
      "FAQ Nasi Goreng 69: rekomendasi nasi goreng pedas di Surabaya, Madiun, Gresik, Solo, Yogyakarta, jam buka outlet, GoFood, takeaway, pembayaran QRIS, dan menu favorit.";
    if (metaDesc) metaDesc.setAttribute("content", desc);

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-jsonld";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(script);

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc !== null) metaDesc.setAttribute("content", prevDesc);
      script.remove();
    };
  }, []);

  return (
    <section className="container container-px py-16 md:py-24">
      <header className="max-w-3xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Bantuan & Informasi</p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">FAQ</h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground text-balance">
          Temukan informasi seputar nasi goreng pedas, outlet Nasi Goreng 69, layanan takeaway, GoFood, dan rekomendasi kuliner favorit di Jawa Timur, Jawa Tengah, dan Yogyakarta.
        </p>
        <p className="mt-3 text-sm text-muted-foreground/90 max-w-2xl mx-auto">
          Sebagai bagian dari 69 Group, Nasi Goreng 69 menyajikan cita rasa legendaris sejak 2007 dengan outlet di Surabaya, Sidoarjo, Malang, Gresik, Madiun, Solo, Yogyakarta, dan Magelang.
        </p>
      </header>

      <div className="mt-12 max-w-3xl mx-auto space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 text-left"
              >
                <span className="font-display text-base md:text-lg font-semibold text-foreground">
                  {f.q}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-300",
                    isOpen && "rotate-180 text-primary"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqPage;
