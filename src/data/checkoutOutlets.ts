export type CheckoutOutlet = {
  name: string;
  region: "jatim" | "jateng-diy";
  address: string;
  gofood?: string;
};

export const checkoutOutlets: CheckoutOutlet[] = [
  // Jawa Timur
  { name: "Nasi Goreng 69 Tunjungan Plaza", region: "jatim", address: "Tunjungan Plaza, Surabaya", gofood: "https://gofood.link/a/yM9WbwC" },
  { name: "Nasi Goreng 69 WTC Surabaya", region: "jatim", address: "WTC Mall, Surabaya", gofood: "https://gofood.link/u/ypQ9D" },
  { name: "Nasi Goreng 69 Grand City Surabaya", region: "jatim", address: "Grand City Mall, Surabaya", gofood: "https://gofood.link/a/z3fc7ME" },
  { name: "Nasi Goreng 69 Supermall Surabaya", region: "jatim", address: "Pakuwon Trade Center / Supermall, Surabaya", gofood: "https://gofood.link/a/z3f6kbm" },
  { name: "Nasi Goreng 69 Food Junction Tandes", region: "jatim", address: "Food Junction Grand Pakuwon, Tandes, Surabaya", gofood: "https://gofood.link/u/VA3xN" },
  { name: "Nasi Goreng 69 Delta Plaza Surabaya", region: "jatim", address: "Plaza Surabaya (Delta Plaza), Surabaya", gofood: "https://gofood.link/u/7LyL1" },
  { name: "Nasi Goreng 69 Trans Icon Surabaya", region: "jatim", address: "Trans Icon Mall, Surabaya", gofood: "https://gofood.link/a/EZwXV1q" },
  { name: "Nasi Goreng 69 Cito Mall Surabaya", region: "jatim", address: "City of Tomorrow (CITO), Surabaya", gofood: "https://gofood.link/u/B8qR" },
  { name: "Nasi Goreng 69 Royal Plaza Surabaya", region: "jatim", address: "Royal Plaza, Surabaya", gofood: "https://gofood.link/u/Nby8" },
  { name: "Nasi Goreng 69 BG Junction Express", region: "jatim", address: "BG Junction, Surabaya", gofood: "https://gofood.link/u/VrzaN" },
  { name: "Nasi Goreng 69 MATOS Malang", region: "jatim", address: "Malang Town Square (MATOS), Malang", gofood: "https://gofood.link/u/gx29b" },
  { name: "Nasi Goreng 69 Kauman Klojen Malang", region: "jatim", address: "Kauman, Klojen, Malang", gofood: "https://gofood.link/u/nyApk" },
  { name: "Nasi Goreng 69 Lippo Plaza Sidoarjo", region: "jatim", address: "Lippo Plaza, Sidoarjo", gofood: "https://gofood.link/u/a3xON" },
  { name: "Nasi Goreng 69 Kedai Iwake Transmart Sidoarjo", region: "jatim", address: "Transmart, Sidoarjo", gofood: "https://gofood.link/u/yPv7m" },
  { name: "Nasi Goreng 69 Diponegoro Sidoarjo", region: "jatim", address: "Jl. Diponegoro, Sidoarjo", gofood: "https://gofood.link/a/z3eC2rw" },
  { name: "Nasi Goreng 69 Icon Mall Gresik", region: "jatim", address: "Icon Mall, Gresik", gofood: "https://gofood.link/a/yM9RH6o" },
  { name: "Nasi Goreng 69 Gress Mall Gresik", region: "jatim", address: "Gress Mall, Gresik", gofood: "https://gofood.link/a/z3faoy1" },
  { name: "Nasi Goreng 69 Plaza Madiun", region: "jatim", address: "Plaza Madiun, Madiun", gofood: "https://gofood.link/a/yM9jLHf" },
  { name: "Nasi Goreng 69 Sunrise Mojokerto", region: "jatim", address: "Sunrise Mall, Mojokerto", gofood: "https://gofood.link/u/Mwm5j" },
  // Jawa Tengah & DIY
  { name: "Nasi Goreng 69 Hartono Mall Solo", region: "jateng-diy", address: "Hartono Mall, Solo", gofood: "https://gofood.link/u/BkLRR" },
  { name: "Nasi Goreng 69 Solo Square", region: "jateng-diy", address: "Solo Square, Solo", gofood: "https://gofood.link/u/POyZY" },
  { name: "Nasi Goreng 69 Solo Grand Mall 3", region: "jateng-diy", address: "Solo Grand Mall, Solo" },
  { name: "Nasi Goreng 69 Hartono Mall Yogyakarta", region: "jateng-diy", address: "Hartono Mall, Yogyakarta", gofood: "https://gofood.link/a/z3esF8N" },
  { name: "Nasi Goreng 69 Sleman City Hall", region: "jateng-diy", address: "Sleman City Hall, Yogyakarta", gofood: "https://gofood.link/u/PWwL5" },
  { name: "Nasi Goreng 69 Grand Artos Magelang", region: "jateng-diy", address: "Armada Town Square (Grand Artos), Magelang" },
];
