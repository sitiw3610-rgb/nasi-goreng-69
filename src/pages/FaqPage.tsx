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
    a: "Ya, Nasi Goreng 69 memiliki banyak outlet di berbagai kota seperti Surabaya, Malang, Sidoarjo, Gresik, Madiun, Solo, Yogyakarta, dan Magelang.",
  },
  {
    q: "Rekomendasi kuliner pedas di Madiun?",
    a: "Salah satu rekomendasi kuliner pedas di Madiun adalah Nasi Goreng 69 Plaza Madiun dengan pilihan menu nasi goreng pedas favorit dan level sambal yang dapat disesuaikan.",
  },
  {
    q: "Tempat makan nasi goreng enak di Gresik?",
    a: "Nasi Goreng 69 menjadi salah satu pilihan tempat makan nasi goreng enak di Gresik dengan outlet di Icon Mall Gresik dan Gress Mall.",
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
          Bantuan & Informasi
        </p>

        <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">
          FAQ
        </h1>

        <p className="mt-4 text-base md:text-lg text-muted-foreground">
          Temukan informasi seputar nasi goreng pedas, outlet Nasi Goreng 69,
          layanan takeaway, GoFood, dan rekomendasi kuliner favorit.
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