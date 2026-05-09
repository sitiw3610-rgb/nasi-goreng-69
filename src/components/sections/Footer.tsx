import { useLang } from "@/i18n/LanguageContext";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { BRAND_LOGO } from "@/lib/brand";
import { WA_NUMBER } from "@/lib/whatsapp";

const WA_HREF = `https://wa.me/${WA_NUMBER}`;
const WEB_HREF = "https://www.nasigoreng69.com";

const navRoutes = {
  home: "/",
  about: "/tentang",
  menu: "/menu",
  promo: "/promo",
  outlet: "/outlet",
} as const;

export const Footer = () => {
  const { t } = useLang();

  return (
    <footer
      className="pt-16 pb-8"
      style={{ backgroundColor: "#ffd398", color: "#5a2d07" }}
    >
      <div className="container container-px">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <img
                src={BRAND_LOGO}
                alt="Nasi Goreng 69 logo"
                width={44}
                height={44}
                className="w-11 h-11 object-contain"
              />
              <div>
                <p className="font-display text-lg font-bold">Nasi Goreng 69</p>
                <p className="text-[10px] uppercase tracking-widest opacity-70">Sejak 2007</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed opacity-85 max-w-xs">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="font-display text-base font-bold uppercase tracking-wider">Kontak</h4>
            <ul className="mt-4 space-y-2 text-sm opacity-85">
              <li>Phone / Fax : 031.99031397 / 031.99031579</li>
              <li>
                Web:{" "}
                <a href={WEB_HREF} target="_blank" rel="noopener noreferrer" className="hover:underline font-medium">
                  www.nasigoreng69.com
                </a>
              </li>
              <li>Ruko Monroe</li>
              <li>No.63-65 Jl Raya Kahuripan</li>
              <li>Nirwana Sidoarjo – Jawa Timur</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-bold uppercase tracking-wider">{t.footer.contact}</h4>
            <ul className="mt-4 space-y-2 text-sm opacity-85">
              <li>
                WhatsApp:{" "}
                <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="hover:underline font-medium">
                  +62 817-7511-8555
                </a>{" "}
                (Chat Only)
              </li>
              <li>
                <a href={WEB_HREF} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  nasigoreng69.com
                </a>
              </li>
              <li>Tersebar di Jawa Timur, Jawa Tengah & DIY</li>
            </ul>
            <h4 className="mt-6 font-display text-base font-bold uppercase tracking-wider">{t.footer.hours}</h4>
            <p className="mt-3 text-sm opacity-85">{t.footer.hoursVal}</p>
          </div>

          <div>
            <h4 className="font-display text-base font-bold uppercase tracking-wider">{t.footer.follow}</h4>
            <div className="mt-4 flex gap-3">
              <a
                href="https://youtube.com/@nasgor69official32?si=O7cuoNCC9noVMcpK"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full grid place-items-center transition-transform hover:scale-110 cursor-pointer"
                style={{ backgroundColor: "#5a2d07", color: "#ffd398" }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.81zM9.55 15.5V8.5l6.27 3.5-6.27 3.5z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@nasigoreng69.id?_r=1&_t=ZS-96Bsa47CmBR"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full grid place-items-center transition-transform hover:scale-110 cursor-pointer"
                style={{ backgroundColor: "#5a2d07", color: "#ffd398" }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.87 2.87 0 0 1 .82.13V9.4a6.37 6.37 0 0 0-.82-.05A6.33 6.33 0 0 0 2.1 15.67a6.33 6.33 0 0 0 6.33 6.33 6.33 6.33 0 0 0 6.32-6.32V8.73a8.1 8.1 0 0 0 4.84 1.6V6.9a4.84 4.84 0 0 1-2.2-.2z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1E2sSBxy9B/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full grid place-items-center transition-transform hover:scale-110 cursor-pointer"
                style={{ backgroundColor: "#5a2d07", color: "#ffd398" }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="mailto:nasgor_69@yahoo.co.id"
                aria-label="Email"
                className="w-10 h-10 rounded-full grid place-items-center transition-transform hover:scale-110 cursor-pointer"
                style={{ backgroundColor: "#5a2d07", color: "#ffd398" }}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <Link
              to="/faq"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold hover:underline underline-offset-4"
            >
              FAQ
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between gap-3 text-xs opacity-80" style={{ borderColor: "rgba(90,45,7,0.25)" }}>
          <p>{t.footer.rights}</p>
          <div className="flex gap-5">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
