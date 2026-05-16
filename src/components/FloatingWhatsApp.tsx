import { MessageCircle } from "lucide-react";
import { WA_NUMBER } from "@/lib/whatsapp";
import { useLang } from "@/i18n/LanguageContext";

export const FloatingWhatsApp = () => {
  const { t } = useLang();

  const text = encodeURIComponent(
    "Halo Nasi Goreng 69, saya ingin bertanya tentang menu."
  );

  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Chat WhatsApp"
    >
      {/* ping effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />

      {/* button */}
      <span className="relative flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb957] text-white pl-4 pr-5 py-3.5 rounded-full shadow-glow animate-float transition-all">
        <MessageCircle className="w-5 h-5 fill-white" />

        <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">
          {t.floating.chat}
        </span>
      </span>
    </a>
  );
};
