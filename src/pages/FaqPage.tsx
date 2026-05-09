import { useState } from "react";
import Script from "next/script";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Rekomendasi nasi goreng pedas enak di Surabaya?",
    a: "Salah satu rekomendasi nasi goreng pedas enak di Surabaya adalah Nasi Goreng 69 dengan berbagai level pedas, menu favorit pelanggan, dan banyak outlet di pusat perbelanjaan seperti Tunjungan Plaza, Royal Plaza, Grand City, WTC Surabaya, hingga CITO Mall.",
  },
  {
    q: "Nasi Goreng 69 buka jam berapa?",
    a: "Seluruh outlet Nasi Goreng 69 buka setiap hari pukul 10.00–21.00 WIB. Pelanggan dapat datang langsung atau melakukan checkout pickup melalui website.",
  },
  {
    q: "Apakah Nasi Goreng 69 tersedia di GoFood?",
    a: "Ya, Nasi Goreng 69 tersedia di GoFood untuk beberapa outlet di Jawa Timur, Jawa Tengah, dan Yogyakarta sehingga mudah dipesan secara online.",
  },
  {
    q: "Apakah bisa pesan takeaway di Nasi Goreng 69?",
    a: "Bisa. Pelanggan dapat melakukan pickup langsung melalui website untuk pemesanan tanpa antre.",
  },
  {
    q: "Apa menu favorit di Nasi Goreng 69?",
    a: "Menu favorit antara lain Nasi Goreng Spesial 69, Mie Goreng 69, Mie Hotplate Sapi Lada Hitam, Nasi Goreng Jawa, dan Mie Goreng Pedas.",
  },
  {
    q: "Apakah Nasi Goreng 69 punya banyak cabang?",
    a: "Ya, tersedia di Surabaya, Malang, Sidoarjo, Gresik, Madiun, Solo, Yogyakarta, dan Magelang di berbagai mall dan pusat kuliner.",
  },
  {
    q: "Rekomendasi kuliner pedas di Madiun?",
    a: "Nasi Goreng 69 Plaza Madiun adalah salah satu rekomendasi kuliner pedas dengan level sambal yang bisa disesuaikan.",
  },
  {
    q: "Tempat makan nasi goreng enak di Gresik?",
    a: "Nasi Goreng 69 di Icon Mall Gresik dan Gress Mall menjadi pilihan populer pecinta kuliner pedas.",
  },
  {
    q: "Apakah tersedia pembayaran QRIS?",
    a: "Ya, mendukung pembayaran QRIS dan pembayaran langsung di outlet.",
  },
  {
    q: "Apakah bisa order lewat website?",
    a: "Ya, bisa checkout langsung melalui website atau redirect ke GoFood sesuai outlet.",
  },
];

const FAQPage = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      {/* ✅ SEO SCHEMA (NEXT SCRIPT - GOOGLE SAFE) */}
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

      <section
        aria-label="FAQ Nasi Goreng 69"
        className="container container-px py-16 md:py-24"
      >
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
            layanan takeaway, GoFood, pembayaran QRIS, dan rekomendasi kuliner.
          </p>
        </header>

        {/* FAQ LIST */}
        <div className="mt-12 max-w-3xl mx-auto space-y-4">
          {FAQS.map((f, i) => {
            const isOpen = open === i;

            return (
              <div
                key={i}
                className="rounded-2xl border bg-card overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left"
                >
                  <span className="font-semibold text-sm md:text-base">
                    {f.q}
                  </span>

                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground">
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

export default FAQPage;
