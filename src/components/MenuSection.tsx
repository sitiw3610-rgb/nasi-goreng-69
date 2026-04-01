import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

type MenuItem = {
  name: string;
  price: Record<string, string>;
  desc: string;
  img: string;
  category: "makanan" | "minuman";
};

const outlets = ["Semua Cabang", "Madiun", "Surabaya", "Malang", "Semarang"];

const menuItems: MenuItem[] = [
{ name: "Nasi Goreng Spesial 69", price: { "Semua Cabang": "Rp 51.000", Madiun: "Rp 35.000", Surabaya: "Rp 40.000", Malang: "Rp 37.000", Semarang: "Rp 38.000" }, desc: "Signature dish dengan bumbu rahasia turun-temurun", img: "/lovable-uploads/ab1bc644-62d8-40ed-bda3-96fa480444cf.png", category: "makanan" },
{ name: "Nasi Goreng Seafood", price: { "Semua Cabang": "Rp 48.000", Madiun: "Rp 33.000", Surabaya: "Rp 38.000", Malang: "Rp 35.000", Semarang: "Rp 36.000" }, desc: "Nasi goreng dengan udang, cumi, dan bumbu spesial", img: "/lovable-uploads/e99e1fe7-a840-44e3-b7a9-e9eccbd4e7ad.jpg", category: "makanan" },
{ name: "Hot Plate Sapi Lada Hitam", price: { "Semua Cabang": "Rp 52.000", Madiun: "Rp 40.000", Surabaya: "Rp 45.000", Malang: "Rp 42.000", Semarang: "Rp 43.000" }, desc: "Daging sapi dengan saus lada hitam dan nasi putih", img: "/lovable-uploads/607c364b-4c04-4132-afb7-a8f630e2f659.jpg", category: "makanan" },
{ name: "Mie Hotplate sapi cah cabe", price: { "Semua Cabang": "Rp 54.000", Madiun: "Rp 25.000", Surabaya: "Rp 30.000", Malang: "Rp 27.000", Semarang: "Rp 28.000" }, desc: "Perpaduan mie dan daging sapi yang disiram saus cah cabe", img: "/lovable-uploads/1edfcccb-c96a-4dfa-a883-46f6110cb080.jpg", category: "makanan" },
{ name: "Tammie Capcay", price: { "Semua Cabang": "Rp 47.000", Madiun: "Rp 28.000", Surabaya: "Rp 32.000", Malang: "Rp 30.000", Semarang: "Rp 31.000" }, desc: "Mie goreng crispy yang di siram dengan sayuran yang lengkap dan berbagai protein seperti telur, ayam, udang, dll", img: "/lovable-uploads/105992da-5dda-4db0-bd14-b18a4a8517f7.jpg", category: "makanan" },
{ name: "Mie Goreng Spesial 69", price: { "Semua Cabang": "Rp 42.000", Madiun: "Rp 45.000", Surabaya: "Rp 50.000", Malang: "Rp 47.000", Semarang: "Rp 48.000" }, desc: "Signature dish dengan bumbu rahasia turun-temurun", img: "/lovable-uploads/30817538-598d-428b-a12d-70b17c8c66db.jpg", category: "makanan" },
{ name: "Jus Alpukat", price: { "Semua Cabang": "Rp 15.000", Madiun: "Rp 13.000", Surabaya: "Rp 16.000", Malang: "Rp 15.000", Semarang: "Rp 15.000" }, desc: "Jus alpukat segar dengan susu cokelat", img: "/lovable-uploads/11f71ca6-074a-4c3d-b960-9a41fadf4ad7.jpg", category: "minuman" },
{ name: "Es Teh Manis", price: { "Semua Cabang": "Rp 8.000", Madiun: "Rp 7.000", Surabaya: "Rp 9.000", Malang: "Rp 8.000", Semarang: "Rp 8.000" }, desc: "Teh manis segar dengan es batu", img: "/lovable-uploads/a82baf3b-dbfc-4d07-8cce-0697608f3756.jpg", category: "minuman" },
{ name: "Jus Jeruk Float", price: { "Semua Cabang": "Rp 12.000", Madiun: "Rp 10.000", Surabaya: "Rp 13.000", Malang: "Rp 12.000", Semarang: "Rp 12.000" }, desc: "Jeruk peras segar tanpa pengawet", img: "/lovable-uploads/e100cb4f-b2ce-4e32-8749-829be1b06e5d.jpg", category: "minuman" },
{ name: "Es Teller 69", price: { "Semua Cabang": "Rp 18.000", Madiun: "Rp 16.000", Surabaya: "Rp 20.000", Malang: "Rp 18.000", Semarang: "Rp 18.000" }, desc: "Es teller dengan aneka buah ", img: "/lovable-uploads/6ebbd5fa-c573-49cb-8efb-941915f06c00.jpg", category: "minuman" }];


const MenuSection = () => {
  const [tab, setTab] = useState<"makanan" | "minuman">("makanan");
  const [selectedOutlet, setSelectedOutlet] = useState("Semua Cabang");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered = menuItems.filter((m) => m.category === tab);
  const makananCount = menuItems.filter((m) => m.category === "makanan").length;
  const minumanCount = menuItems.filter((m) => m.category === "minuman").length;

  return (
    <section id="menu" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-5xl font-display font-bold text-primary text-center mb-4">
          
          Menu Kami
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground font-body mb-8">
          
          Pilih cabang untuk melihat harga spesifik    
        </motion.p>

        {/* Outlet filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {outlets.map((o) =>
          <button
            key={o}
            onClick={() => setSelectedOutlet(o)}
            className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 ${
            selectedOutlet === o ?
            "bg-primary text-primary-foreground shadow-md" :
            "bg-card text-foreground hover:bg-secondary hover:text-secondary-foreground"}`
            }>
            
              {o}
            </button>
          )}
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {[
          { key: "makanan" as const, label: "Makanan" },
          { key: "minuman" as const, label: "Minuman" }].
          map((t) =>
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-6 py-3 rounded-xl text-base font-body font-semibold transition-all duration-300 ${
            tab === t.key ?
            "bg-gradient-to-r from-secondary to-accent text-secondary-foreground shadow-lg" :
            "bg-card text-foreground glow-hover"}`
            }>
            
              {t.label}
            </button>
          )}
        </div>

        {/* Menu grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {filtered.map((item, i) =>
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg glow-hover group">
              
                <div className="overflow-hidden h-44">
                  <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-foreground text-lg">{item.name}</h3>
                  <p className="text-sm text-muted-foreground font-body mt-1">{item.desc}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-secondary font-body font-bold text-lg">
                      {item.price[selectedOutlet] || item.price["Semua Cabang"]}
                    </span>
                    {selectedOutlet !== "Semua Cabang" &&
                  <span className="text-xs text-muted-foreground font-body bg-muted px-2 py-1 rounded-full">
                        {selectedOutlet}
                      </span>
                  }
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>);

};

export default MenuSection;