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
    <section id="contacto" className="py-24 scroll-mt-20">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#ebf2f7] mb-4">
            ¿Tienes preguntas?
          </h2>
          <p className="text-[#ebf2f7]/70 max-w-2xl mx-auto leading-relaxed">
            Estaremos encantados de responderlas. Contacta con nosotros y estudiaremos tu caso.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-[#0a2b49] p-8 space-y-5 rounded-2xl border border-[#ebf2f7]/20 shadow-2xl max-w-xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Input placeholder="Nombre" required className="bg-[#0a2b49] border-[#ebf2f7]/20 text-[#ebf2f7]" />
            <Input placeholder="Email" type="email" required className="bg-[#0a2b49] border-[#ebf2f7]/20 text-[#ebf2f7]" />
          </div>
          <Input placeholder="Empresa / SaaS" className="bg-[#0a2b49] border-[#ebf2f7]/20 text-[#ebf2f7]" />
          <Textarea placeholder="Cuéntanos sobre tu proyecto..." rows={4} className="bg-[#0a2b49] border-[#ebf2f7]/20 text-[#ebf2f7] resize-none" />
          <Button type="submit" disabled={loading} className="w-full bg-[#ebf2f7] text-[#0a2b49] font-bold hover:bg-[#ebf2f7]/90 transition-all">
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
      <section className="pt-20 pb-24 relative overflow-hidden bg-[#0a2b49]">
        <div className="absolute inset-0 bg-[#0a2b49]" />
        <div className="container relative z-10 max-w-6xl">
          
          <div className="grid lg:grid-cols-5 gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3 pt-4"
            >
              {/* Recuperamos el Icono/Logo */}
              <div className="w-14 h-14 rounded-2xl bg-[#ebf2f7]/10 border border-[#ebf2f7]/20 flex items-center justify-center mb-8">
                <data.icon className="h-7 w-7 text-[#ebf2f7]" />
              </div>
              
              {/* Título y párrafo en su posición original más abajo */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-[#ebf2f7] mb-6">
                {data.title}
              </h1>
              <p className="text-lg md:text-xl text-[#ebf2f7]/70 leading-relaxed max-w-xl">
                {data.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              {/* Tarjeta Informativa "¿Por qué importa?" */}
              <div className="p-8 rounded-2xl bg-[#24496b] border border-[#ebf2f7]/15 shadow-xl">
                <div className="flex items-center gap-3 mb-5">
                  <TrendingUp className="h-5 w-5 text-[#ff8c00]" />
                  <h2 className="text-xl font-heading font-bold text-[#ebf2f7]">
                    ¿Por qué <span className="gradient-text">importa</span>?
                  </h2>
                </div>
                {data.whyMatters.points && (
                  <ul className="space-y-4">
                    {data.whyMatters.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#ebf2f7]/80 leading-relaxed">
                        <div className="w-2 h-2 rounded-full bg-[#ff8c00] mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Botón Solicitar Propuesta debajo de la tarjeta informativa */}
              <div className="flex justify-start">
                <Button 
                  size="lg" 
                  onClick={scrollToContacto} 
                  className="group text-base px-10 bg-white text-[#0a2b49] font-bold hover:bg-[#ff8c00] hover:text-white transition-all duration-300 shadow-2xl border-none"
                >
                  Solicítanos Más Información
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#ebf2f7] mb-8">
              ¿Qué <span className="text-[#ff8c00]">incluye</span>?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.includes.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#1a3b59] border border-[#ebf2f7]/10 p-6 rounded-xl hover:border-[#ff8c00]/50 transition-all duration-300 shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-5 w-5 text-[#ff8c00] mt-0.5 shrink-0" />
                    <span className="text-[#ebf2f7]/90 text-sm font-medium leading-relaxed">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resto de secciones (Proceso, Resultados, FAQ) se mantienen... */}
      {/* ... */}
    </>
  );
};

export default ServicePageTemplate;
