import { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { Clock, Star } from "lucide-react";
import { useOutletStatus, statusLabel, statusColorClass } from "@/lib/outletStatus";

// =====================================================================
// Outlet data — each outlet has its OWN independent fields, including a
// unique `id` and its own `rating`. There is NO shared/global default;
// every default is set per item at initialization.
// =====================================================================

type Outlet = {
  id: number;          // unique id (used as React key + update target)
  name: string;
  city: string;
  map: string;
  region: "jatim" | "jateng-diy";
  image: string;
  rating: number;      // independent numeric rating per outlet
};

// Initial outlets — each item literally declares its own rating value.
// Do not refactor to share a single default variable across items.
const initialOutlets: Outlet[] = [
  // ===== Jawa Timur =====
  { id: 1,  name: "Nasi Goreng 69 WTC Surabaya", city: "Surabaya", rating: 4, map: "https://share.google/y7uUoDAXSgoaPOla6", region: "jatim", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGY-l_Brb0_GEO8Ij0FGlbTcJSuOzHhbyNO6GFJFHYvR_oNpxKAOohByd7I_n7RkU1crtGCqFN93vS1BzdJ6F1TD1SAUNeULJy5oR21DvAw0AMSGFfhC4HOuZ7rnjKZnut3KplNRlHa7DBr=s1360-w1360-h1020-rw" },
  { id: 2,  name: "Nasi Goreng 69 Tunjungan Plaza", city: "Surabaya", rating: 4, map: "https://share.google/TcBajyiHR35gHBI6h", region: "jatim", image: "https://lh3.googleusercontent.com/p/AF1QipOsKGXFC5Y9DsTJePZqeXlIS9Kmsd3YgyE7DZi2=s1360-w1360-h1020-rw" },
  { id: 3,  name: "Nasi Goreng 69 Supermall Surabaya", city: "Surabaya", rating: 3, map: "https://share.google/pwhLJwbSZMBrJK0va", region: "jatim", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFfKJWWqlIxB42lt0yVEv-UuJD4tpUM7S8HVV0LEJg-r2dJvsnz-02HOG8EmVeNBdk_XLcN18GRP5dec2ijFXg8o2oZguZ7HQE2XImW3NJin2SZ_hTfPjGDJEtRCFJrRVMozjk=s1360-w1360-h1020-rw" },
  { id: 4,  name: "Nasi Goreng 69 Delta Plaza Surabaya", city: "Surabaya", rating: 3, map: "https://share.google/Hn1Kmm33I1WdHf4Di", region: "jatim", image: "https://lh3.googleusercontent.com/p/AF1QipNihGOKhAWq70qSWE2sSCOHcq5TLkiLO-mhDZ5d=s1360-w1360-h1020-rw" },
  { id: 5,  name: "Nasi Goreng 69 Cito Mall Surabaya", city: "Surabaya", rating: 3, map: "https://share.google/IspdArvSJtFQq3ajd", region: "jatim", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH3VY21QEH1OJgstuzsyDq284eHbR0I5Q_kFfseXDvfJIQrz6aHEHKhKS3rLVm7b4e-O-XlHDUzfBLSLS406vq-jxu0WJw86w1A8Hr4w3_2_k0W5s7r5FmlHEO9TWfEW8ORGjBb=s1360-w1360-h1020-rw" },
  { id: 6,  name: "Nasi Goreng 69 Grand City Surabaya", city: "Surabaya", rating: 3, map: "https://share.google/rT0qBqu95tclMG3qo", region: "jatim", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHVYyx12hFfgVnpn8OJwkiQwl9N7laQXIWVMLC9cGGihsblDhGXaolN1GWoSr6TzsuzR42JTJZp4s7kqQIRdSSAjadkD0gzq296_5rVPNw9EM2e4LbqPEtoM_4O5duxUsi7DQ8WlQ=s1360-w1360-h1020-rw" },
  { id: 7,  name: "Nasi Goreng 69 Royal Plaza Surabaya", city: "Surabaya", rating: 2, map: "https://share.google/8QVUJpS4eAVqXtpkW", region: "jatim", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHM6zdcft6YiSy16eww8Yxf6o3U0gCSS1wWlT8TqR7t6xpqPOZKlxzHy3cufEW_mw-Fa16lqDyafQJugatQQJkDdkjbsikmc0-j_1MXy6lkmUEJiL9AK3KbQKOwg2_NCm5L7qNmMlxwCYo5=s1360-w1360-h1020-rw" },
  { id: 8,  name: "Nasi Goreng 69 BG Junction Express", city: "Surabaya", rating: 3, map: "https://share.google/xAyX2SL7utn6nJIzc", region: "jatim", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHSE4S6ibrWMQu0FtTKyGg_Ho12DjAbmRpzpEArLku0l-BYYJHeT-JRBVCBP-aQqbgmbdN19zGh_78Yay0hrf9m9MhYFnq9YtwzNgparJ26OEYM6PyJu5lSlww7g3ForAlPYOJViQ=s1360-w1360-h1020-rw" },
  { id: 9,  name: "Nasi Goreng 69 Trans Icon Surabaya", city: "Surabaya", rating: 3, map: "https://share.google/hhzFJSSYcMsTeqynz", region: "jatim", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEPpkXj5s3h-EOM5V10PgCI2xcko3VB6ghtsYgBQj9Zj_KKvKjaJm7ZnaRRQuw0BWWOfSPZOt7a6xAAPTDwI2CqJcl8HjZ0yj3WwNCvmXCVzxkvhtMJFpy6JG0f8cvdFUEZz3Zn=s1360-w1360-h1020-rw" },
  { id: 10, name: "Nasi Goreng 69 Food Junction Tandes", city: "Surabaya", rating: 2, map: "https://share.google/ad5dYXDK0Qe6oMuZI", region: "jatim", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGQ7VVKHpcPw3aCpaYe7R8jzLGKrTi7smbFi8iFx-Enfim-IKue6chjg3i3vqyMtDi3JInuH2NNdM4PpoLiVax1atzP25lAoNCimtPCOZEINEhGkbvbS8WOBZKd6x4HoZigHB_q=s1360-w1360-h1020-rw" },
  { id: 11, name: "Nasi Goreng 69 Icon Mall Gresik", city: "Gresik", rating: 4, map: "https://share.google/8QYpQQ9VSWxXIKcGB", region: "jatim", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF23lsXKjxkDG4KIDVqjbzgCYKHaWju4lxrJ3QpJdEY-rwutkgquTLgtCdLMNI8Hxrcyb_G6t7kjM0zPe3c5Ugm0pqhYVAlK9vp2R6s6rRfP7E5E47y7x2YuDiKoK-VC22_H-Z_=s1360-w1360-h1020-rw" },
  { id: 12, name: "Nasi Goreng 69 Gress Mall Gresik", city: "Gresik", rating: 3, map: "https://share.google/pJ37RearURYwezRwj", region: "jatim", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE5XbsPagg5d0Rrbb5urjpzGbFw5ieArInIYo2Pg6gSvnsM5oqw56Zfm0yZ-DZ-M9RFlLMfpwUUXhPKC5ZF5cFx-PlQbKK1U8Mc7W2kSQeizwOIt4yhcUzg5y6cWnHOaQJhLgnY=s1360-w1360-h1020-rw" },
  { id: 13, name: "Nasi Goreng 69 Lippo Plaza Sidoarjo", city: "Sidoarjo", rating: 3, map: "https://share.google/pPqtBZOBvYo1Te68S", region: "jatim", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEl3FWa-QQUE7YJSH2uBrboWFKxdDazeJAtSa6oaaBj2uUUviTeN32L4gFbbG7_JOon-jQ69b9neIMg8oyDS4IZPQT3BbdisX4SBr1TJr9Ckar_q5mJmJL020zV9W0mO-bGTTkwRQ=s1360-w1360-h1020-rw" },
  
  
  { id: 17, name: "Nasi Goreng 69 Kedai Iwake Transmart Sidoarjo", city: "Sidoarjo", rating: 4, map: "https://share.google/VIbc0OmlWINB6TUjW", region: "jatim", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE3--1Lhmw53yrJBvGXYwEPN-o_tBTZ4NXiNvGqI1xlAg_nFRNSMFHpreGhOhkEpU2nuCVTSoPCxOigiSk-il6poB8axUvsOb8LIqHKJH5OASRxjiP3sVeVxFnOyC6snWp8fxMAEw=s1360-w1360-h1020-rw" },
  { id: 18, name: "Nasi Goreng 69 Diponegoro Sidoarjo", city: "Sidoarjo", rating: 3, map: "https://share.google/hSHXGRvcC23pCsFOF", region: "jatim", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEOnotp_XOWPH8--XXx0kD-bH4Y4gF-HEoOwGuuXpxl7BNY0Vkpv6Pd5Xkdz8VkHuk1JWov6PewYO5lU67YIllSsgblAyM1pRSTXIhZcNdbu4j5VqMjWY7T4mGpNwXXDbLeatzJoci1p-h5=s1360-w1360-h1020-rw" },
  { id: 19, name: "Nasi Goreng 69 Sunrise Mojokerto", city: "Mojokerto", rating: 4, map: "https://share.google/hoMcPLot0o21mHEtA", region: "jatim", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGP27_ZYgH5JZJMlvWgW-pZz6kE6HMW7oxDpoWTFUlWQr5MZKAGqumRJkNbE_DS7WH91sUlMSl2df_kt6arWOEn6_h8kCpqRoLiLEW1OSR_G3MH53TYzOT0DKxM-8HmmyNqpd_48Fvw3mGP=s1360-w1360-h1020-rw" },
  { id: 20, name: "Nasi Goreng 69 Plaza Madiun", city: "Madiun", rating: 4, map: "https://share.google/4sqmxe6g0cmkwewze", region: "jatim", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEB7d1ebX4q_zI-tTREs45XFngKxCkZX8YyexjmZTefn_y09RqDCgQOw7eZhOZOL6Phw0sz9uJIXMqwoBmUjhEb8isvDs3xAC6ulscTBmejZDlgRaN6sBtvCtlmy67F3GDJ1ADW=s1360-w1360-h1020-rw" },
  { id: 21, name: "Nasi Goreng 69 MATOS Malang", city: "Malang", rating: 3, map: "https://share.google/apZV23qFmBbcPAopt", region: "jatim", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEdcqT6MZ0RFuAcREbjfTv02dx3cUNoRATFiu8GFPqRxSwK1zCUKAsV1QOD0agpf0ie9czozfoJBSea8ZBmQ1t3GB2QQCvEfQL_7w8Do2wszW61IIYQqzI1pwFO_rTn-V0Gt0uu2g=s1360-w1360-h1020-rw" },
  { id: 22, name: "Nasi Goreng 69 Kauman Klojen Malang", city: "Malang", rating: 3, map: "https://maps.app.goo.gl/SoW4eqak17eMeMAH6", region: "jatim", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFWmQQzEnXH7gicsdjBAA6U7qyigk0ztT8D3Q2NwAeD6bqMleP9E8Sm2xqkCsKQM6ZQb1Y1NdvMytMRK58b0zXwtPfUMgxmaKcgOI2rlQ5brj3HouTt87587Z6oS28mDbw9LLYbEI6xOVI=w426-h240-k-no" },

  // ===== Jawa Tengah & DIY =====
  { id: 23, name: "Nasi Goreng 69 Grand Artos Magelang", city: "Magelang", rating: 3, map: "https://share.google/FAScUGMWmjg1kulvq", region: "jateng-diy", image: "https://lh3.googleusercontent.com/LWkN53MG23Bb5ww7AVSEXMvbDRYPJj6v8jeMwDyzA6fQoX7tOGufEU1dpKyL8UKu=s1360-w1360-h1020-rw" },
  { id: 24, name: "Nasi Goreng 69 Hartono Mall Solo", city: "Solo", rating: 3, map: "https://share.google/WAVxE3cvvFPhRw0wX", region: "jateng-diy", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGx-AHXrHTlurGCN1C2GTwZxQC0cqYAtDXHFEYn__cjR3YOPHyUkRrCNx_n4-H4_ptm1efGbH9X69tvLHE32lox3tzTQ49rh64XJ0APZZ7-TuN7JmSf2MDLKmPMjn4iX3fJlbFw=s1360-w1360-h1020-rw" },
  { id: 25, name: "Nasi Goreng 69 Solo Square", city: "Solo", rating: 3, map: "https://share.google/Tg2HLhARUwWCriATc", region: "jateng-diy", image: "https://lh3.googleusercontent.com/proxy/AiFBJ2F-8BXG_x9b1ZSyG-tIMSP7-_wyoYK5FzOvrQtkt5XhUKKjPrzsUjPmqglDFltVkQB5V4UGycyqrT7tw0sVqA1AqJIts2rnjFpIj3PI5AwYeLaPsGOvQXBrNLgE8PPz0zX1tbdBmLyOrk55JLA4fiui6z3xY0U1xA=s1360-w1360-h1020-rw" },
  { id: 26, name: "Nasi Goreng 69 Solo Grand Mall 3", city: "Solo", rating: 4, map: "https://share.google/lU8946NGu35WAL7p1", region: "jateng-diy", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHODX1pGeghh-k1Au6_FsD_ogW2Y-52QqWDLumvD4xNHClsizTs__v5SLkJZCEpKiKl_mPdjxEoqAzMjZKk0FY5p3T8Q_PwjT7uAiQ7vGhUMUHqC05A95xhQyrNyH37T1_F7LjmpjX4UJM=s1360-w1360-h1020-rw" },
  { id: 27, name: "Nasi Goreng 69 Hartono Mall Yogyakarta", city: "Yogyakarta", rating: 3, map: "https://share.google/123RIQXL75TtrT51p", region: "jateng-diy", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHUctZBLzZ8k7q3A3tSAlvobfijnHS8rgYQ-AJeIBiZU3iVRqjU1AHBf8hXWr9ao7w8ao739xHUuJv14thL4x1Ae7GjKAxNtI0sRr3eDvdmNNw5L4R3gcU3-C7bsE947jTRS7vn=s1360-w1360-h1020-rw" },
  { id: 28, name: "Nasi Goreng 69 Sleman City Hall", city: "Yogyakarta", rating: 3, map: "https://share.google/r05FxD6ftwo7pJk7W", region: "jateng-diy", image: "https://nasigoreng69.com/wp-content/uploads/2022/07/SLEMAN-CITY-HALL-JOGJA-2-1030x578.jpg" },
];

// Display-only formatting: 4.5 -> "4+", 3.2 -> "4+". Does NOT mutate the
// underlying numeric rating value.
const formatRatingLabel = (rating: number): string => {
  return `${Math.max(1, Math.floor(rating))}+`;
};

// City order based on highest-rated outlet within that city (descending)
const sortByCityThenRating = (list: Outlet[]): Outlet[] => {
  const cityMaxRating = new Map<string, number>();
  list.forEach((o) => {
    const cur = cityMaxRating.get(o.city) ?? 0;
    if (o.rating > cur) cityMaxRating.set(o.city, o.rating);
  });
  return [...list].sort((a, b) => {
    const cityDiff = (cityMaxRating.get(b.city) ?? 0) - (cityMaxRating.get(a.city) ?? 0);
    if (cityDiff !== 0) return cityDiff;
    if (a.city !== b.city) return a.city.localeCompare(b.city);
    return b.rating - a.rating;
  });
};

type OutletCardProps = {
  o: Outlet;
  statusText: string;
  statusClass: string;
  dirLabel: string;
  onRatingChange: (id: number, newRating: number) => void;
};

const OutletCard = ({ o, statusText, statusClass, dirLabel, onRatingChange }: OutletCardProps) => {
  const [editing, setEditing] = useState(false);

  // Bind directly to this outlet's own rating via its unique id.
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const next = Number(e.target.value);
    if (!Number.isNaN(next)) onRatingChange(o.id, next);
  };

  return (
    <div className="group relative bg-background border border-border rounded-2xl overflow-hidden hover:border-brand transition-all hover:shadow-soft">
      <div className="aspect-[16/9] bg-gradient-warm relative overflow-hidden">
        <img
          src={o.image}
          alt={o.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
        <span className={`absolute top-3 right-3 bg-background/90 backdrop-blur ${statusClass} text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full`}>
          ● {statusText}
        </span>
        <span className="absolute top-3 left-3 bg-brand text-brand-foreground text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
          {o.city}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-base font-bold text-brand leading-snug flex-1">{o.name}</h3>
          <div className="shrink-0">
            <button
              type="button"
              data-editable="rating"
              data-outlet-id={o.id}
              aria-label={`Rating ${o.name}`}
              onClick={() => setEditing((v) => !v)}
              className="inline-flex items-center gap-1 bg-brand-soft text-brand-soft-foreground text-xs font-bold px-2 py-0.5 rounded-full hover:opacity-80 transition-opacity"
              title={`Rating: ${o.rating}`}
            >
              <Star className="w-3 h-3 fill-current" />
              <span>{formatRatingLabel(o.rating)}</span>
            </button>
          </div>
        </div>

        {editing && (
          <div className="mt-2 flex items-center gap-2 text-xs">
            <label htmlFor={`rating-${o.id}`} className="text-muted-foreground">
              Rating:
            </label>
            <select
              id={`rating-${o.id}`}
              value={o.rating}
              onChange={handleChange}
              className="border border-border rounded-md bg-background px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-brand"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              {/* If current rating is a decimal (e.g. 4.5), keep it selectable */}
              {!Number.isInteger(o.rating) && (
                <option value={o.rating}>{o.rating}</option>
              )}
            </select>
          </div>
        )}

        <div className="mt-3 space-y-1.5 text-xs text-muted-foreground">
          <p className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-brand/60" />10.00 - 22.00 WIB</p>
        </div>
        <a href={o.map} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline">
          {dirLabel} →
        </a>
      </div>
    </div>
  );
};

export const OutletSection = () => {
  const { t, lang } = useLang();
  const location = useLocation();
  const status = useOutletStatus();
  const statusText = statusLabel(status, lang);
  const statusClass = statusColorClass(status);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "outlet-jawa-timur" || hash === "outlet-jateng-diy") {
      requestAnimationFrame(() => {
        const el = document.getElementById(hash) || document.getElementById("outlet");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash, location.key]);

  // Single source of truth for outlets, but each item in the array is its
  // OWN object. Updates produce new items via map+spread (immutable).
  const [outlets, setOutlets] = useState<Outlet[]>(initialOutlets);

  // id-based, immutable update — only the matching outlet is replaced;
  // every other outlet keeps its same object reference.
  const updateRating = useCallback((id: number, newRating: number) => {
    setOutlets((prev) =>
      prev.map((item) => (item.id === id ? { ...item, rating: newRating } : item))
    );
  }, []);

  const jatim = sortByCityThenRating(outlets.filter((o) => o.region === "jatim"));
  const jateng = sortByCityThenRating(outlets.filter((o) => o.region === "jateng-diy"));

  return (
    <section id="outlet" className="py-24 md:py-32 bg-background">
      <div className="container container-px">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">{t.outlet.label}</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-brand text-balance">{t.outlet.title}</h2>
          <p className="mt-4 text-sm text-muted-foreground italic">
            Surabaya · Malang · Sidoarjo · Gresik · Madiun · Mojokerto · Solo · Yogyakarta · Magelang
          </p>
        </div>

        <div id="outlet-jawa-timur" className="mt-14 scroll-mt-24">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-brand mb-6">Jawa Timur</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {jatim.map((o) => (
              <OutletCard
                key={o.id}
                o={o}
                statusText={statusText}
                statusClass={statusClass}
                dirLabel={t.outlet.direction}
                onRatingChange={updateRating}
              />
            ))}
          </div>
        </div>

        <div id="outlet-jateng-diy" className="mt-16 scroll-mt-24">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-brand mb-6">Jawa Tengah & DIY</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {jateng.map((o) => (
              <OutletCard
                key={o.id}
                o={o}
                statusText={statusText}
                statusClass={statusClass}
                dirLabel={t.outlet.direction}
                onRatingChange={updateRating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
