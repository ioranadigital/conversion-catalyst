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
         <div className="space-y-4">
  {/* Tarjeta de Email */}
  <div className="bg-[#0a2b49] p-6 rounded-2xl border border-[#ebf2f7]/20 shadow-lg">
    <Mail className="h-5 w-5 text-[#ebf2f7] mb-3" />
    <div className="font-bold text-[#ebf2f7]">Email</div>
    <div className="text-[#ebf2f7]/70 text-sm mt-1">hola@orbitalseo.com</div>
  </div>

  {/* Tarjeta de Ubicación */}
  <div className="bg-[#0a2b49] p-6 rounded-2xl border border-[#ebf2f7]/20 shadow-lg">
    <MapPin className="h-5 w-5 text-[#ebf2f7] mb-3" />
    <div className="font-bold text-[#ebf2f7]">Ubicación</div>
    <div className="text-[#ebf2f7]/70 text-sm mt-1">100% Remoto · Global</div>
  </div>
</div>
          </motion.div>

         <motion.form
  className="md:col-span-3 bg-[#0a2b49] p-8 space-y-5 rounded-2xl border border-[#ebf2f7]/20 shadow-2xl"
>
  <div className="grid sm:grid-cols-2 gap-4">
    <Input 
      placeholder="Nombre" 
      className="bg-[#0a2b49] border-[#ebf2f7]/20 text-[#ebf2f7] placeholder:text-[#ebf2f7]/40 focus:border-[#ebf2f7]/50" 
    />
    <Input 
      placeholder="Email" 
      type="email" 
      className="bg-[#0a2b49] border-[#ebf2f7]/20 text-[#ebf2f7] placeholder:text-[#ebf2f7]/40 focus:border-[#ebf2f7]/50" 
    />
  </div>
  
  <Input 
    placeholder="Empresa / SaaS" 
    className="bg-[#0a2b49] border-[#ebf2f7]/20 text-[#ebf2f7] placeholder:text-[#ebf2f7]/40 focus:border-[#ebf2f7]/50" 
  />
  
  <Textarea 
    placeholder="Cuéntanos sobre tu proyecto..." 
    rows={4} 
    className="bg-[#0a2b49] border-[#ebf2f7]/20 text-[#ebf2f7] placeholder:text-[#ebf2f7]/40 focus:border-[#ebf2f7]/50 resize-none" 
  />

  <Button className="w-full bg-[#ebf2f7] text-[#0a2b49] font-bold hover:bg-[#ebf2f7]/90 transition-all shadow-lg">
    Agendar Consultoría Gratuita
    <Send className="ml-2 h-4 w-4" />
  </Button>
</motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
