import { useEffect } from "react";
import { PromoSection } from "@/components/sections/PromoSection";

const PromoPage = () => {
  useEffect(() => {
    document.title = "Promo · Nasi Goreng 69";
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="pt-20">
      <PromoSection />
    </div>
  );
};

export default PromoPage;
