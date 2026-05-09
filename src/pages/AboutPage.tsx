import { useEffect } from "react";
import { AboutSection } from "@/components/sections/AboutSection";
import { TimelineSection } from "@/components/sections/TimelineSection";

const AboutPage = () => {
  useEffect(() => {
    document.title = "Tentang Kami · Nasi Goreng 69";
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="pt-20">
      <AboutSection showTimeline={false} />
      <TimelineSection />
    </div>
  );
};

export default AboutPage;
