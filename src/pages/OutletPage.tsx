import { useEffect } from "react";
import { OutletSection } from "@/components/sections/OutletSection";

const OutletPage = () => {
  useEffect(() => {
    document.title = "Outlet · Nasi Goreng 69";
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="pt-20">
      <OutletSection />
    </div>
  );
};

export default OutletPage;
