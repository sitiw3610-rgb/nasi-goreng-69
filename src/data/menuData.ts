// IMPORTANT: Each menu item gets its OWN unique image import alias.
// This ensures that when a user replaces an image via Visual Edits,
// only that single menu item is affected (not every item that shared the asset).
// The underlying file may currently repeat — replace via Visual Edits to make it unique permanently.

// imgNasgorSpesial69 removed as it is now a remote URL
// imgNasgorSeafood removed as it is now a remote URL
// imgNasgorAyam removed as it is now a remote URL
// imgCapcayKuah removed as it is now a remote URL
// imgNasgorKabita removed as it is now a remote URL
import imgNasgorIkanAsin from "@/assets/menu-nasgor-spesial.jpg";
import imgNasgorPete from "@/assets/menu-nasgor-spesial.jpg";
// imgNasgorJawa removed as it is now a remote URL
// imgNasgorHongkong removed as it is now a remote URL
import imgNasgorNugget from "@/assets/menu-nasgor-ayam.jpg";
// imgNasgorUdang removed as it is now a remote URL
// imgNasgorMawut removed as it is now a remote URL
// imgNasgorPedas removed as it is now a remote URL
// imgNasgorBakso removed as it is now a remote URL
// imgNasgorSosis removed as it is now a remote URL

import imgMiegor69 from "@/assets/menu-mie-goreng.jpg";
import imgMiegorSpesial from "@/assets/menu-mie-goreng.jpg";
import imgMiegorAyam from "@/assets/menu-mie-goreng.jpg";
// imgMiegorPedas removed as it is now a remote URL
import imgMiegorSeafood from "@/assets/menu-mie-goreng.jpg";
// imgMieCapcay removed as it is now a remote URL
// imgTammieCapcay removed as it is now a remote URL
import imgKwetiauGoreng from "@/assets/menu-mie-goreng.jpg";
// imgMieAyamSpesial removed as it is now a remote URL
// imgMieAyam69 removed as it is now a remote URL
// imgBihunGoreng removed as it is now a remote URL

// imgHpMieSapiLada removed as it is now a remote URL
// imgHpMieSapiCabe removed as it is now a remote URL
// imgHpMieThai removed as it is now a remote URL
// imgHpMieAyamLada removed as it is now a remote URL
import imgHpMieAsamManis from "@/assets/menu-mie-goreng.jpg";
import imgHpMie from "@/assets/menu-mie-goreng.jpg";
import imgHpKwetiau from "@/assets/menu-mie-goreng.jpg";
// imgHpNasiAyamCabe removed as it is now a remote URL
// imgHpNasiSapiCabe removed as it is now a remote URL
// imgHpNasiSapiLada removed as it is now a remote URL

// imgCapcayKuah removed as it is now a remote URL
import imgNasiCapcay from "@/assets/menu-nasgor-ayam.jpg";
import imgPangsitKuah from "@/assets/menu-nasgor-ayam.jpg";
// imgKoloke removed as it is now a remote URL
import imgFuyunghai from "@/assets/menu-fuyunghai.png";

import imgJusAlpukat from "@/assets/menu-es-jeruk.jpg";
import imgJusJambu from "@/assets/menu-es-jeruk.jpg";
// imgJusMelon removed as it is now a remote URL
// imgJusJerukFloat removed as it is now a remote URL
import imgEsCappucinoFloat from "@/assets/menu-es-teh.jpg";
import imgEsCappucino from "@/assets/menu-es-teh.jpg";
import imgJerukHangat from "@/assets/menu-es-jeruk.jpg";
// imgTehHangat removed as it is now a remote URL
import imgEsTeller from "@/assets/menu-es-jeruk.jpg";
// imgTehPucuk removed as it is now a remote URL
import imgAirMineral from "@/assets/menu-es-teh.jpg";
import imgTehPucuk from "@/assets/teh-pucuk.png";
import imgAirMineralFile from "@/assets/air-mineral.png";

export type Category = "nasi-goreng" | "mie-goreng" | "hotplate" | "minuman" | "lain";

export type MenuItem = {
  id: string;
  name: { id: string; en: string };
  desc: { id: string; en: string };
  price: number;
  image: string;
  category: Category;
  badge?: { id: string; en: string };
};

const ngDesc = (idText: string, enText: string) => ({ id: idText, en: enText });

export const menuItems: MenuItem[] = [
  // ============ NASI GORENG ============
  { id: "nasgor-spesial-69", name: { id: "Nasi Goreng Spesial 69", en: "Special 69 Fried Rice" }, desc: ngDesc("Nasi goreng andalan dengan ayam, telur, and bumbu khas 69.", "Signature fried rice with chicken, egg, and the iconic 69 spice blend."), price: 39405, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/nasgor-special-1030x687.jpg", category: "nasi-goreng", badge: { id: "Best Seller", en: "Best Seller" } },
  { id: "nasgor-seafood", name: { id: "Nasi Goreng Seafood", en: "Seafood Fried Rice" }, desc: ngDesc("Perpaduan udang dan cumi segar di atas wajan panas.", "Fresh shrimp and squid combined on a sizzling wok."), price: 51785, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/nasgor-seafood-1030x687.jpg", category: "nasi-goreng" },
  { id: "nasgor-ayam", name: { id: "Nasi Goreng Ayam", en: "Chicken Fried Rice" }, desc: ngDesc("Klasik favorit semua orang, gurih dan harum.", "An everyday classic — savoury and aromatic."), price: 45238, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/nasgor-ayam-1030x687.jpg", category: "nasi-goreng" },
  { id: "nasgor-ikan-asin", name: { id: "Nasi Goreng Ikan Asin", en: "Salted Fish Fried Rice" }, desc: ngDesc("Gurih ikan asin berpadu dengan nasi goreng harum.", "Savoury salted fish paired with aromatic fried rice."), price: 46429, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/nasgor-ikan-asin-1030x687.jpg", category: "nasi-goreng" },
  { id: "nasgor-kabita", name: { id: "Nasi Goreng Kabita", en: "Kabita Fried Rice" }, desc: ngDesc("Nasi goreng kabita dengan topping melimpah.", "Loaded Kabita fried rice — a long-time favourite."), price: 33333, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/nasgor-kabita-1030x687.jpg", category: "nasi-goreng", badge: { id: "Favorit", en: "Favourite" } },
  { id: "nasgor-pete", name: { id: "Nasi Goreng Pete", en: "Petai Fried Rice" }, desc: ngDesc("Untuk pencinta pete sejati, aromanya bikin nagih.", "For true petai lovers — bold and addictive."), price: 47620, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/nasgor-pete-1030x687.jpg", category: "nasi-goreng" },
  { id: "nasgor-jawa", name: { id: "Nasi Goreng Jawa", en: "Javanese Fried Rice" }, desc: ngDesc("Cita rasa khas Jawa dengan bumbu rempah pilihan.", "Authentic Javanese flavour with hand-picked spices."), price: 44643, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/nasgor-jawa-1030x687.jpg", category: "nasi-goreng" },
  { id: "nasgor-hongkong", name: { id: "Nasi Goreng Hongkong", en: "Hongkong Fried Rice" }, desc: ngDesc("Nasi goreng gaya Hongkong, gurih dan ringan.", "Hongkong-style fried rice — savoury and light."), price: 45238, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/nasgor-hongkong-1030x687.jpg", category: "nasi-goreng" },
  { id: "nasgor-nugget", name: { id: "Nasi Goreng Nugget", en: "Nugget Fried Rice" }, desc: ngDesc("Topping nugget renyah, favorit anak-anak.", "Crispy nugget topping — a kids' favourite."), price: 40000, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/nasgor-nugget-1030x687.jpg", category: "nasi-goreng" },
  { id: "nasgor-udang", name: { id: "Nasi Goreng Udang", en: "Shrimp Fried Rice" }, desc: ngDesc("Udang segar diaduk dengan bumbu khas 69.", "Fresh shrimp tossed with the signature 69 spice."), price: 52000, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/nasgor-udang-1030x687.jpg", category: "nasi-goreng" },
  { id: "nasgor-mawut", name: { id: "Nasi Goreng Mawut", en: "Mawut Fried Rice" }, desc: ngDesc("Perpaduan nasi dan mie goreng dalam satu piring.", "A delicious mix of fried rice and noodles in one plate."), price: 45238, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/nasgor-mawut-1030x687.jpg", category: "nasi-goreng" },
  { id: "nasgor-pedas", name: { id: "Nasi Goreng Pedas", en: "Spicy Fried Rice" }, desc: ngDesc("Untuk pencinta pedas, level kepedasan menggoda.", "For spice lovers — fiery and craveable."), price: 45833, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/nasgor-mercon-1030x687.jpg", category: "nasi-goreng", badge: { id: "Pedas", en: "Spicy" } },
  { id: "nasgor-bakso", name: { id: "Nasi Goreng Bakso", en: "Meatball Fried Rice" }, desc: ngDesc("Bakso sapi kenyal jadi pelengkap istimewa.", "Springy beef meatballs as the perfect topping."), price: 44643, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/nasgor-bakso-1030x687.jpg", category: "nasi-goreng" },
  { id: "nasgor-sosis", name: { id: "Nasi Goreng Sosis", en: "Sausage Fried Rice" }, desc: ngDesc("Sosis pilihan menyatu dengan nasi goreng harum.", "Premium sausage paired with aromatic fried rice."), price: 44643, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/nasgor-sosis-1030x687.jpg", category: "nasi-goreng" },

  // ============ MIE GORENG ============
  { id: "miegor-69", name: { id: "Mie Goreng 69", en: "Mie Goreng 69" }, desc: ngDesc("Resep mie goreng khas 69 dengan bumbu rahasia.", "Our signature 69 fried noodles with a secret spice mix."), price: 51785, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/miegor-69-1030x687.jpg", category: "mie-goreng", badge: { id: "Best Seller", en: "Best Seller" } },
  { id: "miegor-spesial", name: { id: "Mie Goreng Spesial", en: "Special Fried Noodle" }, desc: ngDesc("Mie goreng with topping lengkap dan telur mata sapi.", "Fully loaded fried noodles topped with a sunny-side egg."), price: 53571, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/miegor-special-1030x687.jpg", category: "mie-goreng" },
  { id: "miegor-ayam", name: { id: "Mie Goreng Ayam", en: "Chicken Fried Noodle" }, desc: ngDesc("Mie kenyal dengan ayam suwir dan sayuran segar.", "Springy noodles with shredded chicken and fresh veg."), price: 45238, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/miegor-ayam-1030x687.jpg", category: "mie-goreng" },
  { id: "miegor-pedas", name: { id: "Mie Goreng Pedas", en: "Spicy Fried Noodle" }, desc: ngDesc("Mie goreng dengan level pedas menggugah.", "Fried noodles with a fiery spicy kick."), price: 45833, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/miegor-mercon-1030x687.jpg", category: "mie-goreng", badge: { id: "Pedas", en: "Spicy" } },
  { id: "miegor-seafood", name: { id: "Mie Goreng Seafood", en: "Seafood Fried Noodle" }, desc: ngDesc("Mie goreng dengan udang dan cumi segar.", "Fried noodles with fresh shrimp and squid."), price: 52381, image: "/lovable-uploads/1cac38ac-e941-4f2e-afb4-fc8fd127bc23.png", category: "mie-goreng" },
  { id: "mie-capcay", name: { id: "Mie Capcay", en: "Capcay Noodle" }, desc: ngDesc("Mie disiram capcay sayuran segar dan kuah gurih.", "Noodles topped with fresh veggie capcay and savoury broth."), price: 38000, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/mie-cap-cay-1030x687.jpg", category: "mie-goreng" },
  { id: "tammie-capcay", name: { id: "Tammie Capcay", en: "Tammie Capcay" }, desc: ngDesc("Tammie crispy disiram capcay sayuran spesial.", "Crispy tammie topped with special veggie capcay."), price: 37185, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/tamie-cap-cay-1030x687.jpg", category: "mie-goreng" },
  { id: "kwetiau-goreng", name: { id: "Kwetiau Goreng", en: "Fried Kwetiau" }, desc: ngDesc("Kwetiau lebar digoreng dengan bumbu khas.", "Wide rice noodles stir-fried with signature spices."), price: 40000, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/kwetiau-goreng-1030x687.jpg", category: "mie-goreng" },
  { id: "mie-ayam-spesial", name: { id: "Mie Ayam Spesial", en: "Special Chicken Noodle" }, desc: ngDesc("Mie ayam dengan topping lengkap dan kuah kaldu.", "Chicken noodles with full toppings and rich broth."), price: 23100, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/Mie-ayam-Spesial-1030x687.jpg", category: "mie-goreng" },
  { id: "mie-ayam-69", name: { id: "Mie Ayam 69", en: "Mie Ayam 69" }, desc: ngDesc("Resep mie ayam khas 69, gurih dan harum.", "Our signature chicken noodle — savoury and aromatic."), price: 22000, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/Mie-ayam-69-1030x687.jpg", category: "mie-goreng" },
  { id: "bihun-goreng", name: { id: "Bihun Goreng", en: "Fried Vermicelli" }, desc: ngDesc("Bihun digoreng dengan sayur dan ayam suwir.", "Vermicelli stir-fried with veggies and shredded chicken."), price: 38000, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/bihun-goreng-1030x687.jpg", category: "mie-goreng" },

  // ============ HOTPLATE ============
  { id: "hp-mie-sapi-lada-hitam", name: { id: "Mie Hotplate Sapi Lada Hitam", en: "Hotplate Beef Black Pepper Noodle" }, desc: ngDesc("Mie dengan sapi saus lada hitam di atas hotplate.", "Noodles with beef in black pepper sauce on a sizzling hotplate."), price: 41625, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/mie-hotplate-sapi-lada-hitam-1030x687.jpg", category: "hotplate", badge: { id: "BEST SELLER", en: "BEST SELLER" } },
  { id: "hp-mie-sapi-cah-cabe", name: { id: "Mie Hotplate Sapi Cah Cabe", en: "Hotplate Beef Chili Noodle" }, desc: ngDesc("Mie dengan sapi cah cabe pedas di atas hotplate.", "Noodles with spicy chili beef on a sizzling hotplate."), price: 38405, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/mie-hotplate-sapi-cah-cabe-1030x687.jpg", category: "hotplate" },
  { id: "hp-mie-thai", name: { id: "Mie Hotplate Ala Thai", en: "Hotplate Thai-style Noodle" }, desc: ngDesc("Mie hotplate dengan saus Thai asam manis.", "Hotplate noodles with sweet & sour Thai sauce."), price: 39500, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/mie-hotplate-ala-thai-1030x687.jpg", category: "hotplate" },
  { id: "hp-mie-ayam-lada-hitam", name: { id: "Mie Hotplate Ayam Lada Hitam", en: "Hotplate Chicken Black Pepper Noodle" }, desc: ngDesc("Mie dengan ayam saus lada hitam di atas hotplate.", "Noodles with black pepper chicken on a sizzling hotplate."), price: 39405, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/mie-hotplate-ayam-lada-hitam-1030x687.jpg", category: "hotplate" },
  { id: "hp-mie-asam-manis-pedas", name: { id: "Mie Hotplate Asam Manis Pedas", en: "Hotplate Sweet Sour Spicy Noodle" }, desc: ngDesc("Mie dengan saus asam manis pedas di atas hotplate.", "Noodles with sweet, sour and spicy sauce on a hotplate."), price: 39405, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/mie-hotplate-asam-manis-pedas-1030x687.jpg", category: "hotplate" },
  { id: "hp-mie", name: { id: "Mie Hotplate", en: "Hotplate Noodle" }, desc: ngDesc("Mie spesial disajikan di atas hotplate panas.", "Special noodles served on a sizzling hotplate."), price: 38295, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/mie-hotplate-1030x687.jpg", category: "hotplate" },
  { id: "hp-kwetiau", name: { id: "Kwetiaw Hotplate", en: "Hotplate Kwetiau" }, desc: ngDesc("Kwetiau goreng disajikan di atas hotplate panas.", "Fried kwetiau served on a sizzling hotplate."), price: 39405, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/kwetiau-hotplate-1030x687.jpg", category: "hotplate" },
  { id: "hp-nasi-ayam-cah-cabe", name: { id: "Nasi Hotplate Ayam Cah Cabe", en: "Hotplate Chili Chicken Rice" }, desc: ngDesc("Nasi dengan ayam cah cabe pedas di atas hotplate.", "Rice with spicy chili chicken on a sizzling hotplate."), price: 40000, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/nasi-hotplate-ayam-cah-cabe-1030x687.jpg", category: "hotplate" },
  { id: "hp-nasi-sapi-cah-cabe", name: { id: "Nasi Hotplate Sapi Cah Cabe", en: "Hotplate Chili Beef Rice" }, desc: ngDesc("Nasi dengan sapi cah cabe pedas di atas hotplate.", "Rice with spicy chili beef on a sizzling hotplate."), price: 40515, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/nasi-hotplate-sapi-cah-cabe-1030x687.jpg", category: "hotplate" },
  { id: "hp-nasi-sapi-lada-hitam", name: { id: "Nasi Hotplate Sapi Lada Hitam", en: "Hotplate Beef Black Pepper Rice" }, desc: ngDesc("Nasi dengan sapi saus lada hitam di atas hotplate.", "Rice with black pepper beef on a sizzling hotplate."), price: 41070, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/nasi-hotplate-sapi-lada-hitam-1030x687.jpg", category: "hotplate" },

  // ============ MENU LAIN ============
  { id: "capcay-kuah", name: { id: "Capcay Kuah", en: "Capcay Soup" }, desc: ngDesc("Aneka sayur segar dengan kuah kaldu gurih.", "Mixed fresh veggies in a savoury broth."), price: 35520, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/cap-cay-1-1030x687.jpg", category: "lain" },
  { id: "nasi-capcay", name: { id: "Nasi Cap Cay", en: "Capcay Rice" }, desc: ngDesc("Nasi putih disiram capcay sayuran segar.", "Steamed rice topped with fresh veggie capcay."), price: 35520, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/nasi-cap-cay-1030x687.jpg", category: "lain" },
  { id: "pangsit-kuah", name: { id: "Pangsit Kuah", en: "Wonton Soup" }, desc: ngDesc("Pangsit isi ayam dengan kuah kaldu hangat.", "Chicken-filled wontons in warm broth."), price: 19000, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/Pangsit-kuah-1030x687.jpg", category: "lain" },
  { id: "koloke", name: { id: "Koloke", en: "Koloke (Sweet Sour Chicken)" }, desc: ngDesc("Ayam goreng dengan saus asam manis khas.", "Crispy chicken in signature sweet & sour sauce."), price: 38850, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/koloke-1030x687.jpg", category: "lain" },
  { id: "fuyunghai", name: { id: "Fuyunghai", en: "Fuyunghai" }, desc: ngDesc("Telur dadar isi sayuran dengan saus asam manis.", "Veggie omelette topped with sweet & sour sauce."), price: 38295, image: imgFuyunghai, category: "lain" },

  // ============ MINUMAN ============
  { id: "jus-alpukat", name: { id: "Jus Alpukat", en: "Avocado Juice" }, desc: ngDesc("Jus alpukat segar lembut dan creamy.", "Fresh, smooth, creamy avocado juice."), price: 21645, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/IMG_7272-687x1030.jpg", category: "minuman" },
  { id: "jus-jambu", name: { id: "Jus Jambu", en: "Guava Juice" }, desc: ngDesc("Jus jambu segar kaya vitamin.", "Refreshing guava juice rich in vitamin C."), price: 21645, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/jus-jambu-687x1030.jpg", category: "minuman" },
  { id: "jus-melon", name: { id: "Jus Melon", en: "Melon Juice" }, desc: ngDesc("Jus melon manis menyegarkan.", "Sweet, refreshing melon juice."), price: 21645, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/jus-melon-687x1030.jpg", category: "minuman" },
  { id: "jus-jeruk-float", name: { id: "Jus Jeruk Float", en: "Orange Juice Float" }, desc: ngDesc("Jus jeruk segar dengan es krim vanilla.", "Fresh orange juice topped with vanilla ice cream."), price: 21645, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/Orange-Float-687x1030.jpg", category: "minuman" },
  { id: "es-cappucino-float", name: { id: "Es Cappucino Float", en: "Iced Cappuccino Float" }, desc: ngDesc("Cappuccino dingin dengan es krim vanilla.", "Iced cappuccino topped with vanilla ice cream."), price: 24000, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/Es-Capucino-Float-687x1030.jpg", category: "minuman" },
  { id: "es-cappucino", name: { id: "Es Cappucino", en: "Iced Cappuccino" }, desc: ngDesc("Cappuccino dingin yang creamy dan nikmat.", "Creamy iced cappuccino — smooth and delightful."), price: 24000, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/Es-Cappucino-687x1030.jpg", category: "minuman" },
  { id: "jeruk-hangat", name: { id: "Jeruk Hangat", en: "Hot Orange" }, desc: ngDesc("Jeruk peras hangat, menyegarkan tenggorokan.", "Warm squeezed orange — soothing for the throat."), price: 15000, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/jeruk-hangat-687x1030.jpg", category: "minuman" },
  { id: "teh-hangat", name: { id: "Teh Hangat", en: "Hot Tea" }, desc: ngDesc("Teh hangat manis, klasik dan menenangkan.", "Sweet hot tea — classic and comforting."), price: 8000, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/teh-hangat-687x1030.jpg", category: "minuman" },
  { id: "es-teller", name: { id: "Es Teller", en: "Es Teller" }, desc: ngDesc("Campuran alpukat, kelapa muda, dan nangka.", "Mix of avocado, young coconut, and jackfruit."), price: 15000, image: "https://nasigoreng69.com/wp-content/uploads/2022/07/IMG_7250-687x1030.jpg", category: "minuman" },
  { id: "teh-pucuk", name: { id: "Teh Pucuk", en: "Teh Pucuk" }, desc: ngDesc("Teh kemasan dingin yang menyegarkan.", "Chilled bottled tea, always refreshing."), price: 8250, image: imgTehPucuk, category: "minuman" },
  { id: "air-mineral", name: { id: "Air Mineral", en: "Mineral Water" }, desc: ngDesc("Air mineral kemasan 600ml.", "Bottled mineral water 600ml."), price: 8250, image: imgAirMineralFile, category: "minuman" },
];

export const formatRp = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n);
