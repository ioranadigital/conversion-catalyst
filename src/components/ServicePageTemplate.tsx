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
    <section id="contacto" className="section-padding scroll-mt-20">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#ebf2f7] mb-4">¿Tienes preguntas?</h2>
          <p className="text-[#ebf2f7]/70 max-w-2xl mx-auto leading-relaxed">
            Estaremos encantados de responderlas. Contacta con nosotros y uno de nuestros expertos analizará tu caso.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="bg-[#0a2b49] p-8 space-y-5 rounded-2xl border border-[#ebf2f7]/20 shadow-2xl max-w-xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            <Input placeholder="Nombre" required className="bg-[#0a2b49] border-[#ebf2f7]/20 text-[#ebf2f7]" />
            <Input placeholder="Email" type="email" required className="bg-[#0a2b49] border-[#ebf2f7]/20 text-[#ebf2f7]" />
          </div>
          <Input placeholder="Empresa / SaaS" className="bg-[#0a2b49] border-[#ebf2f7]/20 text-[#ebf2f7]" />
          <Textarea placeholder="Cuéntanos sobre tu proyecto..." rows={4} className="bg-[#0a2b49] border-[#ebf2f7]/20 text-[#ebf2f7] resize-none" />
          <Button type="submit" disabled={loading} className="w-full bg-[#ebf2f7] text-[#0a2b49] font-bold hover:bg-[#ebf2f7]/90 transition-all shadow-lg">
            {loading ? "Enviando..." : "Enviar"}
            <Send className="ml-2 h-4 w-4" />
          </Button>
          <div className="flex items-start gap-2">
            <Checkbox id="terms" checked={accepted} onCheckedChange={(v) => setAccepted(v === true)} className="mt-0.5 border-[#ebf2f7]/30" />
            <label htmlFor="terms" className="text-xs text-[#ebf2f7]/60 leading-relaxed cursor-pointer">
              Acepto los <Link to="/terminos" className="underline">Términos Legales</Link> y <Link to="/privacidad" className="underline">Privacidad</Link>.
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};

const ServicePageTemplate = ({ data }: { data: ServicePageData }) => {
  const scrollToContacto = () => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* SECCIÓN HERO Y ¿QUÉ INCLUYE? */}
      <section className="section-padding relative overflow-hidden bg-[#0a2b49]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2b49] to-background opacity-50" />
        <div className="container relative z-10 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start mb-20">
            {/* Texto Hero */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="lg:col-span-3">
              <div className="w-14 h-14 rounded-2xl bg-[#ebf2f7]/10 border border-[#ebf2f7]/20 flex items-center justify-center mb-6">
                <data.icon className="h-7 w-7 text-[#ebf2f7]" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#ebf2f7] mb-4">{data.title}</h1>
              <p className="text-lg md:text-xl text-[#ebf2f7]/70 mb-8 leading-relaxed">{data.subtitle}</p>
              <Button size="lg" onClick={scrollToContacto} className="group text-base px-8">
                Solicitar Propuesta
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            {/* ¿Por qué importa? */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay:
