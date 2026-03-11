import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { LayoutTemplate } from "lucide-react";

const data = {
  icon: LayoutTemplate,
  title: "Diseño de Landings",
  subtitle: "Landing pages diseñadas para convertir visitantes en clientes. Cada pixel está pensado para guiar al usuario hacia la acción que genera resultados.",
  includes: [
    "Diseño UX/UI orientado a conversión",
    "Copywriting persuasivo",
    "Integración con CRM y herramientas de marketing",
    "Optimización para velocidad y mobile",
    "Tests A/B y seguimiento de conversiones",
    "Pixel de seguimiento y analytics",
  ],
  whyMatters: {
    title: "¿Por qué importan las landing pages?",
    desc: "",
    points: [
      "Una landing page optimizada puede aumentar conversiones hasta un 300%",
      "El 48% de los marketers construyen una landing nueva para cada campaña",
      "Reducir el tiempo de carga 1 segundo aumenta conversiones en un 7%",
    ],
  },
  process: [
    { step: "1", title: "Briefing", desc: "Definimos objetivos, audiencia, propuesta de valor y los mensajes clave que debe comunicar la landing page." },
    { step: "2", title: "Wireframe", desc: "Creamos la estructura y jerarquía de contenido para maximizar el flujo de conversión." },
    { step: "3", title: "Diseño", desc: "Diseñamos la landing con UI/UX de alto impacto, copywriting persuasivo y elementos de prueba social." },
    { step: "4", title: "Desarrollo", desc: "Implementamos con tecnologías de alto rendimiento, optimización mobile-first y velocidad de carga sub-2 segundos." },
    { step: "5", title: "Lanzamiento", desc: "Configuramos tracking, analytics y pixel de conversión para medir resultados desde el día 1." },
    { step: "6", title: "Optimización", desc: "Tests A/B continuos, análisis de heatmaps y optimización iterativa para mejorar la tasa de conversión." },
  ],
  metrics: [
    { value: "+300%", label: "Tasa de conversión" },
    { value: "-40%", label: "Coste por lead" },
    { value: "<2s", label: "Velocidad de carga" },
    { value: "100%", label: "Mobile optimized" },
  ],
  faqs: [
    { q: "¿Cuánto tiempo lleva diseñar una landing page?", a: "Una landing page profesional puede estar lista en 2-3 semanas, incluyendo diseño, desarrollo, copywriting y configuración de analytics." },
    { q: "¿Cuántas revisiones se incluyen?", a: "Incluimos 3 rondas de revisión en la fase de diseño y 2 en la fase de desarrollo para asegurar un resultado perfecto." },
    { q: "¿Se puede integrar con mi CRM o herramienta de email?", a: "Sí, integramos con HubSpot, Mailchimp, ActiveCampaign, Salesforce y prácticamente cualquier plataforma que tenga API o webhooks." },
    { q: "¿Incluye copywriting?", a: "Sí, nuestro servicio incluye copywriting persuasivo orientado a conversión, basado en la propuesta de valor y los mensajes clave definidos en el briefing." },
  ],
};

const DisenoLandings = () => (
  <PageLayout title="Diseño de Landings | IORANA Digital" description="Diseño y desarrollo de landing pages de alta conversión. UX/UI, copywriting persuasivo, A/B testing y optimización de velocidad.">
    <ServicePageTemplate data={data} />
  </PageLayout>
);

export default DisenoLandings;
