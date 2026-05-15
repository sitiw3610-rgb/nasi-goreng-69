export type Lang = "id" | "en";

export const translations = {
  id: {
    nav: { home: "Beranda", about: "Tentang Kami", menu: "Menu", promo: "Promo", outlet: "Outlet" },
    hero: {
      tag: "SEJAK 2007 · 69 GROUP",
      title: "Nasi Goreng 69 — Cita Rasa Legendaris dari Jawa Timur",
      subtitle: "Restoran yang dikelola secara profesional dengan standar mutu konsisten di setiap outlet. Pesan mudah lewat WhatsApp.",
      cta: "Pesan Sekarang",
      ctaSecondary: "Lihat Menu",
    },
    about: {
      label: "Tentang Kami",
      title: "Bagian dari 69 Group — Konsisten Menjaga Mutu di Setiap Outlet",
      body: "Nasi Goreng 69, Warung Kuliner 69, Mie Rame, Nasi Goreng Super, dan Food Bazaar Madiun (69 Group) adalah restoran yang dikelola secara profesional, terus berkembang dengan inovasi terkini, dan konsisten menjaga mutu sehingga standar di semua outlet selalu sama dan terus ditingkatkan. Outlet kami telah tersebar di kota-kota besar Jawa Timur, Jawa Tengah, dan terus berkembang hingga Jawa Barat, Jakarta, serta luar Pulau Jawa.",
      stats: [
        { v: "20+", l: "Outlet di Indonesia" },
        { v: "8+", l: "Kota Besar" },
        { v: "100%", l: "Standar rasa konsisten di setiap outlet" },
      ],
    },
    how: {
      label: "Cara Pesan",
      title: "Tiga Langkah, Sampai ke Meja",
      steps: [
        { t: "Pilih Menu", d: "Telusuri menu favorit dan tambahkan ke keranjang." },
        { t: "Atur Pesanan", d: "Sesuaikan jumlah dan lihat total otomatis di keranjang." },
        { t: "Kirim ke WhatsApp", d: "Tekan checkout, pesanan langsung dikirim ke WhatsApp kami." },
      ],
    },
    menu: {
      label: "Menu Pilihan",
      title: "Cita Rasa Khas 69, Hangat dan Menggugah Selera",
      add: "Tambah",
      categories: {
        "nasi-goreng": "Nasi Goreng",
        "mie-goreng": "Mie Goreng",
        hotplate: "Hotplate",
        minuman: "Minuman",
        lain: "Menu Lain",
      },
    },
    promo: {
      label: "Promo Spesial",
      title: "Hemat Hari Ini, Kenyang Sepanjang Hari",
      cta: "Klaim Promo",
    },
    outlet: {
      label: "Outlet Kami",
      title: "Tersebar di Kota-kota Besar Jawa Timur & Jawa Tengah",
      open: "Buka",
      direction: "Petunjuk Arah",
    },
    cart: {
      title: "Keranjang Anda",
      empty: "Keranjang masih kosong. Yuk pilih menu favorit!",
      total: "Total",
      checkout: "Pesan via WhatsApp",
      qty: "Jumlah",
      remove: "Hapus",
    },
    faq: {
      label: "Bantuan & Informasi",
      title: "FAQ",
      subtitle:
        "Temukan informasi seputar nasi goreng pedas, outlet Nasi Goreng 69, layanan takeaway, GoFood, dan rekomendasi kuliner favorit.",

      items: [
        {
          q: "Rekomendasi nasi goreng pedas enak di Surabaya?",
          a: "Salah satu rekomendasi nasi goreng pedas enak di Surabaya adalah Nasi Goreng 69 dengan berbagai level pedas, menu favorit pelanggan, dan banyak outlet di pusat perbelanjaan Surabaya seperti Tunjungan Plaza, Royal Plaza, Grand City, hingga CITO Mall.",
        },

        {
          q: "Nasi Goreng 69 buka jam berapa?",
          a: "Seluruh outlet Nasi Goreng 69 buka setiap hari pukul 10.00–21.00 WIB. Pelanggan dapat datang langsung ke outlet atau melakukan checkout pickup melalui website.",
        },

        {
          q: "Apakah Nasi Goreng 69 tersedia di GoFood?",
          a: "Ya, Nasi Goreng 69 tersedia di GoFood untuk beberapa outlet di Jawa Timur, Jawa Tengah, dan Yogyakarta sehingga pelanggan dapat lebih mudah memesan nasi goreng favorit secara online.",
        },

        {
          q: "Apakah bisa pesan takeaway di Nasi Goreng 69?",
          a: "Bisa. Pelanggan dapat melakukan pickup langsung melalui sistem checkout website untuk mempermudah pemesanan takeaway tanpa antre.",
        },

        {
          q: "Apa menu favorit di Nasi Goreng 69?",
          a: "Menu favorit pelanggan di Nasi Goreng 69 antara lain Nasi Goreng Spesial 69, Mie Goreng 69, Mie Hotplate Sapi Lada Hitam, Nasi Goreng Jawa, dan Mie Goreng Pedas dengan cita rasa khas dan level pedas favorit pelanggan.",
        },

        {
          q: "Apakah Nasi Goreng 69 punya banyak cabang?",
          a: "Ya, Nasi Goreng 69 memiliki banyak outlet di berbagai kota seperti Surabaya, Malang, Sidoarjo, Gresik, Madiun, Solo, Yogyakarta, dan Magelang.",
        },

        {
          q: "Rekomendasi kuliner pedas di Madiun?",
          a: "Salah satu rekomendasi kuliner pedas di Madiun adalah Nasi Goreng 69 Plaza Madiun dengan pilihan menu nasi goreng pedas favorit dan level sambal yang dapat disesuaikan.",
        },

        {
          q: "Tempat makan nasi goreng enak di Gresik?",
          a: "Nasi Goreng 69 menjadi salah satu pilihan tempat makan nasi goreng enak di Gresik dengan outlet di Icon Mall Gresik dan Gress Mall.",
        },

        {
          q: "Apakah tersedia pembayaran QRIS?",
          a: "Ya, Nasi Goreng 69 mendukung pembayaran QRIS serta pembayaran langsung di outlet untuk memberikan kemudahan transaksi kepada pelanggan.",
        },

        {
          q: "Apakah bisa order lewat website?",
          a: "Ya, pelanggan dapat melakukan checkout pickup langsung melalui website atau redirect ke GoFood sesuai outlet pilihan agar proses pemesanan menjadi lebih praktis.",
        },
      ],
    },
    footer: {
      tagline: "Sajian nasi goreng spesial yang dimasak dengan bahan berkualitas untuk menghadirkan rasa yang selalu fresh dan lezat setiap hari.",
      contact: "Kontak",
      hours: "Jam Buka",
      hoursVal: "10.00 - 22.00 WIB",
      follow: "Ikuti Kami",
      rights: "© 2025 Nasi Goreng 69 — 69 Group. Semua hak dilindungi.",
    },
  },
  en: {
    nav: { home: "Home", about: "About Us", menu: "Menu", promo: "Promo", outlet: "Outlet" },
    hero: {
      tag: "SEJAK 2007 · 69 GROUP",
      title: "Nasi Goreng 69 — Legendary Flavor from East Java",
      subtitle: "A professionally managed restaurant with consistent quality across every outlet. Easy to order via WhatsApp.",
      cta: "Order Now",
      ctaSecondary: "View Menu",
    },
    about: {
      label: "About Us",
      title: "Part of 69 Group — Consistent Quality at Every Outlet",
      body: "Nasi Goreng 69, Warung Kuliner 69, Mie Rame, Nasi Goreng Super, and Food Bazaar Madiun (69 Group) are professionally managed restaurants — continuously innovating and consistently maintaining quality so the standard is the same and always improving across all outlets. Our outlets are spread across major cities in East Java and Central Java, and continue to expand to West Java, Jakarta, and beyond Java.",
      stats: [
        { v: "20+", l: "Outlets in Indonesia" },
        { v: "8+", l: "Major Cities" },
        { v: "100%", l: "Consistent taste standard at every outlet" },
      ],
    },
    how: {
      label: "How to Order",
      title: "Three Steps to Your Table",
      steps: [
        { t: "Pick Your Menu", d: "Browse favorites and add them to your cart." },
        { t: "Review Order", d: "Adjust quantities and see your total update instantly." },
        { t: "Send via WhatsApp", d: "Hit checkout — your order is sent straight to our WhatsApp." },
      ],
    },
    menu: {
      label: "Curated Menu",
      title: "Signature 69 Flavor — Warm and Crave-worthy",
      add: "Add",
      categories: {
        "nasi-goreng": "Fried Rice",
        "mie-goreng": "Fried Noodle",
        hotplate: "Hotplate",
        minuman: "Drinks",
        lain: "Others",
      },
    },
    promo: {
      label: "Special Offers",
      title: "Save Today, Full All Day",
      cta: "Claim Promo",
    },
    outlet: {
      label: "Our Outlets",
      title: "Spread Across Major Cities of East & Central Java",
      open: "Open",
      direction: "Get Directions",
    },
    cart: {
      title: "Your Cart",
      empty: "Your cart is empty. Pick a favorite!",
      total: "Total",
      checkout: "Order via WhatsApp",
      qty: "Qty",
      remove: "Remove",
    },
    faq: {
      label: "Help & Information",
      title: "FAQ",
      subtitle:
        "Find information about spicy fried rice, Nasi Goreng 69 outlets, takeaway services, GoFood, and favorite culinary recommendations.",

      items: [
        {
          q: "Where can I find delicious spicy fried rice in Surabaya?",
          a: "One of the recommended spicy fried rice restaurants in Surabaya is Nasi Goreng 69 with various spice levels, favorite menu choices, and many outlets in shopping centers such as Tunjungan Plaza, Royal Plaza, Grand City, and CITO Mall.",
        },

        {
          q: "What time does Nasi Goreng 69 open?",
          a: "All Nasi Goreng 69 outlets are open daily from 10 AM to 9 PM. Customers can dine in directly or place takeaway pickup orders through the website.",
        },

        {
          q: "Is Nasi Goreng 69 available on GoFood?",
          a: "Yes, Nasi Goreng 69 is available on GoFood for several outlets across East Java, Central Java, and Yogyakarta, making it easier for customers to order online.",
        },

        {
          q: "Can I order takeaway at Nasi Goreng 69?",
          a: "Yes. Customers can place takeaway pickup orders directly through the website checkout system for a faster ordering experience.",
        },

        {
          q: "What are the favorite menu items at Nasi Goreng 69?",
          a: "Popular menu items include Nasi Goreng Spesial 69, Mie Goreng 69, Black Pepper Beef Hotplate Noodles, Javanese Fried Rice, and Spicy Fried Noodles.",
        },

        {
          q: "Does Nasi Goreng 69 have many branches?",
          a: "Yes, Nasi Goreng 69 has many outlets in cities such as Surabaya, Malang, Sidoarjo, Gresik, Madiun, Solo, Yogyakarta, and Magelang.",
        },

        {
          q: "Any recommendations for spicy culinary food in Madiun?",
          a: "One recommended spicy culinary destination in Madiun is Nasi Goreng 69 Plaza Madiun with customizable spice levels and favorite fried rice menus.",
        },

        {
          q: "Where can I find delicious fried rice in Gresik?",
          a: "Nasi Goreng 69 is one of the popular fried rice restaurants in Gresik with outlets located at Icon Mall Gresik and Gress Mall.",
        },

        {
          q: "Is QRIS payment available?",
          a: "Yes, Nasi Goreng 69 supports QRIS payments as well as direct payments at the outlet for customer convenience.",
        },

        {
          q: "Can I order through the website?",
          a: "Yes, customers can place pickup checkout orders directly through the website or get redirected to GoFood depending on the selected outlet.",
        },
      ],
    },
    footer: {
      tagline: "Part of 69 Group — a professionally managed restaurant with consistent SOP and quality across every outlet.",
      contact: "Contact",
      hours: "Open Hours",
      hoursVal: "Follows mall operating hours",
      follow: "Follow Us",
      rights: "© 2025 Nasi Goreng 69 — 69 Group. All rights reserved.",
    },
  },
};
