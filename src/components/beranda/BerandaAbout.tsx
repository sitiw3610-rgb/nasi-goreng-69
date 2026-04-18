import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import heroSlide1 from "@/assets/hero-slide-1.jpg";

const BerandaAbout = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const navigate = useNavigate();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary">
              NASI GORENG 69
            </h2>
            <p className="text-lg md:text-xl text-brand-dark leading-relaxed font-body">
              Aneka sajian Nasi Goreng, Mie Goreng dan berbagai Hot Plate, Penyetan, Masakan Tradisional, Aneka Jus dan Soft Drink
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/cerita-kami")}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-secondary to-accent text-secondary-foreground font-body font-semibold shadow-lg text-lg"
            >
              Cari Tahu
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={heroSlide1}
              alt="Nasi Goreng 69"
              className="w-full h-72 md:h-96 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BerandaAbout;
