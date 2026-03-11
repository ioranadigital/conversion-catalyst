import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Repeat } from "lucide-react";

const data = {
  icon: Repeat,
  title: "Automatizaciones",
  subtitle: "Elimina tareas manuales y escala tus operaciones de marketing y ventas. Conectamos tus herramientas para que tu equipo se enfoque en lo que realmente importa.",
  includes: [
    "Automatización de flujos de marketing (email sequences, nurturing)",
    "Integración y configuración de CRM (HubSpot, Salesforce, Pipedrive)",
    "Workflows personalizados con Make, Zapier o n8n",
    "Automatización de reporting y dashboards",
    "Sincronización de datos entre plataformas",
    "Chatbots y respuestas automáticas inteligentes",
  ],
  whyMatters: {
    title: "¿Por qué automatizar?",
    desc: "",
    points: [
      "Las empresas que automatizan experimentan un aumento del 451% en leads cualificados",
      "Elimina errores humanos y garantiza seguimiento consistente de cada lead",
      "Un workflow bien diseñado trabaja 24/7, incluso cuando tu equipo descansa",
    ],
  },
  process: [
    { step: "1", title: "Auditoría de Procesos", desc: "Mapeamos todos tus procesos actuales de marketing y ventas para identificar cuellos de botella y oportunidades de automatización." },
    { step: "2", title: "Diseño de Workflows", desc: "Diseñamos los flujos automatizados con lógica condicional, triggers y acciones alineados con tu customer journey." },
    { step: "3", title: "Integración de Herramientas", desc: "Conectamos tu CRM, email marketing, analytics y todas las herramientas necesarias en un ecosistema unificado." },
    { step: "4", title: "Implementación y Testing", desc: "Construimos cada automatización, la testamos exhaustivamente y la ponemos en producción con monitorización activa." },
    { step: "5", title: "Optimización Continua", desc: "Analizamos el rendimiento de cada workflow y lo optimizamos para mejorar tasas de conversión y eficiencia operativa." },
  ],
  metrics: [
    { value: "80%", label: "Menos tareas manuales" },
    { value: "+451%", label: "Leads cualificados" },
    { value: "24/7", label: "Operación continua" },
    { value: "15h", label: "Ahorro semanal" },
  ],
  faqs: [
    { q: "¿Con qué herramientas trabajáis?", a: "Trabajamos con Make (Integromat), Zapier, n8n, HubSpot, ActiveCampaign, Mailchimp, Salesforce y prácticamente cualquier herramienta que tenga API." },
    { q: "¿Necesito cambiar mi CRM actual?", a: "No necesariamente. Nos adaptamos a tu stack actual. Si detectamos que tu CRM actual tiene limitaciones, te asesoraremos sobre alternativas." },
    { q: "¿Cuánto tiempo lleva implementar las automatizaciones?", a: "Depende de la complejidad. Automatizaciones simples pueden estar listas en 1-2 semanas. Proyectos más complejos con múltiples integraciones pueden llevar 4-8 semanas." },
    { q: "¿Qué pasa si algo falla en la automatización?", a: "Configuramos alertas y monitorizamos cada workflow. Si algo falla, lo detectamos rápidamente y lo solucionamos. También incluimos lógica de error handling para evitar pérdida de datos." },
  ],
};

const Automatizaciones = () => (
  <PageLayout title="Automatizaciones de Marketing | IORANA Digital" description="Automatización de marketing y ventas. Workflows con Make, Zapier, integración CRM y email flows para escalar tu negocio.">
    <ServicePageTemplate data={data} />
  </PageLayout>
);

export default Automatizaciones;
