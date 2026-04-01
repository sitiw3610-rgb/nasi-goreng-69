import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Instagram } from "lucide-react";

const WA_URL = "https://wa.me/6281775118555";
const IG_URL = "https://www.instagram.com/nasgor_69official?igsh=MWQyZ2N0aWFzcjByaQ==";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <motion.a
      href={IG_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-12 h-12 rounded-full bg-gradient-to-tr from-[hsl(330,80%,55%)] to-[hsl(280,70%,50%)] text-white shadow-lg flex items-center justify-center hover:shadow-[0_0_20px_rgba(225,48,108,0.5)] transition-shadow duration-300"
      title="Instagram"
    >
      <Instagram className="w-5 h-5" />
    </motion.a>
    <motion.a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-12 h-12 rounded-full bg-[hsl(142,70%,45%)] text-white shadow-lg flex items-center justify-center hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-shadow duration-300"
      title="WhatsApp"
    >
      <Phone className="w-5 h-5" />
    </motion.a>
  </div>
);

export default FloatingButtons;
