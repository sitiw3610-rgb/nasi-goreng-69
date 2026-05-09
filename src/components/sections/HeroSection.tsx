import heroVideo from "@/assets/hero-nasgor.mp4";
import { useLang } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { WA_NUMBER } from "@/lib/whatsapp";

export const HeroSection = () => {
  const { t } = useLang();
  const navigate = useNavigate();
  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Halo Nasi Goreng 69, saya ingin memesan."
  )}`;
  const openWA = () => window.open(waHref, "_blank", "noopener,noreferrer");

  return (
    <section id="beranda" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative container container-px py-16 md:py-24">
        <div className="max-w-2xl text-white animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/30 text-xs uppercase tracking-[0.2em] font-medium">
            <Flame className="w-3.5 h-3.5" />
            {t.hero.tag}
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05] text-balance">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-xl leading-relaxed">{t.hero.subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              onClick={openWA}
              size="lg"
              className="bg-brand-soft hover:bg-brand-soft/90 text-brand-soft-foreground rounded-full px-7 h-13 text-base font-semibold shadow-glow group"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => navigate("/menu")}
              size="lg"
              variant="outline"
              className="rounded-full px-7 h-13 text-base font-semibold bg-transparent border-white/60 text-white hover:bg-white hover:text-brand"
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/70">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-10 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
};
