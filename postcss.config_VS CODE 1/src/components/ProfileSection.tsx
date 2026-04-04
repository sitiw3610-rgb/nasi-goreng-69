import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const profiles = [
{ name: "Awal berdiri ", role: "Sejak 2007", bio: "Didirikan oleh Sartomo sekitar tahun 2007 sebagai outlet pertama di Sidoarjo, Jawa Timur.", img: "/lovable-uploads/2883a7a9-170e-470b-a80b-1569800c9934.jpg" },
{ name: "Total Cabang", role: "23 cabang di pulau Jawa", bio: "Pada 2011, bisnis berkembang hingga 23 cabang di kota-kota Jawa seperti Surabaya, Malang, Semarang dan Madiun.", img: "/lovable-uploads/5d5f8979-fe56-4055-823c-e31c2cb454d8.jpg" },
{ name: "Menu Variatif", role: "6++ Kategori Menu", bio: "", img: "/lovable-uploads/10c28766-3f31-4402-a8b4-4dbe3de1d079.jpg" }];


const ProfileSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="cerita" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ x: -60, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-display font-bold text-primary text-center mb-4">
          
          Cerita Kami
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-center text-muted-foreground font-body mb-12 max-w-xl mx-auto">


        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {profiles.map((p, i) =>
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="group relative bg-card rounded-2xl overflow-hidden cursor-pointer glow-hover shadow-lg">
            
              <div className="overflow-hidden h-48">
                <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-display font-bold text-foreground">{p.name}</h3>
                <p className="text-sm text-secondary font-body font-semibold mt-1">{p.role}</p>
                <p className="text-sm mt-3 font-body text-left text-[#5a2c07]">{p.bio}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default ProfileSection;