import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";

const reviews = [
  { name: "Dwi Ardhi Nugroho", quote: "Rasa ok lah. Gak ada yang gagal. Pelayanan nya cepat dan ramah.", rating: 5, avatar: "👨" },
  { name: "Bunga Apriliana", quote: "Nasgor specialnya yummy..sgt enakkkkk..🤤🤤🤩🤩", rating: 5, avatar: "👩" },
  { name: "Denny D.S.", quote: "Harganya agak terlalu mahal untuk rasa makanan yang disajikan. Saya memesan Nasi Goreng Hongkong, rasanya lumayan, tapi agak terlalu asin. Pelayannya ramah dan sangat terlatih. Dapur mereka terlihat bersih dari tempat saya memesan makanan.", rating: 4, avatar: "👦" },
  { name: "Nevin Lalalili", quote: "Nasi goreng di sini gak pernah fail rasanya, memang enak, fuyunghainya tebel enak, tapi sausnya agak kemanisan, pelayanannya cukup ramah", rating: 5, avatar: "👧" },
];

const ReviewSection = () => {
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % reviews.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="review" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-5xl font-display font-bold text-primary text-center mb-12"
        >
          Apa Kata Mereka?
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-8 md:p-10 shadow-xl text-center"
            >
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.3 }}
              >
                {reviews[current].avatar}
              </motion.div>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < reviews[current].rating ? "text-secondary fill-secondary" : "text-muted"}`}
                  />
                ))}
              </div>
              <p className="text-lg md:text-xl text-foreground font-body italic mb-4">
                "{reviews[current].quote}"
              </p>
              <p className="text-primary font-display font-bold">{reviews[current].name}</p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary scale-125" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
