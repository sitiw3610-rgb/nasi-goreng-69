import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const BerandaOutletCTA = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const navigate = useNavigate();

  return (
    <section ref={ref} className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background image */}
      <img
        src={heroSlide3}
        alt="Outlet Nasi Goreng 69"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-dark/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white leading-tight mb-8 drop-shadow-2xl"
        >
          Menghadirkan Kebahagiaan<br />Di Setiap Porsi
        </motion.h2>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/outlet")}
          className="px-8 py-4 rounded-lg bg-gradient-to-r from-secondary to-accent text-secondary-foreground font-body font-bold shadow-xl text-lg"
        >
          Outlet Kami
        </motion.button>
      </div>
    </section>
  );
};

export default BerandaOutletCTA;
