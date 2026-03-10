import { motion } from "framer-motion";
import { TrendingUp, Zap, Target } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Solo SaaS. Solo Resultados.",
    desc: "No somos generalistas. Nos especializamos exclusivamente en startups de SaaS, lo que nos permite entender tu funnel, tu ICP y tus métricas mejor que nadie.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven al 100%",
    desc: "Cada decisión se basa en datos reales: análisis de competidores, intent de búsqueda y modelos de atribución que conectan SEO con ingresos.",
  },
  {
    icon: Zap,
    title: "Velocidad de Startup",
    desc: "Sprints de 2 semanas, reportes transparentes y un equipo que opera a la velocidad que tu startup necesita. Sin burocracia.",
  },
];

const USPSection = () => (
  <section className="section-padding relative">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-medium text-primary tracking-widest uppercase">¿Por qué Orbital?</span>
    <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 text-[#ebf2f7]">
  La agencia SEO que piensa como <span className="gradient-text">tu co-founder</span>
</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card p-8 hover:neon-border transition-all duration-500"
          >
            {/* color Logo */}
           <div className="w-12 h-12 rounded-lg bg-[#ebf2f7]/10 border border-[#ebf2f7]/20 flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(235,242,247,0.1)]">
          <p.icon className="h-6 w-6 text-[#ebf2f7]" /> {/* Dcolor icocno */}
            </div>
            {/* Dentro del map de pillars en USPSection.tsx */}
           <h3 className="text-xl font-bold mb-3 text-[#ebf2f7]">
           {p.title}
           </h3>
          <p className="text-[#ebf2f7]/70 leading-relaxed">  {p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default USPSection;
