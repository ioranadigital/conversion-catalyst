import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Rocket } from "lucide-react";

const data = {
  icon: Rocket,
  title: "Todo para Tu Negocio",
  subtitle: "Una estrategia digital 360° con un único partner. Integramos todos los canales y herramientas para escalar tu negocio de forma consistente y medible.",
  includes: [
    "Estrategia digital 360°",
    "SEO + PPC + Contenidos + Redes Sociales",
    "Automatización de marketing y CRM",
    "Diseño web y landing pages",
    "Imagen de marca completa",
    "Reporting mensual y consultoría estratégica",
  ],
  whyMatters: {
    title: "¿Por qué una estrategia integral?",
    desc: "",
    points: [
      "Una estrategia integrada genera 3x más leads que canales aislados",
      "Las empresas con marketing automatizado aumentan su revenue un 10% en 6 meses",
      "Tener un solo partner digital elimina fricciones y acelera resultados",
    ],
  },
  process: [
    { step: "1", title: "Auditoría", desc: "Analizamos tu presencia digital actual, competidores y oportunidades de mercado para definir el punto de partida." },
    { step: "2", title: "Estrategia", desc: "Diseñamos un plan integral con objetivos, KPIs, canales y presupuesto alineados con tus metas de negocio." },
    { step: "3", title: "Implementación", desc: "Ejecutamos la estrategia de forma coordinada en todos los canales, asegurando coherencia y sinergia." },
    { step: "4", title: "Optimización", desc: "Analizamos datos en tiempo real para optimizar cada canal y maximizar el retorno de inversión global." },
    { step: "5", title: "Escala", desc: "Identificamos los canales más rentables y escalamos la inversión para acelerar el crecimiento." },
  ],
  metrics: [
    { value: "3x", label: "ROI global" },
    { value: "+200%", label: "Leads generados" },
    { value: "+150%", label: "Crecimiento tráfico" },
    { value: "-35%", label: "Coste por adquisición" },
  ],
  faqs: [
    { q: "¿Qué incluye exactamente el servicio 360°?", a: "Incluye estrategia digital, SEO, PPC, content marketing, redes sociales, automatizaciones, diseño web, branding y reporting mensual con consultoría estratégica." },
    { q: "¿Hay permanencia o compromiso mínimo?", a: "Recomendamos un compromiso mínimo de 6 meses para ver resultados sólidos, pero no exigimos permanencia. Nuestros clientes se quedan por resultados, no por contratos." },
    { q: "¿Cómo se reportan los resultados?", a: "Recibes un dashboard en tiempo real con las métricas clave y un informe mensual detallado con análisis, insights y recomendaciones estratégicas." },
    { q: "¿Puedo empezar con algunos servicios y escalar después?", a: "Absolutamente. Podemos comenzar con los servicios más prioritarios e ir incorporando canales conforme vemos resultados y tu presupuesto lo permite." },
  ],
};

const TodoParaTuNegocio = () => (
  <PageLayout title="Todo para Tu Negocio | IORANA Digital" description="Estrategia digital 360° para empresas. SEO, PPC, contenidos, automatizaciones, web y branding con un solo partner digital.">
    <ServicePageTemplate data={data} />
  </PageLayout>
);

export default TodoParaTuNegocio;
