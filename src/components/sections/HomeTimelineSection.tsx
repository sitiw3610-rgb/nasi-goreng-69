import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";

const years: string[] = ["2007", "2011", "2013–2020", "2021–2024", "2025–Present"];

export const HomeTimelineSection = () => {
  const { lang } = useLang();

  return (
    <section className="py-20 md:py-28 bg-brand-cream/30">
      <div className="container container-px">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">
            {lang === "id" ? "Perjalanan Kami" : "Our Journey"}
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-brand text-balance">
            {lang === "id"
              ? "Membangun Rasa Yang Autentik"
              : "Building an Authentic Taste"}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-3">
          {years.map((year) => (
            <span
              key={year}
              className="inline-flex items-center px-5 py-2 rounded-full border border-brand/30 bg-brand-cream/50 text-brand font-display font-semibold text-sm md:text-base"
            >
              {year}
            </span>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/tentang"
            className="inline-flex items-center gap-2 bg-brand text-brand-foreground hover:bg-brand/90 font-semibold px-7 py-3.5 rounded-full shadow-soft transition-colors"
          >
            <span>{lang === "id" ? "Baca Selengkapnya" : "Read More"}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
