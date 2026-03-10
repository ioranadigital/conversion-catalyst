import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { CodeXml } from "lucide-react";

const data = {
  icon: CodeXml,
  title: "Desarrollo Web",
  subtitle: "Sitios web de alto rendimiento diseñados para convertir. Combinamos diseño UI/UX con ingeniería web para crear tu mejor activo de ventas.",
  includes: [
    "Diseño y desarrollo de landing pages de alta conversión",
    "Webs corporativas responsive y optimizadas",
    "Optimización de Conversión (CRO) basada en datos",
    "Desarrollo con tecnologías modernas (React, Next.js, Tailwind)",
    "Optimización de velocidad y Core Web Vitals",
    "Integración con CRM, analytics y herramientas de terceros",
  ],
  whyMatters: {
    title: "¿Por qué importa tu sitio web?",
    desc: "Tu sitio web es tu mejor vendedor — trabaja 24/7 y es la primera impresión para el 75% de tus potenciales clientes. Un sitio lento pierde el 53% de visitantes mobile. Un diseño poco profesional destruye la confianza en 0.05 segundos. Invertir en un sitio web de alto rendimiento no es un gasto: es el activo más rentable de tu estrategia digital. Cada mejora en velocidad y usabilidad se traduce directamente en más conversiones.",
  },
  process: [
    { step: "1", title: "Discovery y Estrategia", desc: "Entendemos tus objetivos, buyer persona y customer journey para definir la arquitectura de información y wireframes." },
    { step: "2", title: "Diseño UI/UX", desc: "Creamos prototipos de alta fidelidad con foco en usabilidad, conversión y coherencia visual con tu marca." },
    { step: "3", title: "Desarrollo Frontend", desc: "Implementamos el diseño con código limpio, optimizado y responsive usando las últimas tecnologías web." },
    { step: "4", title: "Optimización y Testing", desc: "Testing cross-browser, optimización de velocidad, accesibilidad y validación de rendimiento en PageSpeed." },
    { step: "5", title: "Lanzamiento y Soporte", desc: "Despliegue con monitorización, configuración de analytics y soporte técnico continuo post-lanzamiento." },
  ],
  metrics: [
    { value: "95+", label: "PageSpeed Score" },
    { value: "+120%", label: "Tasa de conversión" },
    { value: "<2s", label: "Tiempo de carga" },
    { value: "100%", label: "Mobile responsive" },
  ],
  faqs: [
    { q: "¿Cuánto cuesta desarrollar un sitio web?", a: "Depende del alcance. Una landing page puede costar desde 2.000€. Un sitio corporativo completo entre 5.000€ y 15.000€. Cada proyecto recibe un presupuesto personalizado." },
    { q: "¿Cuánto tiempo lleva el desarrollo?", a: "Una landing page puede estar lista en 2-3 semanas. Un sitio corporativo completo entre 6-10 semanas. Los plazos exactos dependen de la complejidad y el proceso de feedback." },
    { q: "¿Puedo editar el contenido yo mismo después?", a: "Sí, podemos integrarlo con un CMS headless o tradicional para que gestiones el contenido sin necesidad de tocar código." },
    { q: "¿Incluye hosting y mantenimiento?", a: "Ofrecemos planes de hosting gestionado y mantenimiento mensual que incluyen actualizaciones, backups, monitorización y soporte técnico." },
  ],
};

const DesarrolloWeb = () => (
  <PageLayout title="Desarrollo Web | IORANA Digital" description="Diseño y desarrollo web profesional. Landing pages, webs corporativas, CRO y optimización de velocidad para empresas.">
    <ServicePageTemplate data={data} />
  </PageLayout>
);

export default DesarrolloWeb;
