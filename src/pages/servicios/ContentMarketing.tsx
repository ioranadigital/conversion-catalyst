import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { PenTool } from "lucide-react";

const data = {
  icon: PenTool,
  title: "Content Marketing",
  subtitle: "Contenido estratégico que educa, posiciona y convierte. Creamos un motor de contenido que atrae a tu buyer persona y lo guía por tu funnel.",
  includes: [
    "Estrategia de contenidos basada en topic clusters y buyer journey",
    "Creación de artículos de blog optimizados para SEO",
    "Copywriting persuasivo para landing pages y emails",
    "Diseño de funnel de contenido (TOFU, MOFU, BOFU)",
    "Creación de lead magnets: ebooks, guías, whitepapers",
    "Calendario editorial y gestión de publicaciones",
  ],
  whyMatters: {
    title: "¿Por qué importa el content marketing?",
    desc: "",
    points: [
      "El content marketing genera 3x más leads que el marketing tradicional con un coste 62% menor",
      "Las empresas con blog generan un 67% más de leads mensuales",
      "El contenido de calidad es una inversión que se compone con el tiempo",
    ],
  },
  process: [
    { step: "1", title: "Investigación y Estrategia", desc: "Analizamos tu ICP, competidores y keywords para definir pilares de contenido y topic clusters alineados con tus objetivos de negocio." },
    { step: "2", title: "Calendario Editorial", desc: "Creamos un calendario editorial con frecuencia, temas, formatos y canales de distribución definidos para los próximos 3-6 meses." },
    { step: "3", title: "Producción de Contenido", desc: "Nuestros redactores especializados crean contenido optimizado para SEO y conversión, revisado por editores y expertos del sector." },
    { step: "4", title: "Distribución y Promoción", desc: "Publicamos, distribuimos y promocionamos cada pieza de contenido para maximizar su alcance e impacto." },
    { step: "5", title: "Análisis y Optimización", desc: "Medimos el rendimiento de cada contenido y optimizamos la estrategia basándonos en datos reales de tráfico, engagement y conversiones." },
  ],
  metrics: [
    { value: "+320%", label: "Tráfico del blog" },
    { value: "3x", label: "Leads generados" },
    { value: "+85%", label: "Tiempo en página" },
    { value: "62%", label: "Menor coste/lead" },
  ],
  faqs: [
    { q: "¿Con qué frecuencia se publica contenido?", a: "Depende de tu estrategia y presupuesto. Generalmente recomendamos un mínimo de 4-8 artículos al mes para construir autoridad rápidamente." },
    { q: "¿Los contenidos están optimizados para SEO?", a: "Absolutamente. Cada pieza se crea con keyword research previo, optimización on-page completa y estructura de internal linking estratégica." },
    { q: "¿Puedo revisar el contenido antes de publicarlo?", a: "Sí, cada contenido pasa por un proceso de revisión donde puedes aportar feedback y solicitar ajustes antes de la publicación." },
    { q: "¿Creáis contenido para redes sociales también?", a: "Nos enfocamos en contenido estratégico (blog, guías, whitepapers). Sin embargo, podemos adaptar los contenidos principales para distribución en redes sociales." },
  ],
};

const ContentMarketing = () => (
  <PageLayout title="Content Marketing | IORANA Digital" description="Servicios de content marketing estratégico. Blog, copywriting SEO, lead magnets y estrategia de contenidos para empresas.">
    <ServicePageTemplate data={data} />
  </PageLayout>
);

export default ContentMarketing;
