import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Award } from "lucide-react";

const data = {
  icon: Award,
  title: "Kit Digital",
  subtitle: "Digitaliza tu negocio con ayudas de hasta 12.000€ del Gobierno de España. Como Agente Digitalizador homologado, gestionamos todo el proceso por ti.",
  includes: [
    "Gestión de redes sociales y comunidad online",
    "Diseño y desarrollo de sitio web con SEO básico",
    "Presencia en internet y posicionamiento local",
    "Comercio electrónico",
    "Publicidad digital segmentada",
    "Elegibilidad para ayudas del Gobierno de España (hasta 12.000€)",
  ],
  whyMatters: {
    title: "¿Por qué solicitar el Kit Digital?",
    desc: "",
    points: [
      "Subvención oficial del programa Kit Digital para pymes y autónomos",
      "Sin coste inicial: la ayuda cubre el 100% del servicio",
      "Iorana Digital es Agente Digitalizador homologado",
    ],
  },
  process: [
    { step: "1", title: "Diagnóstico", desc: "Evaluamos tu nivel de madurez digital y determinamos qué soluciones del Kit Digital se adaptan mejor a tu negocio." },
    { step: "2", title: "Solicitud de Bono", desc: "Te guiamos paso a paso en la solicitud del bono digital en Acelera Pyme, gestionando toda la documentación necesaria." },
    { step: "3", title: "Selección de Soluciones", desc: "Definimos juntos qué categorías de solución implementar para maximizar el impacto en tu negocio." },
    { step: "4", title: "Implementación", desc: "Desarrollamos e implementamos las soluciones seleccionadas con los estándares de calidad exigidos por el programa." },
    { step: "5", title: "Seguimiento", desc: "Monitorizamos el rendimiento y te acompañamos durante todo el periodo de prestación del servicio." },
  ],
  metrics: [
    { value: "500+", label: "Empresas beneficiadas" },
    { value: "12.000€", label: "Ahorro máximo" },
    { value: "100%", label: "Subvencionado" },
    { value: "<30 días", label: "Tiempo de implementación" },
  ],
  faqs: [
    { q: "¿Quién puede solicitar el Kit Digital?", a: "Pueden solicitarlo pymes (de 0 a 49 empleados) y autónomos con domicilio fiscal en España, que estén dados de alta y cumplan los requisitos de antigüedad mínima." },
    { q: "¿Cuánto tarda el proceso de solicitud?", a: "La solicitud del bono puede resolverse en 1-2 semanas. Una vez aprobado, comenzamos la implementación inmediatamente." },
    { q: "¿Qué cubre exactamente la ayuda?", a: "Dependiendo del segmento de tu empresa (por número de empleados), la ayuda puede cubrir desde 2.000€ hasta 12.000€ en soluciones de digitalización como web, SEO, redes sociales, e-commerce y publicidad digital." },
    { q: "¿Hay algún coste para mi empresa?", a: "No. La subvención del Kit Digital cubre el 100% del coste de las soluciones contratadas dentro de los importes máximos establecidos por categoría." },
  ],
};

const KitDigital = () => (
  <PageLayout
    title="Kit Digital – Agente Digitalizador | Iorana Digital"
    description="Agente Digitalizador homologado del Kit Digital en Asturias. Digitaliza tu pyme o negocio con ayudas de hasta 12.000€ del Gobierno de España."
    canonical="https://iorana.digital/soluciones/kit-digital"
  >
    <ServicePageTemplate data={data} />
  </PageLayout>
);

export default KitDigital;
