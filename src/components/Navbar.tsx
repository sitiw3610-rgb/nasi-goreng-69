import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, ShoppingBag, X, Globe, ChevronDown, Sun, Moon } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { BRAND_LOGO } from "@/lib/brand";
import { cn } from "@/lib/utils";

type SubItem = { label: { id: string; en: string }; to: string };

type NavLinkDef = {
  to: string;
  key: "home" | "about" | "menu" | "promo" | "outlet";
  sub?: SubItem[];
};

const links: NavLinkDef[] = [
  { to: "/", key: "home" },
  { to: "/tentang", key: "about" },
  {
    to: "/menu",
    key: "menu",
    sub: [
      { label: { id: "Nasi Goreng", en: "Fried Rice" }, to: "/menu#nasi-goreng" },
      { label: { id: "Mie Goreng", en: "Fried Noodle" }, to: "/menu#mie-goreng" },
      { label: { id: "Hotplate", en: "Hotplate" }, to: "/menu#hotplate" },
      { label: { id: "Minuman", en: "Drinks" }, to: "/menu#minuman" },
      { label: { id: "Menu Lain", en: "Others" }, to: "/menu#menu-lain" },
    ],
  },
  { to: "/promo", key: "promo" },
  {
    to: "/outlet",
    key: "outlet",
    sub: [
      { label: { id: "Jawa Timur", en: "East Java" }, to: "/outlet#outlet-jawa-timur" },
      { label: { id: "Jawa Tengah & DIY", en: "Central Java & DIY" }, to: "/outlet#outlet-jateng-diy" },
    ],
  },
];

export const Navbar = () => {
  const { t, lang, setLang } = useLang();
  const { count, setOpen } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenSub(null);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-background/60 backdrop-blur-sm"
      )}
    >
      <div className="container container-px flex items-center justify-between h-16 md:h-20">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 group">
          <img
            src={BRAND_LOGO}
            alt="Nasi Goreng 69 logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
          />
          <div className="leading-tight text-left">
            <p className="font-display text-lg font-bold text-brand">Nasi Goreng 69</p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Sejak 2007</p>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = location.pathname === l.to;
            const hasSub = !!l.sub?.length;
            const isOpen = openSub === l.to;
            return (
              <div
                key={l.to}
                className="relative"
                onMouseEnter={() => hasSub && setOpenSub(l.to)}
                onMouseLeave={() => hasSub && setOpenSub((cur) => (cur === l.to ? null : cur))}
              >
                <Link
                  to={l.to}
                  className={cn(
                    "relative inline-flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors",
                    "after:content-[''] after:absolute after:left-4 after:right-4 after:bottom-1 after:h-0.5 after:bg-brand after:transition-transform after:origin-left",
                    active
                      ? "text-brand after:scale-x-100"
                      : "text-foreground/80 hover:text-brand after:scale-x-0 hover:after:scale-x-100"
                  )}
                >
                  {t.nav[l.key]}
                  {hasSub && (
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        isOpen ? "rotate-180" : "rotate-0"
                      )}
                    />
                  )}
                </Link>

                {hasSub && (
                  <div
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 top-full pt-3 min-w-[220px] z-50",
                      "transition-all duration-200 origin-top",
                      isOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-1 pointer-events-none"
                    )}
                  >
                    <div className="bg-background border border-border rounded-2xl shadow-soft overflow-hidden py-2">
                      {l.sub!.map((s) => (
                        <Link
                          key={s.to}
                          to={s.to}
                          className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-brand/5 hover:text-brand transition-colors"
                        >
                          {s.label[lang]}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center rounded-full border border-border p-0.5 text-[11px] font-bold uppercase">
            <button
              onClick={() => setLang("id")}
              aria-pressed={lang === "id"}
              className={cn(
                "px-3 py-1.5 rounded-full transition-colors",
                lang === "id" ? "bg-brand text-brand-foreground" : "text-foreground/60 hover:text-brand"
              )}
            >
              ID
            </button>
            <button
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={cn(
                "px-3 py-1.5 rounded-full transition-colors",
                lang === "en" ? "bg-brand text-brand-foreground" : "text-foreground/60 hover:text-brand"
              )}
            >
              EN
            </button>
          </div>
          <button
            onClick={() => setLang(lang === "id" ? "en" : "id")}
            className="sm:hidden flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-border text-[11px] font-bold uppercase"
            aria-label="Switch language"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang.toUpperCase()}
          </button>

          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-foreground/70 hover:text-brand hover:border-brand transition-colors"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? (lang === "id" ? "Mode terang" : "Light mode") : (lang === "id" ? "Mode gelap" : "Dark mode")}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
            className="relative hover:bg-brand/10 hover:text-brand"
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand text-brand-foreground text-[10px] font-bold grid place-items-center">
                {count}
              </span>
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-background border-t border-border",
          mobileOpen ? "max-h-[600px]" : "max-h-0"
        )}
      >
        <nav className="container container-px py-4 flex flex-col">
          {links.map((l) => {
            const active = location.pathname === l.to;
            const hasSub = !!l.sub?.length;
            const isOpen = openSub === l.to;
            return (
              <div key={l.to} className="border-b border-border/50 last:border-0">
                <div className="flex items-center justify-between">
                  <Link
                    to={l.to}
                    className={cn(
                      "py-3 text-base font-medium flex-1",
                      active ? "text-brand" : "text-foreground/80 hover:text-brand"
                    )}
                  >
                    {t.nav[l.key]}
                  </Link>
                  {hasSub && (
                    <button
                      onClick={() => setOpenSub(isOpen ? null : l.to)}
                      aria-label="Toggle submenu"
                      className="p-2 text-foreground/60"
                    >
                      <ChevronDown
                        className={cn("w-4 h-4 transition-transform", isOpen ? "rotate-180" : "")}
                      />
                    </button>
                  )}
                </div>
                {hasSub && (
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-200",
                      isOpen ? "max-h-72 pb-2" : "max-h-0"
                    )}
                  >
                    <div className="pl-3 flex flex-col">
                      {l.sub!.map((s) => (
                        <Link
                          key={s.to}
                          to={s.to}
                          className="py-2 text-sm text-foreground/70 hover:text-brand"
                        >
                          {s.label[lang]}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <button
            onClick={() => setLang(lang === "id" ? "en" : "id")}
            className="mt-3 self-start flex items-center gap-2 px-4 py-2 rounded-full border border-border text-xs font-semibold uppercase"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === "id" ? "English" : "Bahasa Indonesia"}
          </button>
        </nav>
      </div>
    </header>
  );
};
