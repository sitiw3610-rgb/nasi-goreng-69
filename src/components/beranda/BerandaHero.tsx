import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  { img: heroSlide1, label: "​" },
  { img: heroSlide2, label: "​" },
  { img: heroSlide3, label: "​" },
];

const BerandaHero = () => {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const goPrev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Fullscreen background slides */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={slides[current].img}
          alt={slides[current].label}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-dark/40" />

      {/* Slide label */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.h2
          key={current}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white text-center drop-shadow-2xl px-4"
        >
          {slides[current].label}
        </motion.h2>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-3 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-3 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default BerandaHero;
