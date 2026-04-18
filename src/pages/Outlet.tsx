import Navbar from "@/components/Navbar";
import OutletSection from "@/components/OutletSection";
import FooterSection from "@/components/FooterSection";

const Outlet = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-20" />
    <OutletSection />
    <FooterSection />
  </div>
);

export default Outlet;
