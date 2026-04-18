import Navbar from "@/components/Navbar";
import BerandaHero from "@/components/beranda/BerandaHero";
import BerandaAbout from "@/components/beranda/BerandaAbout";
import BerandaMenuPreview from "@/components/beranda/BerandaMenuPreview";
import BerandaOutletCTA from "@/components/beranda/BerandaOutletCTA";
import Footer from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";

const Beranda = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <BerandaHero />
    <BerandaAbout />
    <BerandaMenuPreview />
    <BerandaOutletCTA />
    <Footer />
    <FloatingButtons />
  </div>
);

export default Beranda;
