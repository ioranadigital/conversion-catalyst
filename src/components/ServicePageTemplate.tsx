import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Send, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { LucideIcon } from "lucide-react";

interface ServiceStep { step: string; title: string; desc: string; }
interface ServiceMetric { value: string; label: string; }
interface ServiceFAQ { q: string; a: string; }

export interface ServicePageData {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  includes: string[];
  whyMatters: { title: string; desc: string; points?: string[] };
  process: ServiceStep[];
  metrics: ServiceMetric[];
  faqs: ServiceFAQ[];
}

const ServiceContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!accepted) {
      toast({
        title: "Debes aceptar los términos",
        description: "Por favor, acepta los términos legales y la política de privacidad.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo en menos de 24 horas.",
      });
      (e.target as HTMLFormElement).reset();
      setAccepted(false);
    }, 1000);
  };

  return (
    <section id="contacto" className="py-12 md:py-20 scroll-mt-20">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#ebf2f7] mb-3">
            ¿Tienes preguntas?
          </h2>
          <p className="text-[#ebf2f7]/70 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            Estaremos encantados de responderlas. Contacta con nosotros y estudiaremos tu caso.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-[#0a2b49] p-6 md:p-8 space-y-4 rounded-2xl border border-[#ebf2f7]/20 shadow-2xl max-w-xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Input placeholder="Nombre" required className="bg-[#0a2b49] border-[#ebf2f7]/20 text-[#ebf2f7]" />
            <Input placeholder="Email" type="email" required className="bg-[#0a2b49] border-[#ebf2f7]/20 text-[#ebf2f7]" />
          </div>
          <Input placeholder="Empresa / SaaS" className="bg-[#0a2b49] border-[#ebf2f7]/20 text-[#ebf2f7]" />
          <Textarea placeholder="Cuéntanos sobre tu proyecto..." rows={3} className="bg-[#0a2b49] border-[#ebf2f7]/20 text-[#ebf2f7] resize-none" />
          <Button type="submit" disabled={loading} className="w-full bg-[#ebf2f7] text-[#0a2b49] font-bold hover:bg-[#ebf2f7]/90">
            {loading ? "Enviando..." : "Enviar"}
            <Send className="ml-2 h-4 w-4" />
          </Button>
          <div className="flex items-start gap-2">
            <Checkbox id="terms-service" checked={accepted} onCheckedChange={(v) => setAccepted(v === true)} className="mt-0.5 border-[#ebf2f7]/30" />
            <label htmlFor="terms-service" className="text-xs text-[#ebf2f7]/60 cursor-pointer">
              Acepto los <Link to="/terminos" className="underline">Términos</Link> y la <Link to="/privacidad" className="underline">Privacidad</Link>
            </label>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

const scrollToContacto = () => {
  document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
};

const ServicePageTemplate = ({ data }: { data: ServicePageData }) => {
  return (
    <>
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 relative overflow-hidden bg-[#0a2b49]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2b49] to-background opacity-50" />
        <div className="container relative z-10 max-w-6xl">
          
          {/* Hero Grid compactado */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ebf2f7]/10 border border-[#ebf2f7]/20 flex items-center justify-center mb-4">
                <data.icon className="h-6 w-6 text-[#ebf2f7]" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#ebf2f7] mb-4">
                {data.title}
              </h1>
              <p className="text-base md:text-lg text-[#ebf2f7]/70 leading-relaxed max-w-2xl">
                {data.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="p-6 rounded-2xl bg-[#24496b] border border-[#ebf2f7]/15 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-5 w-5 text-[#ff8c00]" />
                  <h2 className="text-lg font-heading font-bold text-[#ebf2f7]">
                    ¿Por qué <span className="gradient-text">importa</span>?
                  </h2>
                </div>
                {data.whyMatters.points && (
                  <ul className="space-y-3">
                    {data.whyMatters.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#ebf2f7]/80 leading-snug">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff8c00] mt-1.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          </div>

          {/* Sección ¿Qué incluye? en 3 columnas optimizada */}
          <div className="mt-8">
            <h2 className="text-2xl font-heading font-bold text-[#ebf2f7] mb-6">
              ¿Qué <span className="text-[#ff8c00]">incluye</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.includes.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#1a3b59] border border-[#ebf2f7]/10 p-5 rounded-xl flex items-start gap-3 hover:border-[#ff8c00]/40 transition-colors shadow-md"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#ff8c00] mt-0.5 shrink-0" />
                  <span className="text-[#ebf2f7]/90 text-sm font-medium leading-tight">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Botón Solicitar Propuesta alineado a la derecha */}
            <div className="mt-8 flex justify-end">
              <Button 
                size="lg" 
                onClick={scrollToContacto} 
                className="group text-sm md:text-base px-8 bg-white text-[#0a2b49] font-bold hover:bg-[#ff8c00] hover:text-white transition-all shadow-xl border-none"
              >
                Solicitar Propuesta
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Secciones restantes con padding reducido */}
      <section className="py-16 bg-[#24496b]">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-heading font-bold text-[#ebf2f7] mb-12">
            Nuestro <span className="text-[#ff8c00]">proceso</span>
          </h2>
          <div className="space-y-4 text-left">
            {data.process.map((step, i) => (
              <div key={i} className="flex gap-5 items-start p-5 rounded-2xl bg-[#0a2b49] border border-[#ebf2f7]/15">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#ff8c00] flex items-center justify-center text-[#0a2b49] font-bold">{step.step}</div>
                <div>
                  <h3 className="font-bold text-[#ebf2f7] mb-1">{step.title}</h3>
                  <p className="text-[#ebf2f7]/70 text-xs md:text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-heading font-bold text-[#ebf2f7] mb-12">Resultados <span className="gradient-text">reales</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.metrics.map((m, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#0a2b49] border border-[#ebf2f7]/15">
                <div className="text-2xl font-bold neon-text mb-1">{m.value}</div>
                <div className="text-[10px] text-[#ebf2f7]/60 uppercase tracking-tighter">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceContactForm />
    </>
  );
};

export default ServicePageTemplate;
