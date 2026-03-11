import { motion } from "framer-motion";
import { 
  Search, 
  MousePointerClick, 
  PenTool, 
  CheckCircle2, 
  Repeat, 
  CodeXml, 
  Layers3,
  ArrowRight 
} from "lucide-react";

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
    // CONFIGURACIÓN INDEPENDIENTE DE ENLACE
    href: "/servicios/seo-tecnico",
    linkText: "Ver estrategia SEO"
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
    href: "/servicios/ppc-paid-search",
    linkText: "Escalar mis campañas"
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
    href: "/servicios/content-marketing",
    linkText: "Solicitar Plan de Contenidos"
  },
  {
    icon: Repeat,
    title: "Automatizaciones",
    benefit: "Eficiencia operativa sin fricciones",
    desc: "Conectamos tus herramientas para eliminar tareas manuales y dejar que tu equipo se enfoque en lo que importa.",
    features: [
      "Workflows personalizados (Zapier, Make, n8n)",
      "Sincronización de datos entre CRM y Marketing",
      "Automatización de reporting y dashboards",
    ],
    href: "/servicios/automatizaciones",
    linkText: "Optimizar mis procesos"
  },
  {
    icon: CodeXml,
    title: "Desarrollo Web",
    benefit: "Tu mejor activo de ventas 24/7",
    desc: "Diseñamos y desarrollamos sitios web de alto rendimiento enfocados en la experiencia de usuario y la conversión.",
    features: [
      "Desarrollo con Next.js y Tailwind CSS",
      "Optimización extrema de Core Web Vitals",
      "Diseño UI/UX orientado a producto SaaS",
    ],
    href: "/servicios/desarrollo-web",
    linkText: "Mejorar mi rendimiento web"
  },
  {
    icon: Layers3,
    title: "Jira Service Management",
    benefit: "Escalabilidad en soporte y procesos",
    desc: "Configuramos tu centro de servicios para gestionar solicitudes internas y externas con estándares profesionales.",
    features: [
      "Configuración de portales de autoservicio",
      "Gestión de colas, SLAs y automatizaciones",
      "Integración con Confluence y Opsgenie",
    ],
    href: "/servicios/jira-service",
    linkText: "Configurar mi Service Desk"
  },
];

const ServicesSection = () => (
  <section id="servicios" className="section-padding bg-[#0a2b49] relative overflow-hidden scroll-mt-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-medium text-[#ebf2f7] tracking-widest uppercase opacity-80">
          Servicios
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 text-[#ebf2f7]">
          Todo lo que necesitas para <span className="text-[#ff8c00]">dominar los rankings</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-[#ebf2f7]/5 p-8 group transition-all duration-500 flex flex-col rounded-2xl border border-[#ebf2f7]/10 hover:bg-[#0a2b49] hover:border-white/80 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            <div className="w-12 h-12 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
              <s.icon className="h-8 w-8 text-[#ebf2f7]" />
            </div>

            <div className="text-[10px] font-bold text-[#ebf2f7]/60 uppercase tracking-widest mb-2 group-hover:text-[#ebf2f7]/70">
              {s.benefit}
            </div>
            
            <h3 className="text-xl text-[#ff8c00] font-heading font-bold mb-3 transition-colors">
              {s.title}
            </h3>
            
            <p className="text-[#ebf2f7]/80 mb-6 leading-relaxed text-sm group-hover:text-[#ebf2f7] transition-colors">
              {s.desc}
            </p>
            
            <ul className="space-y-3 mb-8">
              {s.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-[13px] text-[#ebf2f7]/90 group-hover:text-[#ebf2f7] transition-colors">
                  <CheckCircle2 className="h-4 w-4 text-[#ff8c00] mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            {/* ENLACE CONFIGURABLE E INDEPENDIENTE POR TARJETA */}
            <div className="mt-auto pt-4 flex justify-end">
              <a 
                href={s.href}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#ff8c00] hover:text-[#ebf2f7] transition-all duration-300 group/link"
              >
                {s.linkText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
