import { useEffect } from "react";
import { MenuSection } from "@/components/sections/MenuSection";

const MenuPage = () => {
  useEffect(() => {
    document.title = "Menu · Nasi Goreng 69";
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="pt-20">
      <MenuSection />
    </div>
  );
};

export default MenuPage;
