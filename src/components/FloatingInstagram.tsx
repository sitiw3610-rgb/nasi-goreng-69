import { Instagram } from "lucide-react";

// TODO: Ganti URL ini dengan link Instagram resmi Nasi Goreng 69 saat sudah tersedia.
export const INSTAGRAM_URL = "https://www.instagram.com/nasgor_69official/";

export const FloatingInstagram = () => {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-40 group"
      aria-label="Instagram Nasi Goreng 69"
    >
      <span className="relative flex items-center justify-center w-12 h-12 rounded-full text-white shadow-glow transition-all hover:scale-105"
        style={{
          background:
            "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
        }}
      >
        <Instagram className="w-5 h-5" />
      </span>
    </a>
  );
};
