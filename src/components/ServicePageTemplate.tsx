import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { LucideIcon } from "lucide-react";

interface ServiceStep {
  step: string;
  title: string;
  desc: string;
}

interface ServiceMetric {
  value: string;
  label: string;
}

interface ServiceFAQ {
  q: string;
  a: string;
}

interface ServicePageData {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  includes: string[];
  whyMatters: { title: string; desc: string };
  process: ServiceStep[];
  metrics: ServiceMetric[];
  faqs: ServiceFAQ[];
}

const ServicePageTemplate = ({ data }: { data: ServicePageData }) => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/#contacto");
    setTimeout(() => {
      document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2b49] to-background opacity-50" />
        <div className="container relative z-10 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#ebf2f7]/10 border border-[#ebf2f7]/20 flex items-center justify-center mb-8">
              <data.icon className="h-8 w-8 text-[#ebf2f7]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#ebf2f7] mb-6">
              {data.title}
            </h1>
            <p className="text-lg md:text-xl text-[#ebf2f7]/70 max-w-2xl mx-auto mb-10">
              {data.subtitle}
            </p>
            <Button size="lg" onClick={goToContact} className="group text-base px-8">
              Solicitar Propuesta
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ¿Qué incluye? */}
      <section className="section-padding bg-[#24496b]">
        <div className="container max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#ebf2f7]">
              ¿Qué <span className="text-[#ff8c00]">incluye</span>?
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.includes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-6 rounded-2xl bg-[#0a2b49] border border-[#ebf2f7]/15"
              >
                <CheckCircle2 className="h-5 w-5 text-[#ff8c00] mt-0.5 shrink-0" />
                <span className="text-[#ebf2f7]/90 text-sm leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Por qué importa? */}
      <section className="section-padding">
        <div className="container max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#ebf2f7] mb-6">
              ¿Por qué <span className="gradient-text">importa</span>?
            </h2>
            <p className="text-lg text-[#ebf2f7]/70 leading-relaxed">{data.whyMatters.desc}</p>
          </motion.div>
        </div>
      </section>

      {/* Nuestro proceso */}
      <section className="section-padding bg-[#24496b]">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#ebf2f7]">
              Nuestro <span className="text-[#ff8c00]">proceso</span>
            </h2>
          </motion.div>
          <div className="space-y-6">
            {data.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start p-6 rounded-2xl bg-[#0a2b49] border border-[#ebf2f7]/15"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#ff8c00] flex items-center justify-center text-[#0a2b49] font-heading font-bold text-lg">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#ebf2f7] text-lg mb-2">{step.title}</h3>
                  <p className="text-[#ebf2f7]/70 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#ebf2f7]">
              Resultados <span className="gradient-text">reales</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-[#0a2b49] border border-[#ebf2f7]/15"
              >
                <div className="text-3xl font-heading font-bold neon-text mb-2">{m.value}</div>
                <div className="text-xs text-[#ebf2f7]/60 uppercase tracking-wider">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#24496b]">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#ebf2f7]">
              Preguntas <span className="text-[#ff8c00]">frecuentes</span>
            </h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {data.faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-[#0a2b49] px-6 border border-[#ebf2f7]/15 rounded-xl"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-[#ebf2f7] hover:no-underline hover:text-[#ebf2f7]/80 py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#ebf2f7]/70 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final con Formulario */}
      <ServiceContactForm />
    </>
  );
};

export default ServicePageTemplate;
