import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const includes = [
  "Análisis de velocidad de carga y rendimiento",
  "Detección de errores técnicos SEO críticos",
  "Evaluación de experiencia móvil y usabilidad",
  "Oportunidades de mejora y quick wins",
  "Análisis básico de competencia digital",
];

const ComoEstaOptimizadoMiWeb = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    document.title = "¿Cómo está optimizada tu web? Informe gratuito | Iorana Digital";

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const desc = "Solicita gratis tu análisis web personalizado. Descubrimos errores SEO, velocidad, experiencia móvil y oportunidades de mejora para tu negocio digital.";
    setMeta("name", "description", desc);
    setMeta("name", "robots", "noindex, nofollow");
    setMeta("property", "og:title", "¿Cómo está optimizada tu web? Informe gratuito | Iorana Digital");
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", "https://iorana.digital/como-esta-optimizado-mi-web");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:image", "https://iorana.digital/og-image.jpg");
    setMeta("property", "og:locale", "es_ES");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", "¿Cómo está optimizada tu web? Informe gratuito | Iorana Digital");
    setMeta("name", "twitter:description", desc);
    setMeta("name", "twitter:image", "https://iorana.digital/og-image.jpg");

    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!accepted) {
      toast({
        title: "Debes aceptar los términos",
        description: "Por favor, acepta la política de privacidad y los términos.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "¡Solicitud enviada!",
        description: "Recibirás tu informe gratuito en 24-48 horas.",
      });
      (e.target as HTMLFormElement).reset();
      setAccepted(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-16 md:py-24 relative overflow-hidden bg-[#0a2b49]">
          <div className="absolute inset-0 bg-[#0a2b49]" />
          <div className="container relative z-10 max-w-6xl">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Left column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-3"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff8c00]/30 bg-[#ff8c00]/10 mb-8">
                  <Shield className="w-3.5 h-3.5 text-[#ff8c00]" />
                  <span className="text-xs font-medium text-[#ff8c00]">Informe Gratuito</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#ebf2f7] mb-6">
                  ¿Cómo está optimizada{" "}
                  <span className="gradient-text">tu web</span>?
                </h1>

                <p className="text-lg text-[#ebf2f7]/70 leading-relaxed max-w-xl mb-8">
                  Descubre el verdadero rendimiento de tu sitio web. Analizamos tu velocidad, SEO técnico, experiencia móvil y oportunidades de conversión — completamente gratis y sin compromiso.
                </p>

                <div className="space-y-4 mb-10">
                  <h2 className="text-lg font-heading font-bold text-[#ebf2f7]">
                    ¿Qué incluye el <span className="text-[#ff8c00]">informe</span>?
                  </h2>
                  {includes.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#ff8c00] mt-0.5 shrink-0" />
                      <span className="text-[#ebf2f7]/80 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-6 text-xs text-[#ebf2f7]/50">
                  <span>✓ Sin compromiso</span>
                  <span>✓ Respuesta en 24–48h</span>
                  <span>✓ 100% gratuito</span>
                </div>
              </motion.div>

              {/* Right column - Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <form
                  id="formulario-analisis"
                  onSubmit={handleSubmit}
                  className="bg-[#24496b] p-8 rounded-2xl border border-[#ebf2f7]/15 shadow-2xl space-y-5"
                >
                  <h3 className="text-xl font-heading font-bold text-[#ebf2f7] mb-2">
                    Solicita tu informe
                  </h3>

                  <div>
                    <label className="text-sm text-[#ebf2f7]/70 mb-1.5 block">Nombre de contacto *</label>
                    <Input
                      placeholder="Tu nombre"
                      required
                      className="bg-[#0a2b49] border-[#ebf2f7]/20 text-[#ebf2f7] placeholder:text-[#ebf2f7]/40"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-[#ebf2f7]/70 mb-1.5 block">Email *</label>
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="bg-[#0a2b49] border-[#ebf2f7]/20 text-[#ebf2f7] placeholder:text-[#ebf2f7]/40"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-[#ebf2f7]/70 mb-1.5 block">Teléfono (opcional)</label>
                    <Input
                      type="tel"
                      placeholder="+34 600 000 000"
                      className="bg-[#0a2b49] border-[#ebf2f7]/20 text-[#ebf2f7] placeholder:text-[#ebf2f7]/40"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-[#ebf2f7]/70 mb-1.5 block">URL de tu sitio web (opcional)</label>
                    <Input
                      type="url"
                      placeholder="https://tusitio.com"
                      className="bg-[#0a2b49] border-[#ebf2f7]/20 text-[#ebf2f7] placeholder:text-[#ebf2f7]/40"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-[#ebf2f7]/70 mb-1.5 block">Comentarios *</label>
                    <Textarea
                      placeholder="Cuéntanos sobre tu negocio y qué mejorarías de tu web"
                      required
                      rows={4}
                      className="bg-[#0a2b49] border-[#ebf2f7]/20 text-[#ebf2f7] placeholder:text-[#ebf2f7]/40 resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="terms-landing"
                      checked={accepted}
                      onCheckedChange={(v) => setAccepted(v === true)}
                      className="mt-0.5 border-[#ebf2f7]/30"
                    />
                    <label htmlFor="terms-landing" className="text-xs text-[#ebf2f7]/60 cursor-pointer leading-relaxed">
                      He leído y acepto la{" "}
                      <Link to="/privacidad" target="_blank" className="underline hover:text-[#ff8c00]">
                        Política de Privacidad
                      </Link>{" "}
                      y los{" "}
                      <Link to="/terminos" target="_blank" className="underline hover:text-[#ff8c00]">
                        Términos y Condiciones
                      </Link>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#ebf2f7] text-[#0a2b49] font-bold hover:bg-[#ff8c00] hover:text-white transition-all duration-300 shadow-lg"
                  >
                    {loading ? "Enviando..." : "Quiero mi informe gratuito"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ComoEstaOptimizadoMiWeb;
