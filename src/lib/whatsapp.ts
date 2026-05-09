import { CartLine } from "@/context/CartContext";
import { formatRp } from "@/data/menuData";
import { Lang } from "@/i18n/translations";

// Nomor resmi Nasi Goreng 69 (WhatsApp Chat Only)
export const WA_NUMBER = "6281775118555";

export const buildOrderMessage = (lines: CartLine[], total: number, lang: Lang) => {
  const header =
    lang === "id"
      ? "*Pesanan Baru — Nasi Goreng 69*\n\nHalo, saya ingin memesan:\n"
      : "*New Order — Nasi Goreng 69*\n\nHi, I'd like to order:\n";
  const body = lines
    .map((l, i) => `${i + 1}. ${l.item.name[lang]} × ${l.qty} — ${formatRp(l.item.price * l.qty)}`)
    .join("\n");
  const footer =
    lang === "id"
      ? `\n\n*Total: ${formatRp(total)}*\n\nTerima kasih!`
      : `\n\n*Total: ${formatRp(total)}*\n\nThank you!`;
  return encodeURIComponent(header + body + footer);
};

export const openWhatsApp = (text: string) => {
  window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
};
