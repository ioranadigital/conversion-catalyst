import { motion } from "framer-motion";
import { Search, MousePointerClick, PenTool, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Técnico & On-Page",
    benefit: "Posiciona donde tu ICP busca soluciones",
    desc: "Optimizamos cada rincón de tu sitio para que Google te encuentre primero y tus visitantes conviertan más.",
    features: [
      "Auditoría técnica completa y roadmap de mejoras",
      "Keyword research con intent mapping para SaaS",
      "Optimización de landing pages y arquitectura web",
    ],
  },
  {
    icon: MousePointerClick,
    title: "PPC & Paid Search",
    benefit: "Tráfico de alta intención desde el día 1",
    desc: "Campañas en Google Ads diseñadas para captar leads cualificados mientras tu SEO crece orgánicamente.",
    features: [
      "Campañas de Search, Display y YouTube Ads",
      "Optimización de CPA y ROAS en tiempo real",
      "A/B testing de copies y landing pages",
    ],
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    benefit: "Contenido que educa, posiciona y vende",
    desc: "Creamos contenido estratégico que atrae a tu buyer persona y lo guía a través de tu funnel de conversión.",
    features: [
      "Estrategia de contenido basada en topic clusters",
      "Artículos, guías y whitepapers optimizados",
      "Link building con outreach personalizado",
    ],
  },

 {
    icon: Search,
    title: "SEO Técnico & On-Page",
    benefit: "Posiciona donde tu ICP busca soluciones",
    desc: "Optimizamos cada rincón de tu sitio para que Google te encuentre primero y tus visitantes conviertan más.",
    features: [
      "Auditoría técnica completa y roadmap de mejoras",
      "Keyword research con intent mapping para SaaS",
      "Optimización de landing pages y arquitectura web",
    ],
  },
  {
    icon: MousePointerClick,
    title: "PPC & Paid Search",
    benefit: "Tráfico de alta intención desde el día 1",
    desc: "Campañas en Google Ads diseñadas para captar leads cualificados mientras tu SEO crece orgánicamente.",
    features: [
      "Campañas de Search, Display y YouTube Ads",
      "Optimización de CPA y ROAS en tiempo real",
      "A/B testing de copies y landing pages",
    ],
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    benefit: "Contenido que educa, posiciona y vende",
    desc: "Creamos contenido estratégico que atrae a tu buyer persona y lo guía a través de tu funnel de conversión.",
    features: [
      "Estrategia de contenido basada en topic clusters",
      "Artículos, guías y whitepapers optimizados",
      "Link building con outreach personalizado",
    ],
  },

  
];

const ServicesSection = () => (
  <section id="servicios" className="section-padding bg-[#24496b] relative overflow-hidden">
     <div className="container">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >

        <span className="text-sm font-medium text-primary tracking-widest uppercase">Servicios</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 text-[#ebf2f7]"> Todo lo que necesitas para<span className="gradient-text">dominar los rankings</span></h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            // Fondo tarjetas y hover
            className="bg-white/10 backdrop-blur-md p-8 group hover:bg-[#24496b] hover:border-white/40 hover:shadow-[0_0_30px_rgba(68,109,146,0.3)] transition-all duration-500 flex flex-col rounded-2xl border border-white/10"
          >
            
            {/* color Logo */}
            <div className="w-12 h-12 rounded-lg bg-[#ebf2f7]/10 border border-[#ebf2f7]/20 flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(235,242,247,0.1)]">
              <s.icon className="h-6 w-6 text-[#ebf2f7]" /> {/* Dcolor icocno */}
            </div>
                      
            <div className="text-xs font-semibold text-[#ebf2f7]/70 uppercase tracking-wider mb-2">{s.benefit}</div>
            <h3 className="text-xl text-[#f97316] font-heading font-semibold mb-3">{s.title}</h3>
            <p className="text-[#ebf2f7]/80 mb-6 leading-relaxed">{s.desc}</p>
            <ul className="space-y-3 mt-auto">
              {s.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-[#ebf2f7]/90">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
