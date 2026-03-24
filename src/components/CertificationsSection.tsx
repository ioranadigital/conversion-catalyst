import { motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const certifications = [
  { name: "Google Partner", icon: Award },
  { name: "Meta Business Partner", icon: Award },
  { name: "HubSpot Certified", icon: Award },
  { name: "Semrush Academy", icon: Award },
  { name: "Google Analytics Certified", icon: Award },
];

const CertificationsSection = () => {
  const [current, setCurrent] = useState(0);
  const total = certifications.length;

  const next = useCallback(() => setCurrent((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + total) % total), [total]);

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [next]);

  // Get visible indices with infinite loop
  const getVisibleIndices = (count: number) => {
    const indices: number[] = [];
    for (let i = 0; i < count; i++) {
      indices.push((current + i) % total);
    }
    return indices;
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#ebf2f7] tracking-widest uppercase opacity-80">
            Confianza
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 text-[#ebf2f7]">
            Certificaciones & <span className="text-[#ff8c00]">Partnerships</span>
          </h2>
          <p className="text-[#ebf2f7]/60 mt-4 max-w-lg mx-auto">
            Respaldados por las principales plataformas digitales
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 rounded-full bg-[#0a2b49] border border-[#ebf2f7]/20 flex items-center justify-center text-[#ebf2f7] hover:border-[#ff8c00] hover:text-[#ff8c00] transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-10 h-10 rounded-full bg-[#0a2b49] border border-[#ebf2f7]/20 flex items-center justify-center text-[#ebf2f7] hover:border-[#ff8c00] hover:text-[#ff8c00] transition-all"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Cards grid - responsive */}
          <div className="mx-8">
            {/* Mobile: 1-2 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-4">
              {getVisibleIndices(2).map((idx, i) => (
                <CertCard key={`m-${idx}-${i}`} cert={certifications[idx]} />
              ))}
            </div>
            {/* Tablet: 3 cards */}
            <div className="hidden md:grid lg:hidden grid-cols-3 gap-4">
              {getVisibleIndices(3).map((idx, i) => (
                <CertCard key={`t-${idx}-${i}`} cert={certifications[idx]} />
              ))}
            </div>
            {/* Desktop: 5 cards */}
            <div className="hidden lg:grid grid-cols-5 gap-4">
              {getVisibleIndices(5).map((idx, i) => (
                <CertCard key={`d-${idx}-${i}`} cert={certifications[idx]} />
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {certifications.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "bg-[#ff8c00] w-6" : "bg-[#ebf2f7]/30 hover:bg-[#ebf2f7]/50"
                }`}
                aria-label={`Ir a certificación ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CertCard = ({ cert }: { cert: { name: string; icon: typeof Award } }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    className="flex flex-col items-center justify-center p-8 rounded-2xl border border-[#ebf2f7]/10 bg-[#0a2b49]/60 backdrop-blur-sm hover:border-[#ff8c00]/40 transition-all duration-300 min-h-[160px]"
  >
    <div className="w-16 h-16 rounded-xl bg-[#ebf2f7]/10 border border-[#ebf2f7]/15 flex items-center justify-center mb-4">
      <cert.icon className="h-8 w-8 text-[#ff8c00]" />
    </div>
    <span className="text-sm font-medium text-[#ebf2f7]/80 text-center">{cert.name}</span>
  </motion.div>
);

export default CertificationsSection;
