import { useState } from "react";
import { Link } from "react-router-dom";
import aboutImg from "@/assets/about-new.jpg";
import { useLang } from "@/i18n/LanguageContext";

type TimelineEntry = {
  year: string;
  body: { id: string; en: string };
};

const timelineEntries: TimelineEntry[] = [
  {
    year: "2007",
    body: {
      id: "Pada tahun 2007, Sartomo memulai petualangan kuliner di Sidoarjo, Jawa Timur, dengan membuka outlet pertama Nasi Goreng 69 sebagai warung malam sederhana yang menyajikan nasi goreng super lezat dengan bumbu rahasia.",
      en: "In 2007, Sartomo began his culinary journey in Sidoarjo, East Java, opening the first Nasi Goreng 69 outlet as a humble night warung serving super-tasty fried rice with a secret spice blend.",
    },
  },
  {
    year: "2011",
    body: {
      id: "Bisnis berkembang pesat menjadi 23 cabang di kota-kota Jawa seperti Surabaya, Malang, Kediri, Madiun, Solo, dan Magelang melalui tawaran waralaba awal.",
      en: "The business grew rapidly to 23 branches across Javanese cities including Surabaya, Malang, Kediri, Madiun, Solo, and Magelang through early franchising.",
    },
  },
  {
    year: "2013–2020",
    body: {
      id: "Nasi Goreng 69 bergabung dengan 69 Group, perkuat operasional dengan SOP ketat, bumbu sachet, peralatan modern, serta ekspansi cabang ke kota-kota seperti Solo, Kediri, dan luar Jawa Timur.",
      en: "Nasi Goreng 69 joined 69 Group, strengthening operations with strict SOPs, sachet spices, and modern equipment, while expanding branches to cities like Solo, Kediri, and beyond East Java.",
    },
  },
  {
    year: "2021–2024",
    body: {
      id: "Tahun 2021-2024, ekspansi lanjut ke Jawa Barat, Jakarta, serta kota besar luar Jawa; sistem operasional efisien diperkuat, promo digital via Instagram @nasgor_69official.",
      en: "From 2021-2024, expansion continued to West Java, Jakarta, and major cities beyond Java; efficient operations were reinforced, and digital promos launched via Instagram @nasgor_69official.",
    },
  },
  {
    year: "2025–Present",
    body: {
      id: "Akhir 2025-awal 2026, franchise dibuka kembali secara masif: grand opening Plaza Malioboro (November 2025) dengan menu variatif. Cabang luas di Surabaya-Malang-Solo-Yogyakarta.",
      en: "Late 2025 to early 2026, franchising reopens at scale: grand opening at Plaza Malioboro (November 2025) with a varied menu. Wide presence across Surabaya–Malang–Solo–Yogyakarta.",
    },
  },
];

export const AboutSection = ({ showTimeline = true }: { showTimeline?: boolean }) => {
  const { t, lang } = useLang();
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const activeEntry = timelineEntries.find((e) => e.year === activeYear);

  return (
    <section id="tentang" className="py-20 md:py-24 bg-background">
      <div className="container container-px grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <img
            src={aboutImg}
            alt="Warung Nasi Goreng 69"
            className="rounded-2xl shadow-card w-full aspect-[4/5] object-cover"
            loading="lazy"
            width={1200}
            height={900}
          />
          <div className="absolute -bottom-6 -right-6 bg-brand-soft text-brand-soft-foreground rounded-2xl p-6 shadow-soft hidden md:block py-0">
            <p className="font-display text-4xl font-bold leading-none">EST. 2007</p>
            <p className="uppercase tracking-widest mt-1 text-2xl font-serif font-medium">SIDOARJO</p>
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">{t.about.label}</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-brand leading-tight text-balance">
            {t.about.title}
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{t.about.body}</p>

          <div className="mt-8 grid grid-cols-3 gap-4 md:gap-6">
            {t.about.stats.map((s) => (
              <div key={s.l} className="border-l-2 border-brand pl-4">
                <p className="font-display text-3xl md:text-4xl font-bold text-brand">{s.v}</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</p>
              </div>
            ))}
          </div>

          {/* Sub-section: Timeline */}
          {showTimeline && (
          <div className="mt-8 pt-6 border-t border-border">
            <h3 className="font-display text-lg md:text-xl font-semibold text-brand text-balance">
              {lang === "id"
                ? "Perjalanan Kami Dalam Membangun Rasa Yang Autentik"
                : "Our Journey Building an Authentic Taste"}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {timelineEntries.map((entry) => {
                const isActive = activeYear === entry.year;
                return (
                  <button
                    key={entry.year}
                    type="button"
                    onClick={() => setActiveYear(isActive ? null : entry.year)}
                    onMouseEnter={() => setActiveYear(entry.year)}
                    className={`inline-flex items-center px-3 py-1.5 rounded-full border text-xs md:text-sm font-display font-semibold transition-colors ${
                      isActive
                        ? "bg-brand text-brand-foreground border-brand"
                        : "bg-brand-cream/50 text-brand border-brand/30 hover:bg-brand/10"
                    }`}
                    aria-pressed={isActive}
                  >
                    {entry.year}
                  </button>
                );
              })}
            </div>

            {activeEntry && (
              <div className="mt-4 p-4 rounded-xl bg-brand-cream/40 border border-brand/15">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {activeEntry.body[lang]}
                </p>
              </div>
            )}

            <div className="mt-6">
              <Link
                to="/tentang"
                className="inline-flex items-center gap-2 bg-brand text-brand-foreground hover:bg-brand/90 font-semibold px-6 py-3 rounded-full shadow-soft transition-colors text-sm md:text-base"
              >
                <span>{lang === "id" ? "Baca Selengkapnya" : "Read More"}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  );
};
