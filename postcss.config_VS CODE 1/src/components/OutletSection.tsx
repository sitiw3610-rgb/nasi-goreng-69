import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Clock, Phone } from "lucide-react";

const outlets = [
{ name: "Nasi Goreng 69 Madiun", city: "Madiun", hours: "10:00 - 22:00", address: "Jl. Pahlawan No. 38-40, Madiun", phone: "+62 812-3456-7890" },
{ name: "Nasi Goreng 69 Surabaya", city: "Surabaya", hours: "10:00 - 23:00", address: "Jl. Pemuda No. 257, Surabaya", phone: "+62 823-3051-2769" },
{ name: "Nasi Goreng 69 Malang", city: "Malang", hours: "10:00 - 22:00", address: "Jl. M. Haryono No. 195-197, Malang", phone: "+62 814-9903-1397" },
{ name: "Nasi Goreng 69 Semarang", city: "Semarang", hours: "10:00 - 22:00", address: "Jl. Hassanudin No. 8, Semarang", phone: "+62 899-5899-449" }];


const OutletSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const scrollToMenu = (city: string) => {
    const menuEl = document.getElementById("menu");
    if (menuEl) menuEl.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="outlet" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-5xl font-display font-bold text-primary text-center mb-4">
          
          Outlet Terdekat
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground font-body mb-12">
          
          Klik untuk melihat lokasi terdekat dari anda       
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outlets.map((o, i) =>
          <motion.div
            key={o.name}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
            onClick={() => scrollToMenu(o.city)}
            className="bg-card rounded-2xl p-6 shadow-lg glow-hover cursor-pointer group">
            
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                <MapPin className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-1">{o.name}</h3>
              <span className="inline-block bg-primary/10 text-primary text-xs font-body font-semibold px-2 py-0.5 rounded-full mb-3">{o.city}</span>
              <div className="space-y-2 text-sm text-muted-foreground font-body">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span>{o.hours}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{o.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span>{o.phone}</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 rounded-2xl overflow-hidden shadow-xl h-64 md:h-80">
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65295222744!2d106.68943050938976!3d-6.229386699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdfe727d2!2sJakarta!5e0!3m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Lokasi Outlet" />
          
        </motion.div>
      </div>
    </section>);

};

export default OutletSection;