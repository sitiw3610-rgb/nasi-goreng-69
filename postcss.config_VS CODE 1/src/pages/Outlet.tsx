import Navbar from "@/components/Navbar";
import OutletSection from "@/components/OutletSection";
import Footer from "@/components/FooterSection";

const Outlet = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-20" />
    <OutletSection />
    <Footer />
  </div>
);

export default Outlet;
