import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    document.title = "Página no encontrada | Iorana Digital";
    
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("name", "robots", "noindex, nofollow");
    setMeta("name", "description", "La página que buscas no existe. Vuelve al inicio o explora nuestros servicios de marketing digital.");
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center relative overflow-hidden pt-20">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2b49] to-background opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ff8c00]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ebf2f7]/5 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-heading font-black leading-none select-none"
              style={{
                background: "linear-gradient(135deg, #ff8c00 0%, #f97316 40%, #ebf2f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "none",
                filter: "drop-shadow(0 0 60px rgba(255, 140, 0, 0.15))",
              }}
            >
              404
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#ebf2f7] mb-4">
              Página no encontrada
            </h2>
            <p className="text-[#ebf2f7]/60 text-lg max-w-md mx-auto mb-10">
              Parece que esta página decidió hacer SEO en otra dimensión
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-[#ebf2f7] text-[#0a2b49] font-bold hover:bg-[#ebf2f7]/90">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#ebf2f7]/20 text-[#ebf2f7] hover:bg-[#ebf2f7]/10">
              <Link to="/#servicios">
                Ver nuestros servicios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
