import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Palette } from "lucide-react";

const data = {
  icon: Palette,
  title: "Imagen de Marca",
  subtitle: "Creamos identidades visuales memorables que conectan con tu audiencia y diferencian tu negocio. Tu marca es tu activo más valioso — diseñémosla para que lo demuestre.",
  includes: [
    "Diseño de logotipo y variantes",
    "Manual de identidad visual (colores, tipografías, iconografía)",
    "Diseño de papelería corporativa",
    "Plantillas para redes sociales",
    "Guía de tono y voz de marca",
    "Estrategia de posicionamiento de marca",
  ],
  whyMatters: {
    title: "¿Por qué importa tu imagen de marca?",
    desc: "",
    points: [
      "Una marca coherente genera hasta un 33% más de ingresos",
      "El 81% de los consumidores necesitan confiar en una marca antes de comprar",
      "La consistencia visual aumenta el reconocimiento de marca en un 80%",
    ],
  },
  process: [
    { step: "1", title: "Investigación", desc: "Analizamos tu mercado, competencia, audiencia y valores de marca para definir el posicionamiento estratégico." },
    { step: "2", title: "Conceptualización", desc: "Desarrollamos conceptos creativos y moodboards que reflejan la personalidad y los objetivos de tu marca." },
    { step: "3", title: "Diseño", desc: "Creamos el logotipo, paleta de colores, tipografías y todos los elementos visuales de tu identidad." },
    { step: "4", title: "Refinamiento", desc: "Iteramos sobre el diseño incorporando tu feedback hasta lograr la identidad perfecta." },
    { step: "5", title: "Entrega", desc: "Entregamos el manual de marca completo con todos los archivos, guías de uso y plantillas listas para implementar." },
  ],
  metrics: [
    { value: "+33%", label: "Más ingresos" },
    { value: "80%", label: "Reconocimiento" },
    { value: "100%", label: "Consistencia visual" },
    { value: "+50%", label: "Engagement en redes" },
  ],
  faqs: [
    { q: "¿Cuánto tiempo lleva crear una identidad de marca?", a: "El proceso completo suele durar entre 4-8 semanas, dependiendo de la complejidad del proyecto y las rondas de revisión necesarias." },
    { q: "¿Cuántas revisiones se incluyen?", a: "Incluimos 3 rondas de revisión en cada fase del proyecto para asegurar que el resultado final esté perfectamente alineado con tu visión." },
    { q: "¿Qué entregables recibo al final?", a: "Recibes el manual de identidad visual completo, archivos del logotipo en todos los formatos, plantillas para redes sociales, papelería corporativa y la guía de tono y voz." },
    { q: "¿Puedo usar la marca en cualquier soporte?", a: "Sí, el manual de marca incluye guías específicas para aplicación en digital, impresión, señalética y cualquier otro soporte que necesites." },
  ],
};

const ImagenDeMarca = () => (
  <PageLayout
    title="Imagen de Marca | Iorana Digital"
    description="Diseño de identidad visual y branding profesional en Asturias. Logotipos, manual de marca, papelería corporativa y estrategia de posicionamiento."
    canonical="https://iorana.digital/servicios/imagen-de-marca"
  >
    <ServicePageTemplate data={data} />
  </PageLayout>
);

export default ImagenDeMarca;
