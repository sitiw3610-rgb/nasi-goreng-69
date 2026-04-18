import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, Upload, X } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const STORAGE_KEY = "nasgor69_hero_slides";

const defaultSlides = [
  { img: heroSlide1, label: "Menu Favorit" },
  { img: heroSlide2, label: "Cita Rasa Khas" },
  { img: heroSlide3, label: "Outlet Nyaman & Modern" },
];

const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const loadSavedImages = (): (string | null)[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return defaultSlides.map(() => null);
};

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [customImages, setCustomImages] = useState<(string | null)[]>(loadSavedImages);
  const [titleVisible, setTitleVisible] = useState(false);
  const [showUploadPanel, setShowUploadPanel] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const slides = defaultSlides.map((s, i) => ({
    ...s,
    img: customImages[i] || s.img,
  }));

  const goNext = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length]);
  const goPrev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [slides.length]);

  const handleImageUpload = async (index: number, file: File) => {
    const base64 = await fileToBase64(file);
    setCustomImages((prev) => {
      const next = [...prev];
      next[index] = base64;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (e) {
        console.warn("localStorage full, image too large");
      }
      return next;
    });
  };

  const resetImage = (index: number) => {
    setCustomImages((prev) => {
      const next = [...prev];
      next[index] = null;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) handleImageUpload(current, file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleImageUpload(current, file);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  useEffect(() => {
    setTitleVisible(true);
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [goNext]);

  const descWords = "Aneka sajian Nasi Goreng, Mie Goreng dan berbagai Hot Plate, Penyetan, Masakan Tradisional, Aneka Jus dan Soft Drink".split(" ");

  const nav = useNavigate();
  const goTo = (path: string) => nav(path);

  return (
    <section id="beranda" ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Text side */}
        <div className="order-2 md:order-1 space-y-6">
          <div className="overflow-hidden">
            {titleVisible && (
              <motion.h1
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="text-4xl sm:text-5xl lg:text-7xl font-display font-black text-primary whitespace-nowrap overflow-hidden border-r-4 border-primary"
                style={{
                  animation: "blink-caret 0.75s step-end infinite",
                  borderRightColor: "hsl(var(--primary))",
                  fontSize: "clamp(2.5rem, 5vw, 5rem)",
                }}
              >
                NASI GORENG 69
              </motion.h1>
            )}
          </div>

          <p className="text-lg md:text-xl text-brand-dark leading-relaxed font-body" style={{ fontSize: "clamp(1rem, 2vw, 1.75rem)" }}>
            {descWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.04, duration: 0.3 }}
                className="inline-block mr-1.5"
              >
                {word}
              </motion.span>
            ))}
          </p>

          {/* CTA buttons - gold gradient */}
          <div className="flex flex-wrap gap-3">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goTo("/menu")}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-secondary to-accent text-secondary-foreground font-body font-semibold shadow-lg pulse-btn"
            >
              🍽️ Menu Kami
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goTo("/promo")}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-body font-semibold shadow-lg glow-hover"
            >
              🔥 Promo
            </motion.button>
          </div>
        </div>

        {/* Slider side */}
        <motion.div className="order-1 md:order-2 flex flex-col items-center" style={{ y }}>
          <div
            className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] group"
            onDrop={handleDrop}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={slides[current].img}
                alt={slides[current].label}
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => fileInputRef.current?.click()}
              />
            </AnimatePresence>

            {/* Drag overlay */}
            {isDragging && (
              <div className="absolute inset-0 rounded-3xl bg-primary/30 border-4 border-dashed border-primary flex items-center justify-center z-20 pointer-events-none">
                <span className="text-primary-foreground font-body text-lg font-bold bg-primary/80 px-4 py-2 rounded-xl">
                  📷 Drop gambar di sini
                </span>
              </div>
            )}

            {/* Upload overlay on hover */}
            <div className="absolute inset-0 rounded-3xl bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <span className="text-primary-foreground font-body text-sm bg-brand-dark/60 px-3 py-1.5 rounded-lg">
                📷 Klik / Drop untuk ganti gambar
              </span>
            </div>

            {/* Upload panel toggle */}
            <button
              onClick={() => setShowUploadPanel(!showUploadPanel)}
              className="absolute top-2 right-2 z-20 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full p-2 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
              title="Upload Panel"
            >
              <Upload className="w-4 h-4" />
            </button>

            {/* Arrows */}
            <button
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-brand-dark/50 hover:bg-brand-dark/70 text-primary-foreground rounded-full p-1.5 transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-brand-dark/50 hover:bg-brand-dark/70 text-primary-foreground rounded-full p-1.5 transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Slide label */}
            <motion.div
              className="absolute bottom-4 left-4 right-4 bg-brand-dark/70 backdrop-blur-sm rounded-xl px-4 py-2 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-primary-foreground font-body text-sm font-medium">{slides[current].label}</span>
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary scale-125" : "bg-muted"
                }`}
              />
            ))}
          </div>

          {/* Upload Panel */}
          <AnimatePresence>
            {showUploadPanel && (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                className="mt-4 w-full max-w-sm"
              >
                <div className="bg-card/90 backdrop-blur-sm rounded-2xl border border-border p-4 shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-body font-semibold text-sm text-foreground">📷 Ganti Foto Slide</h3>
                    <button onClick={() => setShowUploadPanel(false)} className="text-muted-foreground hover:text-foreground">
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {defaultSlides.map((slide, i) => (
                      <div key={i} className="relative group/thumb">
                        <button
                          onClick={() => { setCurrent(i); fileInputRef.current?.click(); }}
                          className={`w-full aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                            i === current ? "border-primary shadow-md" : "border-border hover:border-primary/50"
                          }`}
                        >
                          <img
                            src={customImages[i] || slide.img}
                            alt={slide.label}
                            className="w-full h-full object-cover"
                          />
                        </button>
                        <span className="block text-center text-[10px] font-body text-muted-foreground mt-1 truncate">
                          {slide.label}
                        </span>
                        {customImages[i] && (
                          <button
                            onClick={() => resetImage(i)}
                            className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full p-0.5 opacity-0 group-hover/thumb:opacity-100 transition-opacity shadow-sm"
                            title="Reset ke default"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Drag-drop zone */}
                  <label
                    className="mt-3 flex flex-col items-center justify-center gap-1 border-2 border-dashed border-border hover:border-primary/60 rounded-xl p-3 cursor-pointer transition-colors"
                    onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f?.type.startsWith("image/")) handleImageUpload(current, f); }}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <Upload className="w-5 h-5 text-muted-foreground" />
                    <span className="text-xs font-body text-muted-foreground text-center">
                      Drop foto di sini atau <span className="text-primary font-medium">klik untuk upload</span>
                    </span>
                    <span className="text-[10px] text-muted-foreground">Slide aktif: {slides[current].label}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hidden file input for direct click */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </motion.div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;
