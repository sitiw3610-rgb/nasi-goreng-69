import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PartyPopper } from "lucide-react";

const promos = [
{ title: "Combo Juara 1", desc: "NASI GORENG AYAM FILLET CRISPY + LEMON TEA", price: "Rp 30.909", oldPrice: "Rp 40.909", img: "/lovable-uploads/527fbcc6-e1b4-4ed0-85dc-1fae2c29331c.jpg" },
{ title: "Combo Juara 2", desc: "MIE AYAM FILLET CRISPY + LEMON TEA", price: "Rp 30.909", oldPrice: "Rp 40.909", img: "/lovable-uploads/d9fc1a6b-48d6-4ac6-baea-d9018a393723.jpg" },
{ title: "Combo Juara 3", desc: "NASI AYAM MENTEGA + ES TEH", price: "Rp 32.727", oldPrice: "Rp 42.727", img: "/lovable-uploads/b4e6ba17-df07-4780-b7be-0e871ffc8712.jpg" },
{ title: "Bukber Spesial", desc: "1 PORSI AYAM MENTEGA 1 PORSI CAPCAY AYAM 1 PORSI KOLOKE 3 PORSI NASI PUTIH FREE REFILL LEMON TEA", price: "Rp 136.363", oldPrice: "Rp. 146.363", img: "/lovable-uploads/a6f1daa7-c2e9-4a54-9389-8143fc02724e.jpg" }];


const PromoSection = () => {
  const [confetti, setConfetti] = useState<number | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleOrder = (i: number) => {
    setConfetti(i);
    setTimeout(() => setConfetti(null), 1500);
  };

  return (
    <section id="promo" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-5xl font-display font-bold text-primary text-center mb-12 glitch-text">
          
          🔥 PROMO    
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promos.map((p, i) =>
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: i * 0.2, duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="bg-card rounded-2xl overflow-hidden shadow-xl glow-hover relative group">
            
              {/* Image */}
              <div className="overflow-hidden">
                <motion.img
                src={p.img}
                alt={p.title}
                className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-110" />
              
              </div>

              <div className="p-5">
                <h3 className="font-display font-bold text-foreground text-lg">{p.title}</h3>
                <p className="text-sm text-muted-foreground font-body mt-1">{p.desc}</p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-secondary font-body font-bold text-lg">{p.price}</span>
                  <span className="text-muted-foreground font-body text-sm line-through">{p.oldPrice}</span>
                </div>

                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleOrder(i)}
                className="mt-4 w-full py-2.5 rounded-lg bg-secondary text-secondary-foreground font-body font-semibold text-sm relative overflow-hidden">
                
                  Pesan Sekarang

                  {/* Confetti effect */}
                  {confetti === i &&
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.5, 0] }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 flex items-center justify-center">
                  
                      <PartyPopper className="w-8 h-8 text-primary-foreground" />
                    </motion.div>
                }
                </motion.button>
              </div>

              {/* Sale badge */}
              <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground text-xs font-body font-bold px-2 py-1 rounded-full">
                SALE
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default PromoSection;
