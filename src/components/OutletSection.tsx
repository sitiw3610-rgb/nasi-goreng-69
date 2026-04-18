import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Search, Star, ArrowLeft, Phone, Clock, ExternalLink } from "lucide-react";
import { outlets as allOutlets, cities, type Outlet } from "@/data/outlets";

function RatingBadge({ rating }: { rating: number | string }) {
  return (
    <span className="inline-flex items-center gap-1 bg-secondary/20 text-secondary-foreground text-xs font-semibold px-2 py-0.5 rounded-full">
      <Star className="w-3 h-3 fill-secondary text-secondary" />
      {typeof rating === "number" ? rating.toFixed(1) : rating}
    </span>
  );
}

const OutletSection = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCities = useMemo(() => {
    if (!searchQuery) return cities;
    const q = searchQuery.toLowerCase();
    return cities.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        allOutlets.some(
          (o) =>
            o.city === c.name &&
            (o.name.toLowerCase().includes(q) || o.address.toLowerCase().includes(q))
        )
    );
  }, [searchQuery]);

  const cityOutlets = useMemo(() => {
    if (!selectedCity) return [];
    let filtered = allOutlets.filter((o) => o.city === selectedCity);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (o) => o.name.toLowerCase().includes(q) || o.address.toLowerCase().includes(q)
      );
    }
    return filtered.sort((a, b) => {
      const ratingA = typeof a.rating === "number" ? a.rating : parseFloat(a.rating) || 0;
      const ratingB = typeof b.rating === "number" ? b.rating : parseFloat(b.rating) || 0;
      return ratingB - ratingA;
    });
  }, [selectedCity, searchQuery]);

  const selectCity = (cityName: string) => {
    setSelectedCity(cityName);
    setSearchQuery("");
  };

  const goBack = () => {
    setSelectedCity(null);
    setSearchQuery("");
  };

  return (
    <section className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-3">
            {selectedCity && (
              <button
                onClick={goBack}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-foreground" />
              </button>
            )}
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">
                {selectedCity ? selectedCity : "Outlet Terdekat"}
              </h2>
              <p className="text-sm text-muted-foreground font-body">
                {selectedCity
                  ? `${cityOutlets.length} outlet ditemukan`
                  : "Pilih kota untuk melihat outlet"}
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari kota atau outlet..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {!selectedCity ? (
            <motion.div
              key="cities"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {filteredCities.map((city, i) => (
                <motion.button
                  key={city.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => selectCity(city.name)}
                  className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-display font-bold text-foreground text-sm">
                    {city.name}
                  </span>
                  <span className="text-xs text-muted-foreground font-body">
                    {city.outletCount} outlet
                  </span>
                </motion.button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="outlets"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {cityOutlets.map((outlet, i) => (
                <motion.div
                  key={outlet.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="p-5 rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-display font-bold text-foreground text-base leading-tight">
                      {outlet.name}
                    </h3>
                    <RatingBadge rating={outlet.rating} />
                  </div>
                  <p className="text-sm text-muted-foreground font-body mb-2 flex items-start gap-1.5 whitespace-pre-line">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {outlet.address}
                  </p>
                  {outlet.hours && (
                    <p className="text-sm text-muted-foreground font-body mb-2 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                      {outlet.hours}
                    </p>
                  )}
                  {outlet.phone && (
                    <p className="text-sm text-muted-foreground font-body mb-3 flex items-center gap-1.5">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      {outlet.phone}
                    </p>
                  )}
                  <a
                    href={outlet.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Buka di Google Maps
                  </a>
                </motion.div>
              ))}
              {cityOutlets.length === 0 && (
                <p className="text-center text-sm text-muted-foreground font-body py-8 col-span-full">
                  Tidak ada outlet yang cocok.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OutletSection;
