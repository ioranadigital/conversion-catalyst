import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CasesSection from "@/components/CasesSection";
import CertificationsSection from "@/components/CertificationsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Iorana Digital | Agencia de Marketing Digital en Asturias";

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const desc = "Agencia de marketing digital en Asturias. Servicios de SEO, PPC, contenidos, automatizaciones, desarrollo web e imagen de marca para hacer crecer tu negocio.";
    setMeta("name", "description", desc);
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:title", "Iorana Digital | Agencia de Marketing Digital en Asturias");
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", "https://iorana.digital/");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:image", "https://iorana.digital/og-image.jpg");
    setMeta("property", "og:locale", "es_ES");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", "Iorana Digital | Agencia de Marketing Digital en Asturias");
    setMeta("name", "twitter:description", desc);
    setMeta("name", "twitter:image", "https://iorana.digital/og-image.jpg");

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", "https://iorana.digital/");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <USPSection />
      <ServicesSection />
      <AboutSection />
      <CasesSection />
      <CertificationsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
