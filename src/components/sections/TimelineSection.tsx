import { useEffect, useRef, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
const t2007 = "https://nasigoreng69.com/wp-content/uploads/2022/07/WhatsApp-Image-2020-03-13-at-15.52.13.jpeg";
const t2011 = "https://nasi-goreng-magic.lovable.app/lovable-uploads/5d5f8979-fe56-4055-823c-e31c2cb454d8.jpg";
const t2013 = "https://nasi-goreng-magic.lovable.app/lovable-uploads/10c28766-3f31-4402-a8b4-4dbe3de1d079.jpg";
const t2021 = "https://nasigoreng69.com/wp-content/uploads/2022/07/WhatsApp-Image-2020-03-13-at-15.52.13.jpeg";
const t2025 = "https://nasi-goreng-magic.lovable.app/lovable-uploads/5d5f8979-fe56-4055-823c-e31c2cb454d8.jpg";

type Entry = {
  year: string;
  subtitle: { id: string; en: string };
  body: { id: string; en: string };
  image: string;
  alt: string;
};

const entries: Entry[] = [
  {
    year: "2007",
    subtitle: { id: "Awal Mula", en: "The Beginning" },
    body: {
      id: "Pada tahun 2007, Sartomo memulai petualangan kuliner di Sidoarjo, Jawa Timur, dengan membuka outlet pertama Nasi Goreng 69 sebagai warung malam sederhana yang menyajikan nasi goreng super lezat dengan bumbu rahasia, langsung populer di kalangan warga lokal berkat rasa autentik dan harga terjangkau.",
      en: "In 2007, Sartomo began his culinary journey in Sidoarjo, East Java, opening the first Nasi Goreng 69 outlet as a humble night warung serving super-tasty fried rice with a secret spice blend — instantly popular thanks to its authentic flavour and affordable price.",
    },
    image: t2007,
    alt: "Outlet pertama Nasi Goreng 69 di Sidoarjo, 2007",
  },
  {
    year: "2011",
    subtitle: { id: "Perjalanan Panjang", en: "The Long Journey" },
    body: {
      id: "Bisnis berkembang pesat menjadi 23 cabang di kota-kota Jawa seperti Surabaya, Malang, Kediri, Madiun, Solo, dan Magelang melalui tawaran waralaba awal, tapi Sartomo memilih beli kembali gerai mitra untuk kendalikan kualitas, menjaga standar rasa dan kebersihan.",
      en: "The business grew rapidly to 23 branches across Javanese cities including Surabaya, Malang, Kediri, Madiun, Solo, and Magelang through early franchising — but Sartomo chose to buy back partner outlets to control quality and maintain standards of taste and cleanliness.",
    },
    image: t2011,
    alt: "Cabang Nasi Goreng 69 berkembang di kota-kota Jawa, 2011",
  },
  {
    year: "2013–2020",
    subtitle: { id: "Awal Gabung 69 Group", en: "Joining 69 Group" },
    body: {
      id: "Nasi Goreng 69 bergabung dengan 69 Group, perkuat operasional dengan SOP ketat, bumbu sachet, peralatan modern, serta ekspansi cabang ke kota-kota seperti Solo, Kediri, dan luar Jawa Timur, sambil kelola sendiri tanpa franchise baru sementara.",
      en: "Nasi Goreng 69 joined 69 Group, strengthening operations with strict SOPs, sachet spices, and modern equipment, while expanding branches to cities like Solo, Kediri, and beyond East Java — managed in-house with no new franchises for the time being.",
    },
    image: t2013,
    alt: "Dapur profesional Nasi Goreng 69 dengan SOP ketat",
  },
  {
    year: "2021–2024",
    subtitle: { id: "Ekspansi", en: "Expansion" },
    body: {
      id: "Tahun 2021-2024, ekspansi lanjut ke Jawa Barat, Jakarta, serta kota besar luar Jawa; sistem operasional efisien diperkuat, promo digital via Instagram @nasgor_69official, dan persiapan franchise baru dengan SOP lengkap.",
      en: "From 2021-2024, expansion continued to West Java, Jakarta, and major cities beyond Java; efficient operations were reinforced, digital promos launched via Instagram @nasgor_69official, and preparations made for new franchises with complete SOPs.",
    },
    image: t2021,
    alt: "Outlet Nasi Goreng 69 modern di kota besar, 2021-2024",
  },
  {
    year: "2025–Present",
    subtitle: { id: "Brand Nasional", en: "A National Brand" },
    body: {
      id: "Akhir 2025-awal 2026, franchise dibuka kembali secara masif: grand opening Plaza Malioboro (November 2025) dengan menu variatif seperti mie ayam dan hotplate; paket investasi Gerobak Rp40 juta, Food Court Rp115 juta, Restoran Rp180 juta (balik modal 8-9 bulan, omzet Rp18-50 juta/bulan); cabang luas di Surabaya-Malang-Solo-Yogyakarta, sambil rayakan Tahun Baru 2026 via promo aktif.",
      en: "Late 2025 to early 2026, franchising reopens at scale: grand opening at Plaza Malioboro (November 2025) with a varied menu including chicken noodles and hotplate; investment packages — Cart Rp40M, Food Court Rp115M, Restaurant Rp180M (ROI 8-9 months, revenue Rp18-50M/month); wide presence across Surabaya–Malang–Solo–Yogyakarta, while celebrating New Year 2026 with active promos.",
    },
    image: t2025,
    alt: "Grand opening Nasi Goreng 69 di Plaza Malioboro, 2025",
  },
];

const TimelineItem = ({ entry, index }: { entry: Entry; index: number }) => {
  const { lang } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reversed = index % 2 === 1;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className={`${reversed ? "lg:order-2" : "lg:order-1"}`}>
        <span className="inline-block text-xs uppercase tracking-[0.3em] text-brand font-semibold">
          {entry.subtitle[lang]}
        </span>
        <h3 className="mt-2 font-display text-5xl md:text-6xl font-bold text-brand leading-none">
          {entry.year}
        </h3>
        <div className="mt-4 h-1 w-16 bg-brand rounded-full" />
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          {entry.body[lang]}
        </p>
      </div>
      <div className={`${reversed ? "lg:order-1" : "lg:order-2"}`}>
        <div className="relative">
          <img
            src={entry.image}
            alt={entry.alt}
            loading="lazy"
            width={1024}
            height={768}
            className="rounded-2xl shadow-card w-full aspect-[4/3] object-cover"
          />
          <div className="absolute -top-4 -left-4 bg-brand text-brand-foreground rounded-xl px-4 py-2 shadow-soft hidden md:block">
            <p className="font-display text-sm font-bold tracking-widest">{entry.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TimelineSection = () => {
  const { lang } = useLang();
  return (
    <section className="py-20 md:py-28 bg-brand-cream/30">
      <div className="container container-px">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">
            {lang === "id" ? "Perjalanan Kami" : "Our Journey"}
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-brand text-balance">
            {lang === "id"
              ? "Membangun Rasa Yang Autentik"
              : "Building an Authentic Taste"}
          </h2>
        </div>

        <div className="space-y-20 md:space-y-28">
          {entries.map((entry, i) => (
            <TimelineItem key={entry.year} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
