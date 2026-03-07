import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CasesSection from "@/components/CasesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <USPSection />
    <ServicesSection />
    <AboutSection />
    <CasesSection />
    <FAQSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
