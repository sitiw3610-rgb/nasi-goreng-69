import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUp,
  Instagram,
  Facebook,
  Youtube,
  Mail,
} from "lucide-react";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialIcons = [
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://youtube.com/@nasgor69official32?si=O7cuoNCC9noVMcpK",
    },
    {
      icon: Instagram,
      label: "TikTok",
      href: "https://www.tiktok.com/@nasigoreng69.id?_r=1&_t=ZS-96Bsa47CmBR",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/share/1E2sSBxy9B/",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:nasgor_69@yahoo.co.id",
    },
  ];

  const handleExternal =
    (url: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      if (url.startsWith("mailto:")) {
        window.location.href = url;
        return;
      }

      window.open(url, "_blank", "noopener,noreferrer");
    };

  return (
    <footer className="gradient-footer pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* BRAND */}
          <div>
            <h3 className="font-display font-bold text-xl text-brand-dark mb-4">
              Nasi Goreng 69
            </h3>

            <p className="text-sm font-body text-brand-dark/70">
              Sajian nasi goreng spesial yang dimasak dengan bahan berkualitas
              untuk menghadirkan rasa yang selalu fresh dan lezat setiap hari.
            </p>
          </div>

          {/* KONTAK */}
          <div>
            <h4 className="font-display font-bold text-brand-dark mb-4">
              Kontak
            </h4>

            <div className="space-y-2 text-sm font-body text-brand-dark/70">
              <p>
                Phone / Fax: 031.99031397 / 031.99031579
                <br />
                Web: www.nasigoreng69.com
              </p>

              <p>
                Ruko Monroe No.63-65
                <br />
                Jl Kahuripan Raya Kahuripan Nirwana Sidoarjo – Jawa Timur
              </p>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-display font-bold text-brand-dark mb-4">
              Ikuti Kami
            </h4>

            <div className="flex gap-3">
              {socialIcons.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  onClick={handleExternal(s.href)}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -4 }}
                  className="w-10 h-10 rounded-full bg-brand-dark/10 flex items-center justify-center cursor-pointer transition-shadow duration-300 glow-hover"
                  title={s.label}
                >
                  <s.icon className="w-5 h-5 text-brand-dark" />
                </motion.a>
              ))}
            </div>

            {/* FAQ LINK */}
            <div className="mt-5">
              <Link
                to="/faq"
                onClick={() => {
                  setTimeout(() => {
                    const section = document.getElementById("faq-section");

                    if (section) {
                      section.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    } else {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }
                  }, 300);
                }}
                className="text-sm font-medium text-brand-dark/80 hover:text-brand-dark transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-brand-dark/20 pt-6 text-center">
          <p className="text-sm font-body text-brand-dark/50">
            © 2026 Nasi Goreng 69. All rights reserved.
          </p>
        </div>
      </div>

      {/* SCROLL TO TOP */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-secondary text-secondary-foreground shadow-xl flex items-center justify-center glow-hover z-50"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;