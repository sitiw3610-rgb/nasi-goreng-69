import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterSection";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const images = [
  "/lovable-uploads/2883a7a9-170e-470b-a80b-1569800c9934.jpg",
  "/lovable-uploads/5d5f8979-fe56-4055-823c-e31c2cb454d8.jpg",
  "/lovable-uploads/10c28766-3f31-4402-a8b4-4dbe3de1d079.jpg",
];

const milestones = [
  { year: "2007", title: "Awal Mula", story: "Pada tahun 2007, Sartomo memulai petualangan kuliner di Sidoarjo, Jawa Timur, dengan membuka outlet pertama Nasi Goreng 69 sebagai warung malam sederhana yang menyajikan nasi goreng super lezat dengan bumbu rahasia, langsung populer di kalangan warga lokal berkat rasa autentik dan harga terjangkau.", imgIndex: 0 },
  { year: "2011", title: "Perjalanan panjang", story: "Bisnis berkembang pesat menjadi 23 cabang di kota-kota Jawa seperti Surabaya, Malang, Kediri, Madiun, Solo, dan Magelang melalui tawaran waralaba awal, tapi Sartomo memilih beli kembali gerai mitra untuk kendalikan kualitas, menjaga standar rasa dan kebersihan.", imgIndex: 1 },
  { year: "2013-2020", title: "Awal Gabung 69 Group", story: "Nasi Goreng 69 bergabung dengan 69 Group, perkuat operasional dengan SOP ketat, bumbu sachet, peralatan modern, serta ekspansi cabang ke kota-kota seperti Solo, Kediri, dan luar Jawa Timur, sambil kelola sendiri tanpa franchise baru sementara.", imgIndex: 2 },
  { year: "2021-2024", title: "Ekspansi", story: "Tahun 2021-2024, ekspansi lanjut ke Jawa Barat, Jakarta, serta kota besar luar Jawa; sistem operasional efisien diperkuat, promo digital via Instagram @nasgor_69official, dan persiapan franchise baru dengan SOP lengkap.", imgIndex: 0 },
  { year: "2025-Present", title: "Brand Nasional", story: "Akhir 2025-awal 2026, franchise dibuka kembali secara masif: grand opening Plaza Malioboro (November 2025) dengan menu variatif seperti mie ayam dan hotplate; paket investasi Gerobak Rp40 juta, Food Court Rp115 juta, Restoran Rp180 juta (balik modal 8-9 bulan, omzet Rp18-50 juta/bulan); cabang luas di Surabaya-Malang-Solo-Yogyakarta, sambil rayakan Tahun Baru 2026 via promo aktif.", imgIndex: 1 },
];

const CeritaKami = () => {
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20" />

      <section className="py-16 md:py-24" ref={timelineRef}>
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl md:text-5xl font-display font-bold text-primary text-center mb-16"
          >
            Cerita Kami
          </motion.h2>

          <div className="space-y-20 max-w-5xl mx-auto">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                <div className="w-full md:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="overflow-hidden rounded-2xl shadow-lg"
                  >
                    <img
                      src={images[m.imgIndex]}
                      alt={m.title}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </motion.div>
                </div>
                <div className="w-full md:w-1/2">
                  <span className="text-secondary font-body font-bold text-sm">{m.year}</span>
                  <h3 className="font-display font-bold text-foreground text-2xl mt-1">{m.title}</h3>
                  <p className="text-muted-foreground font-body text-sm mt-3 leading-relaxed">{m.story}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CeritaKami;
