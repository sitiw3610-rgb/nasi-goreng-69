import { useEffect, useState } from "react";

export type OutletStatus = "buka" | "segera-tutup" | "tutup";

// Get current hour in WIB (UTC+7) regardless of user's local timezone
const getWibHour = (date: Date = new Date()) => {
  const utcMs = date.getTime() + date.getTimezoneOffset() * 60000;
  const wib = new Date(utcMs + 7 * 60 * 60000);
  return wib.getHours();
};

export const computeOutletStatus = (date: Date = new Date()): OutletStatus => {
  const h = getWibHour(date);
  // Buka 10.00 - 21.59, segera tutup 21.00 - 21.59, tutup 22.00 - 09.59
  if (h < 10) return "tutup";
  if (h >= 22) return "tutup";
  if (h >= 21) return "segera-tutup";
  return "buka";
};

export const useOutletStatus = (): OutletStatus => {
  const [status, setStatus] = useState<OutletStatus>(() => computeOutletStatus());
  useEffect(() => {
    const tick = () => setStatus(computeOutletStatus());
    tick();
    const id = setInterval(tick, 60_000); // re-check every minute
    return () => clearInterval(id);
  }, []);
  return status;
};

export const statusLabel = (s: OutletStatus, lang: "id" | "en") => {
  if (lang === "en") {
    return s === "buka" ? "Open" : s === "segera-tutup" ? "Closing Soon" : "Closed";
  }
  return s === "buka" ? "Buka" : s === "segera-tutup" ? "Segera Tutup" : "Tutup";
};

export const statusColorClass = (s: OutletStatus) => {
  if (s === "buka") return "text-emerald-600";
  if (s === "segera-tutup") return "text-amber-600";
  return "text-red-600";
};
