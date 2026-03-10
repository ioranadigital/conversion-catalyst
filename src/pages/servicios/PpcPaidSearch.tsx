import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { MousePointerClick } from "lucide-react";

const data = {
  icon: MousePointerClick,
  title: "PPC & Paid Search",
  subtitle: "Campañas de pago que generan leads cualificados desde el día 1. Maximizamos tu ROAS con gestión experta en Google Ads y Meta Ads.",
  includes: [
    "Estrategia y configuración de Google Ads (Search, Display, YouTube)",
    "Campañas en Meta Ads (Facebook e Instagram) con segmentación avanzada",
    "Remarketing y audiencias lookalike para maximizar conversiones",
    "Optimización continua de pujas, CPA y ROAS",
    "A/B testing de creatividades, copies y landing pages",
    "Reporting semanal con dashboards en tiempo real",
  ],
  whyMatters: {
    title: "¿Por qué invertir en PPC?",
    desc: "Mientras el SEO construye tráfico a largo plazo, el PPC te da resultados inmediatos. Una campaña bien optimizada puede generar leads cualificados desde el primer día con un coste de adquisición predecible. El PPC complementa perfectamente tu estrategia SEO: captas demanda mientras construyes autoridad orgánica. Además, la data de campañas paid es invaluable para informar tu estrategia de contenido y SEO.",
  },
  process: [
    { step: "1", title: "Análisis y Estrategia", desc: "Estudiamos tu mercado, competidores y buyer persona para diseñar una estructura de campañas que maximice el ROI." },
    { step: "2", title: "Configuración de Campañas", desc: "Creamos cuentas, campañas y grupos de anuncios con keyword research, copies persuasivos y extensiones optimizadas." },
    { step: "3", title: "Landing Pages", desc: "Diseñamos o optimizamos landing pages específicas para cada campaña, maximizando la tasa de conversión." },
    { step: "4", title: "Optimización Continua", desc: "Ajustamos pujas, negativizamos keywords, testamos creatividades y escalamos lo que funciona en ciclos semanales." },
    { step: "5", title: "Reporting y Escalado", desc: "Reportes semanales con métricas clave. Identificamos oportunidades de escalar presupuesto en canales rentables." },
  ],
  metrics: [
    { value: "4.2x", label: "ROAS promedio" },
    { value: "-45%", label: "Reducción CPA" },
    { value: "+180%", label: "Leads cualificados" },
    { value: "98%", label: "Clientes satisfechos" },
  ],
  faqs: [
    { q: "¿Cuánto presupuesto necesito para empezar con PPC?", a: "Recomendamos un mínimo de 1.500€/mes en inversión publicitaria para obtener datos suficientes que permitan optimizar. El presupuesto óptimo depende de tu sector y objetivos." },
    { q: "¿Google Ads o Meta Ads? ¿Cuál es mejor?", a: "Depende de tu negocio. Google Ads captura demanda existente (usuarios buscando activamente). Meta Ads genera demanda y es excelente para awareness y remarketing. Generalmente recomendamos una combinación." },
    { q: "¿Cuánto tiempo hasta ver resultados?", a: "Los primeros resultados se ven en 1-2 semanas. Sin embargo, la optimización real comienza tras 4-6 semanas cuando tenemos suficientes datos para tomar decisiones basadas en evidencia." },
    { q: "¿Gestionáis también las creatividades?", a: "Sí, nuestro equipo crea copies, diseños de anuncios y landing pages. También trabajamos con tu equipo de diseño si lo prefieres." },
  ],
};

const PpcPaidSearch = () => (
  <PageLayout title="PPC & Paid Search | IORANA Digital" description="Gestión profesional de Google Ads y Meta Ads. Campañas de PPC orientadas a maximizar tu ROAS y generar leads cualificados.">
    <ServicePageTemplate data={data} />
  </PageLayout>
);

export default PpcPaidSearch;
