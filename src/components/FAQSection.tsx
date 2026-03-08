import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cuánto tiempo tarda en verse resultados con SEO?",
    a: "Los primeros resultados tangibles suelen aparecer entre 2 y 4 meses. Sin embargo, desde el primer mes implementamos quick wins (optimización técnica, mejoras on-page) que pueden generar incrementos inmediatos. El SEO es una inversión a medio-largo plazo que genera retornos compuestos — cuanto antes empieces, antes verás el impacto.",
  },
  {
    q: "¿Cuánto cuesta trabajar con Orbital SEO?",
    a: "Nuestros planes comienzan desde $3,000 USD/mes y se adaptan al tamaño de tu startup y tus objetivos. Ofrecemos una consultoría gratuita donde analizamos tu situación actual y proponemos un plan con ROI proyectado. No hay contratos de permanencia — nos ganamos tu confianza cada mes con resultados.",
  },
  {
    q: "¿Puedo hacer SEO internamente en vez de contratar una agencia?",
    a: "Podrías, pero construir un equipo SEO interno competente (SEO técnico + content + link building) cuesta fácilmente $15,000+/mes en salarios. Con Orbital obtienes un equipo completo y especializado en SaaS por una fracción del costo, y sin el riesgo de contratar perfiles equivocados.",
  },
  {
    q: "¿Trabajáis con startups en etapa temprana (pre-seed/seed)?",
    a: "Absolutamente. De hecho, es el mejor momento para empezar. Construir autoridad de dominio desde cero es más fácil que competir cuando tu mercado ya está saturado. Tenemos planes específicos para startups en etapa temprana con presupuestos ajustados.",
  },
  {
    q: "¿Cómo medís el éxito de vuestras campañas?",
    a: "No nos enfocamos en métricas vanidosas. Medimos lo que importa: tráfico orgánico cualificado, leads generados, MQLs, pipeline influenciado y, en última instancia, revenue atribuible a SEO. Cada cliente tiene un dashboard en tiempo real con KPIs acordados desde el día 1.",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-padding">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-medium text-primary tracking-widest uppercase">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 text-[#ebf2f7]"> Preguntas  <span className="gradient-text">frecuentes</span></h2>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass-card px-6 border border-border rounded-xl data-[state=open]:neon-border transition-all duration-300"
            >
<AccordionTrigger className="text-left font-heading font-semibold text-[#ebf2f7] hover:no-underline hover:text-[#ebf2f7]/80 transition-colors py-5"> 
              {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
