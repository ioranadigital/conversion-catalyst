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

const ServicePageTemplate = ({ data }: { data: ServicePageData }) => {
  const chunks = [];
  for (let i = 0; i < data.includes.length; i += 2) {
    chunks.push(data.includes.slice(i, i + 2));
  }

  return (
    <>
      <section className="section-padding relative overflow-hidden bg-[#0a2b49]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2b49] to-background opacity-50" />
        <div className="container relative z-10 max-w-6xl">
          
          {/* Hero Grid Ajustado */}
          <div className="grid lg:grid-cols-5 gap-12 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#ebf2f7]/10 border border-[#ebf2f7]/20 flex items-center justify-center mb-6">
                <data.icon className="h-7 w-7 text-[#ebf2f7]" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#ebf2f7] mb-4">
                {data.title}
              </h1>
              <p className="text-lg md:text-xl text-[#ebf2f7]/70 leading-relaxed">
                {data.subtitle}
              </p>
            </motion.div>

            {/* Columna Derecha: ¿Por qué importa? + Botón Solicitado */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2 flex flex-col gap-8"
            >
              <div className="p-8 rounded-2xl bg-[#24496b] border border-[#ebf2f7]/15">
                <div className="flex items-center gap-3 mb-5">
                  <TrendingUp className="h-5 w-5 text-[#ff8c00]" />
                  <h2 className="text-xl font-heading font-bold text-[#ebf2f7]">
                    ¿Por qué <span className="gradient-text">importa</span>?
                  </h2>
                </div>
                {data.whyMatters.points && data.whyMatters.points.length > 0 ? (
                  <ul className="space-y-4">
                    {data.whyMatters.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#ff8c00] mt-2 shrink-0" />
                        <span className="text-[#ebf2f7]/80 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[#ebf2f7]/70 text-sm leading-relaxed">{data.whyMatters.desc}</p>
                )}
              </div>

              {/* Botón a la derecha, Blanco con Hover Naranja */}
              <div className="flex justify-end lg:justify-start">
                <Button 
                  size="lg" 
                  onClick={scrollToContacto} 
                  className="group text-base px-8 bg-white text-[#0a2b49] font-bold hover:bg-[#ff8c00] hover:text-white transition-all duration-300 shadow-xl"
                >
                  Solicitar Propuesta
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Sección ¿Qué incluye? (3 columnas x 2 tarjetas) */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#ebf2f7] mb-8">
              ¿Qué <span className="text-[#ff8c00]">incluye</span>?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {chunks.map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-6">
                  {column.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (colIndex * 2 + i) * 0.1 }}
                      className="bg-[#1a3b59] border border-[#ebf2f7]/10 p-6 rounded-xl hover:border-[#ff8c00]/50 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="h-5 w-5 text-[#ff8c00] mt-0.5 shrink-0" />
                        <span className="text-[#ebf2f7]/90 text-sm font-medium leading-relaxed">{item}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

const ServicePageTemplate = ({ data }: { data: ServicePageData }) => {
  const scrollToContacto = () => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <section className="section-padding relative overflow-hidden bg-[#0a2b49]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2b49] to-background opacity-50" />
        <div className="container relative z-10 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start mb-20">
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

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="lg:col-span-2">
              <div className="p-8 rounded-2xl bg-[#24496b] border border-[#ebf2f7]/15 sticky top-24">
                <div className="flex items-center gap-3 mb-5">
                  <TrendingUp className="h-5 w-5 text-[#ff8c00]" />
                  <h2 className="text-xl font-heading font-bold text-[#ebf2f7]">¿Por qué <span className="text-[#ff8c00]">importa</span>?</h2>
                </div>
                <ul className="space-y-4">
                  {data.whyMatters.points?.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#ff8c00] mt-2 shrink-0" />
                      <span className="text-[#ebf2f7]/80 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#ebf2f7] mb-8">
              ¿Qué <span className="text-[#ff8c00]">incluye</span>?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[0, 1, 2].map((colIndex) => (
                <div key={colIndex} className="flex flex-col gap-6">
                  {data.includes
                    .filter((_, index) => index % 3 === colIndex)
                    .map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#1a3b59] border border-[#ebf2f7]/10 p-6 rounded-xl hover:border-[#ff8c00]/50 transition-all duration-300 shadow-xl"
                      >
                        <div className="flex items-start gap-4">
                          <CheckCircle2 className="h-5 w-5 text-[#ff8c00] mt-0.5 shrink-0" />
                          <span className="text-[#ebf2f7]/90 text-sm font-medium leading-relaxed">{item}</span>
                        </div>
                      </motion.div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#24496b]">
        <div className="container max-w-4xl">
          <div className="text-center mb-16"><h2 className="text-3xl font-bold text-[#ebf2f7]">Nuestro <span className="text-[#ff8c00]">proceso</span></h2></div>
          <div className="space-y-6">
            {data.process.map((step, i) => (
              <div key={i} className="flex gap-6 items-start p-6 rounded-2xl bg-[#0a2b49] border border-[#ebf2f7]/15">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#ff8c00] flex items-center justify-center text-[#0a2b49] font-bold">{step.step}</div>
                <div><h3 className="font-bold text-[#ebf2f7] mb-2">{step.title}</h3><p className="text-[#ebf2f7]/70 text-sm">{step.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.metrics.map((m, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-[#0a2b49] border border-[#ebf2f7]/15">
              <div className="text-3xl font-bold text-[#ff8c00] mb-2">{m.value}</div>
              <div className="text-xs text-[#ebf2f7]/60 uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-[#24496b]">
        <div className="container max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-[#ebf2f7] mb-12">Preguntas <span className="text-[#ff8c00]">frecuentes</span></h2>
          <Accordion type="single" collapsible className="space-y-3">
            {data.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-[#0a2b49] px-6 border border-[#ebf2f7]/15 rounded-xl">
                <AccordionTrigger className="text-left text-[#ebf2f7]">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-[#ebf2f7]/70 leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <ServiceContactForm />
    </>
  );
};

export default ServicePageTemplate;
