import { motion } from "framer-motion";
import { Rocket, Users, Brain, Shield } from "lucide-react";

const values = [
  { icon: Rocket, label: "Velocidad", desc: "Iteramos rápido para conseguir resultados antes" },
  { icon: Brain, label: "Estrategia", desc: "Cada acción responde a un plan con datos" },
  { icon: Users, label: "Partnership", desc: "Somos una extensión de tu equipo" },
  { icon: Shield, label: "Transparencia", desc: "Reportes claros, sin métricas vanidosas" },
];

const AboutSection = () => (
  <section id="nosotros" className="section-padding">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Nosotros</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 text-[#ebf2f7]"> Obsesionados con el crecimiento de <span className="gradient-text">tu empresa</span></h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Orbital SEO nació de la frustración de ver startups brillantes con productos increíbles
            que nadie encontraba en Google. Nos propusimos cambiar eso.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Nuestro equipo combina experiencia en growth marketing, ingeniería y producto SaaS.
            Entendemos que MRR, churn y LTV no son solo métricas — son la sangre de tu negocio.
            Por eso cada estrategia que diseñamos está conectada directamente con tus objetivos de revenue.
          </p>

        {/* 3. Reemplaza el bloque del grid completo */}
<div className="grid grid-cols-2 gap-4">
  {values.map((v, i) => (
    <motion.div
      key={v.label}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="flex items-start gap-4 p-6 rounded-2xl bg-[#0a2b49] border border-[#ebf2f7]/20 shadow-xl transition-all duration-300 hover:border-[#ebf2f7]/50 hover:-translate-y-1 group"
    >
      <v.icon className="h-6 w-6 text-[#ebf2f7] mt-0.5 shrink-0 transition-transform group-hover:scale-110 duration-300" />

      <div>
        <div className="font-bold text-base text-[#ebf2f7] mb-1 tracking-tight">
          {v.label}
        </div>
        <div className="text-[#ebf2f7]/70 text-sm leading-relaxed">
          {v.desc}
        </div>
      </div>
    </motion.div>
  ))}
</div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="glass-card p-10 neon-border">
            <div className="text-5xl font-heading font-bold neon-text mb-2">50+</div>
            <div className="text-lg font-heading font-semibold mb-4">Startups SaaS escaladas</div>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary rounded-full h-2" style={{ width: "92%" }} />
                </div>
                <span className="text-primary font-semibold shrink-0">92%</span>
              </div>
              <p>de nuestros clientes renuevan contrato tras el primer trimestre</p>
              <div className="flex items-center gap-3">
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary rounded-full h-2" style={{ width: "85%" }} />
                </div>
                <span className="text-primary font-semibold shrink-0">85%</span>
              </div>
              <p>alcanzan page 1 en sus keywords objetivo en menos de 4 meses</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
