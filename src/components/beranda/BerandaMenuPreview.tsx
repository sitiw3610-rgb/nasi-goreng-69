import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const menuPreviewItems = [
  { name: "Nasi Goreng Spesial 69", img: "/lovable-uploads/ab1bc644-62d8-40ed-bda3-96fa480444cf.png", price: "Rp 51.000" },
  { name: "Nasi Goreng Seafood", img: "/lovable-uploads/e99e1fe7-a840-44e3-b7a9-e9eccbd4e7ad.jpg", price: "Rp 48.000" },
  { name: "Hot Plate Sapi Lada Hitam", img: "/lovable-uploads/607c364b-4c04-4132-afb7-a8f630e2f659.jpg", price: "Rp 52.000" },
  { name: "Mie Hotplate Sapi Cah Cabe", img: "/lovable-uploads/1edfcccb-c96a-4dfa-a883-46f6110cb080.jpg", price: "Rp 54.000" },
  { name: "Tammie Capcay", img: "/lovable-uploads/105992da-5dda-4db0-bd14-b18a4a8517f7.jpg", price: "Rp 47.000" },
  { name: "Mie Goreng Spesial 69", img: "/lovable-uploads/30817538-598d-428b-a12d-70b17c8c66db.jpg", price: "Rp 42.000" },
];

const BerandaMenuPreview = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-5xl font-display font-bold text-primary text-center mb-4"
        >
          Menu Pilihan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground font-body mb-10"
        >
          Sajian terbaik dari dapur kami
        </motion.p>
      </div>

      {/* Carousel */}
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 bg-card/80 hover:bg-card shadow-lg rounded-full p-2 transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 bg-card/80 hover:bg-card shadow-lg rounded-full p-2 transition-all"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-8 md:px-16 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {menuPreviewItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="min-w-[280px] max-w-[280px] bg-card rounded-2xl overflow-hidden shadow-lg flex-shrink-0 snap-center group"
            >
              <div className="overflow-hidden h-44">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-foreground text-lg">{item.name}</h3>
                <span className="text-secondary font-body font-bold text-lg mt-2 block">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/menu")}
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-body font-semibold shadow-lg text-lg"
        >
          Selengkapnya
        </motion.button>
      </div>
    </section>
  );
};

export default BerandaMenuPreview;
