import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Search } from "lucide-react";

const data = {
  icon: Search,
  title: "SEO Técnico & On-Page",
  subtitle: "Posiciona tu sitio web donde tu cliente ideal busca soluciones. Optimizamos cada aspecto técnico y de contenido para que Google te premie con tráfico cualificado.",
  includes: [
    "Auditoría técnica completa con +200 checkpoints",
    "Optimización de Core Web Vitals (LCP, FID, CLS)",
    "Arquitectura web y estructura de URLs optimizada",
    "Optimización on-page de páginas clave y landing pages",
    "Implementación de Schema Markup y datos estructurados",
    "Estrategia de indexación y gestión de crawl budget",
  ],
  whyMatters: {
    title: "¿Por qué importa el SEO técnico?",
    desc: "El 68% de las experiencias online comienzan con un motor de búsqueda. Si tu web no está técnicamente optimizada, Google simplemente no la mostrará a tus potenciales clientes. Un SEO técnico sólido es la base sobre la que se construye todo el crecimiento orgánico: sin él, el mejor contenido del mundo es invisible. Además, Core Web Vitals es ahora un factor de ranking directo — la velocidad y la experiencia de usuario ya no son opcionales.",
  },
  process: [
    { step: "1", title: "Auditoría Inicial", desc: "Análisis exhaustivo de tu sitio: rastreo, indexación, velocidad, mobile-first, errores técnicos y oportunidades quick-win." },
    { step: "2", title: "Roadmap Priorizado", desc: "Creamos un plan de acción con impacto estimado y esfuerzo necesario para cada mejora, priorizando las acciones de mayor ROI." },
    { step: "3", title: "Implementación Técnica", desc: "Ejecutamos las optimizaciones: velocidad, schema markup, canonical tags, hreflang, estructura de datos y corrección de errores." },
    { step: "4", title: "Optimización On-Page", desc: "Keyword mapping, optimización de títulos, metas, headings, internal linking y contenido de páginas estratégicas." },
    { step: "5", title: "Monitorización Continua", desc: "Seguimiento semanal de posiciones, tráfico orgánico, errores de indexación y Core Web Vitals con reportes automatizados." },
  ],
  metrics: [
    { value: "+250%", label: "Tráfico orgánico" },
    { value: "95+", label: "PageSpeed Score" },
    { value: "3x", label: "Páginas indexadas" },
    { value: "-60%", label: "Errores técnicos" },
  ],
  faqs: [
    { q: "¿Cuánto tarda en verse resultados con SEO técnico?", a: "Los quick wins técnicos (velocidad, errores de indexación) pueden mostrar mejoras en 2-4 semanas. Los resultados en rankings suelen verse entre 2-4 meses, dependiendo de la competencia y el estado actual del sitio." },
    { q: "¿Necesito cambiar mi CMS o tecnología web?", a: "No necesariamente. Trabajamos con cualquier CMS o stack tecnológico. Sin embargo, si detectamos limitaciones graves, te asesoraremos sobre las mejores opciones." },
    { q: "¿Cómo afecta Core Web Vitals al posicionamiento?", a: "Google usa Core Web Vitals como factor de ranking desde 2021. Un sitio con buen rendimiento tiene ventaja sobre competidores más lentos, especialmente en mobile." },
    { q: "¿Qué diferencia hay entre SEO técnico y SEO on-page?", a: "El SEO técnico se centra en la infraestructura del sitio (velocidad, rastreo, indexación). El SEO on-page optimiza el contenido visible (títulos, textos, keywords). Ambos son complementarios y necesarios." },
  ],
};

const SeoTecnico = () => (
  <PageLayout title="SEO Técnico & On-Page | IORANA Digital" description="Servicios de SEO técnico y on-page para empresas. Auditorías, Core Web Vitals, schema markup y optimización completa.">
    <ServicePageTemplate data={data} />
  </PageLayout>
);

export default SeoTecnico;
