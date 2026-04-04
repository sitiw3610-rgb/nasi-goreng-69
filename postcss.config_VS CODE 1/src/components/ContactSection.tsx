import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Instagram, Phone } from "lucide-react";

const WA_URL = "https://wa.me/6281775118555?text=Halo%20saya%20ingin%20order%20Nasgor%2069";
const IG_URL = "https://www.instagram.com/nasgor_69official/";

const handleExternal = (url: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  window.open(url, "_blank", "noopener,noreferrer");
};

const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="kontak" className="py-20 md:py-28 bg-sidebar" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
          
          Hubungi Kami
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground font-body max-w-md mx-auto mb-10">
          
          Punya pertanyaan atau ingin pesan? Hubungi kami langsung melalui Instagram atau WhatsApp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <a
            href={IG_URL}
            onClick={handleExternal(IG_URL)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[hsl(330,80%,55%)] to-[hsl(280,70%,50%)] text-white font-display font-bold text-base shadow-lg hover:shadow-[0_0_20px_rgba(225,48,108,0.5)] hover:scale-105 active:scale-95 transition-all duration-300">
            
            <Instagram className="w-5 h-5" />
            Follow us on Instagram
          </a>

          <a
            href={WA_URL}
            onClick={handleExternal(WA_URL)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[hsl(142,70%,45%)] text-white font-display font-bold text-base shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-105 active:scale-95 transition-all duration-300">
            
            <Phone className="w-5 h-5" />
            Chat us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>);

};

export default ContactSection;