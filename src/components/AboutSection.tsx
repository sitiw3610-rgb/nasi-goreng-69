import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const milestones = [
{ year: "2007", title: "Awal Mula", story: "Pada tahun 2007, Sartomo memulai petualangan kuliner di Sidoarjo, Jawa Timur, dengan membuka outlet pertama Nasi Goreng 69 sebagai warung malam sederhana yang menyajikan nasi goreng super lezat dengan bumbu rahasia, langsung populer di kalangan warga lokal berkat rasa autentik dan harga terjangkau." },
{ year: "2011", title: "Perjalanan panjang", story: "Bisnis berkembang pesat menjadi 23 cabang di kota-kota Jawa seperti Surabaya, Malang, Kediri, Madiun, Solo, dan Magelang melalui tawaran waralaba awal, tapi Sartomo memilih beli kembali gerai mitra untuk kendalikan kualitas, menjaga standar rasa dan kebersihan." },
{ year: "2013-2020", title: "Awal Gabung 69 Group", story: "Nasi Goreng 69 bergabung dengan 69 Group, perkuat operasional dengan SOP ketat, bumbu sachet, peralatan modern, serta ekspansi cabang ke kota-kota seperti Solo, Kediri, dan luar Jawa Timur, sambil kelola sendiri tanpa franchise baru sementara." },
{ year: "2021-2024", title: "Ekspansi", story: "Tahun 2021-2024, ekspansi lanjut ke Jawa Barat, Jakarta, serta kota besar luar Jawa; sistem operasional efisien diperkuat, promo digital via Instagram @nasgor_69official, dan persiapan franchise baru dengan SOP lengkap." },
{ year: "2025-Present", title: "Brand Nasional", story: "Akhir 2025-awal 2026, franchise dibuka kembali secara masif: grand opening Plaza Malioboro (November 2025) dengan menu variatif seperti mie ayam dan hotplate; paket investasi Gerobak Rp40 juta, Food Court Rp115 juta, Restoran Rp180 juta (balik modal 8-9 bulan, omzet Rp18-50 juta/bulan); cabang luas di Surabaya-Malang-Solo-Yogyakarta, sambil rayakan Tahun Baru 2026 via promo aktif." }];


const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="tentang" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-5xl font-display font-bold text-primary text-center mb-16">
          
          Tentang Kami
        </motion.h2>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary/30" />

          {milestones.map((m, i) =>
          <motion.div
            key={m.year}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className={`relative mb-10 pl-12 md:pl-0 md:w-1/2 ${
            i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`
            }>
            
              {/* Dot */}
              <motion.div
              whileHover={{ scale: 1.5 }}
              className="absolute left-2.5 md:left-auto top-1 w-4 h-4 rounded-full bg-secondary border-2 border-card shadow-md z-10"
              style={{
                ...(i % 2 === 0 ?
                { right: undefined, left: "0.625rem", [`@media (min-width: 768px)`]: { right: "-0.5rem", left: "auto" } } :
                {})
              }} />
            
              <div className="hidden md:block absolute top-1 w-4 h-4 rounded-full bg-secondary border-2 border-card shadow-md z-10"
            style={i % 2 === 0 ? { right: "-0.5rem" } : { left: "-0.5rem" }} />
            

              <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-card rounded-xl p-5 shadow-lg glow-hover">
              
                <span className="text-secondary font-body font-bold text-sm">{m.year}</span>
                <h3 className="font-display font-bold text-foreground text-lg mt-1">{m.title}</h3>
                <p className="text-muted-foreground font-body text-sm mt-2 text-center">{m.story}</p>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default AboutSection;
