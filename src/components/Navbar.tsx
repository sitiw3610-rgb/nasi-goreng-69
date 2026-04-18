import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Beranda", href: "/beranda" },
  { label: "Cerita Kami", href: "/cerita-kami" },
  { label: "Menu", href: "/menu" },
  { label: "Promo", href: "/promo" },
  { label: "Outlet Terdekat", href: "/outlet" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <motion.button
          onClick={() => navigate("/beranda")}
          whileHover={{ scale: 1.08 }}
          className="flex items-center gap-2"
        >
          <img
            alt="Nasi Goreng 69"
            className="h-10 md:h-14 w-auto"
            src="/lovable-uploads/19431ac5-c8df-427a-bc44-447248ae76f7.png"
          />
        </motion.button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <motion.button
              key={item.href}
              whileHover={{ scale: 1.05 }}
              className={`relative px-3 py-2 text-sm font-medium font-body transition-colors duration-300 ${
                isActive(item.href)
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
              onClick={() => navigate(item.href)}
            >
              {item.label}
              {isActive(item.href) && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <motion.span
            animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }}
            className="block w-6 h-0.5 bg-foreground"
          />
          <motion.span
            animate={{ opacity: mobileOpen ? 0 : 1 }}
            className="block w-6 h-0.5 bg-foreground"
          />
          <motion.span
            animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
            className="block w-6 h-0.5 bg-foreground"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden glass-nav overflow-hidden"
          >
            <div className="flex flex-col px-4 py-2">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className={`py-3 font-body text-sm font-medium border-b border-border/30 text-left ${
                    isActive(item.href) ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => {
                    navigate(item.href);
                    setMobileOpen(false);
                  }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
