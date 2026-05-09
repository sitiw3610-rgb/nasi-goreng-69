import egg from "@/assets/accent-egg.png";
import chili from "@/assets/accent-chili.png";
import tomato from "@/assets/accent-tomato.png";
import shrimp from "@/assets/accent-shrimp.png";
import scallion from "@/assets/accent-scallion.png";
import rice from "@/assets/accent-rice.png";
import chicken from "@/assets/accent-chicken.png";
import krupuk from "@/assets/accent-krupuk.png";
import kecap from "@/assets/accent-kecap.png";

type Accent = {
  src: string;
  className: string;
  style?: React.CSSProperties;
};

// Spread accents across the entire page height (top → very bottom),
// inspired by Solaria's playful floating ingredients background.
const accents: Accent[] = [
  // Top band
  { src: chili, className: "top-[4%] left-[-2%] w-20 md:w-28 rotate-[-18deg] opacity-70", style: { animation: "float-up 6s ease-in-out infinite" } },
  { src: egg, className: "top-[8%] right-[-2%] w-20 md:w-28 rotate-[12deg] opacity-80", style: { animation: "float-up 7s ease-in-out infinite", animationDelay: "0.6s" } },
  { src: scallion, className: "top-[14%] left-[8%] w-16 md:w-24 rotate-[25deg] opacity-50", style: { animation: "float-up 8s ease-in-out infinite", animationDelay: "1.4s" } },

  // Upper-middle
  { src: tomato, className: "top-[22%] right-[6%] w-16 md:w-24 rotate-[-10deg] opacity-60", style: { animation: "float-up 9s ease-in-out infinite", animationDelay: "0.9s" } },
  { src: shrimp, className: "top-[28%] left-[-2%] w-20 md:w-28 rotate-[20deg] opacity-65", style: { animation: "float-up 7.5s ease-in-out infinite", animationDelay: "1.8s" } },
  { src: krupuk, className: "top-[33%] right-[12%] w-14 md:w-20 rotate-[15deg] opacity-50", style: { animation: "float-up 10s ease-in-out infinite", animationDelay: "0.3s" } },

  // Middle
  { src: chicken, className: "top-[40%] left-[5%] w-16 md:w-24 rotate-[-12deg] opacity-55", style: { animation: "float-up 8.5s ease-in-out infinite", animationDelay: "1.1s" } },
  { src: rice, className: "top-[46%] right-[-2%] w-20 md:w-28 rotate-[8deg] opacity-55", style: { animation: "float-up 7s ease-in-out infinite", animationDelay: "2s" } },
  { src: kecap, className: "top-[52%] left-[12%] w-14 md:w-20 rotate-[-20deg] opacity-50", style: { animation: "float-up 9.5s ease-in-out infinite", animationDelay: "0.5s" } },

  // Lower-middle
  { src: chili, className: "top-[58%] right-[8%] w-16 md:w-22 rotate-[35deg] opacity-50", style: { animation: "float-up 10s ease-in-out infinite", animationDelay: "1.5s" } },
  { src: scallion, className: "top-[64%] left-[-3%] w-20 md:w-28 rotate-[-25deg] opacity-55", style: { animation: "float-up 9s ease-in-out infinite", animationDelay: "0.3s" } },
  { src: tomato, className: "top-[70%] right-[3%] w-16 md:w-24 rotate-[15deg] opacity-55", style: { animation: "float-up 8s ease-in-out infinite", animationDelay: "2.2s" } },

  // Lower
  { src: shrimp, className: "top-[76%] left-[10%] w-16 md:w-22 rotate-[-30deg] opacity-55", style: { animation: "float-up 7.5s ease-in-out infinite", animationDelay: "1.2s" } },
  { src: egg, className: "top-[82%] right-[-2%] w-18 md:w-24 rotate-[18deg] opacity-65", style: { animation: "float-up 8.5s ease-in-out infinite", animationDelay: "0.7s" } },
  { src: krupuk, className: "top-[86%] left-[3%] w-16 md:w-22 rotate-[-15deg] opacity-50", style: { animation: "float-up 9s ease-in-out infinite", animationDelay: "1.9s" } },

  // Bottom band
  { src: chicken, className: "top-[92%] right-[10%] w-16 md:w-22 rotate-[22deg] opacity-55", style: { animation: "float-up 7s ease-in-out infinite", animationDelay: "0.4s" } },
  { src: rice, className: "top-[96%] left-[-2%] w-20 md:w-28 rotate-[-10deg] opacity-55", style: { animation: "float-up 10s ease-in-out infinite", animationDelay: "1.6s" } },
  { src: kecap, className: "top-[97%] right-[5%] w-14 md:w-20 rotate-[10deg] opacity-50", style: { animation: "float-up 8s ease-in-out infinite", animationDelay: "2.4s" } },
];

export const FloatingAccents = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {accents.map((a, i) => (
        <img
          key={i}
          src={a.src}
          alt=""
          loading="lazy"
          className={`absolute select-none drop-shadow-[0_8px_20px_rgba(92,45,13,0.15)] ${a.className}`}
          style={a.style}
        />
      ))}
    </div>
  );
};
