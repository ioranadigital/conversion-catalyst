import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo en menos de 24 horas.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contacto" className="section-padding bg-[#24496b] relative overflow-hidden">
    <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Contacto</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 text-[#ebf2f7]">   ¿Listo para contarnos tu  <span className="gradient-text">proyecto?</span></h2>

          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Agenda una consultoría gratuita de 30 minutos. Analizaremos tu situación actual y te daremos
            un plan accionable — sin compromiso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
          <div className="bg-[#0a2b49] p-6 rounded-2xl border border-[#ebf2f7]/20 shadow-lg">
              <Mail className="h-5 w-5 text-primary mb-3" />
              <div className="font-semibold text-sm">Email</div>
              <div className="text-muted-foreground text-sm mt-1">hola@orbitalseo.com</div>
            </div>
           <div className="bg-[#0a2b49] p-6 rounded-2xl border border-[#ebf2f7]/20 shadow-lg">
    <MapPin className="h-5 w-5 text-[#ebf2f7] mb-3" />
    <div className="font-bold text-[#ebf2f7]">Ubicación</div>
    <div className="text-[#ebf2f7]/70 text-sm mt-1">100% Remoto · Global</div>
  </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass-card p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Nombre" required className="bg-muted/50 border-border" />
              <Input placeholder="Email" type="email" required className="bg-muted/50 border-border" />
            </div>
            <Input placeholder="Empresa / SaaS" className="bg-muted/50 border-border" />
            <Textarea placeholder="Cuéntanos sobre tu proyecto..." rows={4} className="bg-muted/50 border-border resize-none" />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Enviando..." : "Agendar Consultoría Gratuita"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
