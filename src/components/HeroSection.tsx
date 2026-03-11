import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  // Función para scroll suave a Servicios
  const scrollToServices = () => {
    document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" });
  };

  // Función para scroll suave a Casos de Éxito
  const scrollToCases = () => {
    document.querySelector("#casos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image con overlay marino */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-[#0a2b49]/90 bg-gradient-to-t from-[#0a2b49] via-[#0a2b49]/80 to-transparent" />
      </div>

      <div className="container relative z-10 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff8c00]/30 bg-[#ff8c00]/5 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#ff8c00] animate-pulse" />
            <span className="text-xs font-medium text-[#ebf2f7]">Agencia de Marketing en Asturias</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6 text-[#ebf2f7]">
            Domina Google.{" "}
            <span className="text-[#ff8c00]">Escala tu Saas</span>{" "}
            con tráfico orgánico que convierte.
          </h1>

          <p className="text-lg md:text-xl text-[#ebf2f7]/70 max-w-2xl mb-10 leading-relaxed">
            Ayudamos a las empresas a multiplicar su ventas con estrategias SEO basadas en datos, PPC de alto rendimiento y contenido que posiciona.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* BOTÓN BLANCO CON RESPLANDOR */}
            <Button 
              size="lg" 
              onClick={scrollToServices} 
              className="group text-base px-8 bg-white text-[#0a2b49] hover:bg-[#ebf2f7] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 border-none"
            >
              Nuestros Servicios
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* BOTÓN OUTLINE QUE CAMBIA A NARANJA */}
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToCases}
              className="text-base px-8 border-[#ebf2f7]/30 text-[#ebf2f7] hover:bg-[#ff8c00] hover:text-[#0a2b49] hover:border-[#ff8c00] transition-all duration-300 shadow-lg"
            >
              Ver Casos de Éxito
            </Button>
          </div>

          {/* Stats con estilo Neon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-[#ebf2f7]/10"
          >
            {[
              { value: "+250%", label: "Tráfico orgánico promedio" },
              { value: "3x", label: "ROI en 6 meses" },
              { value: "50+", label: "SaaS escalados" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-heading font-bold text-[#ff8c00] drop-shadow-[0_0_8px_rgba(255,140,0,0.3)]">
                  {stat.value}
                </div>
                <div className="text-sm text-[#ebf2f7]/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
