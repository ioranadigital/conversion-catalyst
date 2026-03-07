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

const CasesSection = () => (
  <section id="casos" className="section-padding bg-secondary/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-medium text-primary tracking-widest uppercase">Casos de Éxito</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 text-[#ebf2f7]"> Resultados que hablan  <span className="gradient-text">por sí solos</span></h2>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <motion.div
            key={c.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card overflow-hidden group hover:neon-border transition-all duration-500 flex flex-col"
          >
            {/* Result badge */}
            <div className="bg-primary/10 px-6 py-4 border-b border-border">
              <div className="text-2xl font-heading font-bold neon-text">{c.result}</div>
              <div className="text-xs text-muted-foreground mt-1">{c.resultSub}</div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{c.company[0]}</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">{c.company}</div>
                  <div className="text-xs text-muted-foreground">{c.industry}</div>
                </div>
              </div>

              <div className="space-y-3 text-sm flex-1">
                <div>
                  <span className="text-primary font-semibold text-xs uppercase tracking-wider">Contexto</span>
                  <p className="text-muted-foreground mt-1">{c.context}</p>
                </div>
                <div>
                  <span className="text-primary font-semibold text-xs uppercase tracking-wider">Desafío</span>
                  <p className="text-muted-foreground mt-1">{c.challenge}</p>
                </div>
                <div>
                  <span className="text-primary font-semibold text-xs uppercase tracking-wider">Solución</span>
                  <p className="text-muted-foreground mt-1">{c.solution}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CasesSection;
