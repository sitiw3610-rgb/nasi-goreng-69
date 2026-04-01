import Navbar from "@/components/Navbar";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/FooterSection";

const Menu = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-20" />
    <MenuSection />
    <Footer />
  </div>
);

export default Menu;
