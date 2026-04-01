import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Instagram, Facebook, Phone, Mail } from "lucide-react";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const WA_URL = "https://wa.me/6281775118555?text=Halo%20saya%20ingin%20order%20Nasgor%2069";
  const IG_URL = "https://www.instagram.com/nasgor_69official/";

  const handleExternal = (url: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const socialIcons = [
  { icon: Instagram, label: "Instagram", href: IG_URL, isWa: false },
  { icon: Facebook, label: "Facebook", href: "#", isWa: false },
  { icon: Phone, label: "Pesan via WA", href: WA_URL, isWa: true },
  { icon: Mail, label: "Email", href: "#", isWa: false }];


  return (
    <footer className="gradient-footer pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-display font-bold text-xl text-brand-dark mb-4">Nasi Goreng 69</h3>
            <p className="text-sm font-body text-brand-dark/70">
              Sajian nasi goreng spesial yang dimasak dengan bahan berkualitas untuk menghadirkan rasa yang selalu fresh dan lezat setiap hari. 
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-brand-dark mb-4">Kontak</h4>
            <div className="space-y-2 text-sm font-body text-brand-dark/70">
              <p>​Phone / Fax: 031.99031397 / 031.99031579 
Web: www.nasigoreng69.com</p>
              <p>Ruko Monroe No.63-65  
Jl Kahuripan Raya Kahuripan Nirwana Sidoarjo – Jawa Timur
              </p>
            </div>
            {/* Contact buttons */}
            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              







              
              







              
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-brand-dark mb-4">Ikuti Kami</h4>
            <div className="flex gap-3">
              {socialIcons.map((s) =>
              <motion.a
                key={s.label}
                href={s.href}
                onClick={s.href !== "#" ? handleExternal(s.href) : undefined}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -4 }}
                className={`w-10 h-10 rounded-full bg-brand-dark/10 flex items-center justify-center cursor-pointer transition-shadow duration-300 ${
                s.isWa ? "hover:shadow-[0_0_16px_rgba(37,211,102,0.6)]" : "glow-hover"}`
                }
                title={s.label}>
                
                  <s.icon className="w-5 h-5 text-brand-dark" />
                </motion.a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-brand-dark/20 pt-6 text-center">
          <p className="text-sm font-body text-brand-dark/50">© 2026 Nasi Goreng 69. All rights reserved.

          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <AnimatePresence>
        {showTop &&
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-secondary text-secondary-foreground shadow-xl flex items-center justify-center glow-hover z-50">
          
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        }
      </AnimatePresence>
    </footer>);

};

export default Footer;