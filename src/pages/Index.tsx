import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProfileSection from "@/components/ProfileSection";
import MenuSection from "@/components/MenuSection";
import OutletSection from "@/components/OutletSection";
import ReviewSection from "@/components/ReviewSection";
import PromoSection from "@/components/PromoSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProfileSection />
      <MenuSection />
      <OutletSection />
      <ReviewSection />
      <PromoSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
