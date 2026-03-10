import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    company: "StreamFlow",
    industry: "SaaS de Productividad",
    context: "Startup B2B con producto sólido pero sin presencia orgánica. Dependían 100% de paid ads para adquirir clientes.",
    challenge: "CAC elevado ($180) y cero tráfico orgánico. Necesitaban un canal sostenible de adquisición.",
    solution: "Implementamos una estrategia de topic clusters con +60 artículos optimizados, rediseño de la arquitectura web y link building estratégico.",
    result: "+320% Tráfico Orgánico",
    resultSub: "en 5 meses · CAC reducido a $45",
  },
  {
    company: "DataPulse",
    industry: "SaaS de Analytics",
    context: "Plataforma de analytics compitiendo contra incumbentes con dominios de alta autoridad.",
    challenge: "Ranking en posiciones 30+ para sus keywords principales. Tasa de conversión orgánica del 0.3%.",
    solution: "Auditoría técnica profunda, optimización de Core Web Vitals, estrategia de contenido comparativo y PPC complementario.",
    result: "+540% Conversiones",
    resultSub: "en 6 meses · 15 keywords en top 3",
  },
  {
    company: "HireBot",
    industry: "SaaS de HR Tech",
    context: "Herramienta de recruiting IA que necesitaba penetrar un mercado saturado por competidores bien posicionados.",
    challenge: "Sin blog, sin estrategia de contenido y con un sitio web que no cumplía estándares técnicos de Google.",
    solution: "Reconstrucción de arquitectura SEO, creación de hub de contenido educativo y campaña de digital PR.",
    result: "De 0 a 12K visitas/mes",
    resultSub: "en 4 meses · 8x ROI en contenido",
  },
];
const CasesSection = () => {
  return (
    <section id="casos" className="section-padding bg-[#0a2b49] relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >          <span className="text-sm font-medium text-[#ff8c00] tracking-widest uppercase">
            Casos de Éxito
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 text-[#ebf2f7]">
            Resultados que hablan <span className="text-[#ebf2f7]/60">por sí solos</span>
          </h2>
        </motion.div>

<div className="grid lg:grid-cols-3 gap-6">
  {cases.map((c, i) => (
    <motion.div
      key={c.company}
      className="flex flex-col rounded-3xl overflow-hidden border border-[#ebf2f7]/10 bg-[#0a2b49] shadow-2xl group transition-all duration-500"
    >
      <div className="bg-[#ebf2f7]/5 p-8 border-b border-[#ebf2f7]/10">
        <div className="text-2xl font-bold text-[#ebf2f7] mb-1">{c.result}</div>
        <div className="text-xs text-[#ebf2f7]/60 tracking-wide uppercase">{c.resultSub}</div>
      </div>


      <div className="p-8 flex-grow space-y-6 bg-[#0a2b49]">
        {/* Info del Cliente */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#ebf2f7]/10 flex items-center justify-center text-[#ebf2f7] font-bold border border-[#ebf2f7]/10">
            {c.company[0]}
          </div>
          <div>
            <div className="font-bold text-[#ebf2f7]">{c.company}</div>
            <div className="text-[10px] text-[#ebf2f7]/50 uppercase tracking-widest">{c.industry}</div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#ebf2f7] font-bold mb-1 opacity-90">
              Contexto
            </div>
            <p className="text-sm text-[#ebf2f7]/70 leading-relaxed">
              {c.contexto}
            </p>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#ebf2f7] font-bold mb-1 opacity-90">
              Desafío
            </div>
            <p className="text-sm text-[#ebf2f7]/70 leading-relaxed">
              {c.desafio}
            </p>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#ebf2f7] font-bold mb-1 opacity-90">
              Solución
            </div>
            <p className="text-sm text-[#ebf2f7]/70 leading-relaxed">
              {c.solucion}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
};

export default CasesSection;
