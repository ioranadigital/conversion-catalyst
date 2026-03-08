import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Casos de Éxito", href: "#casos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#hero" onClick={() => scrollTo("#hero")} className="font-heading text-xl font-bold tracking-tight">
          <span className="neon-text">IORANA</span>{" "}
          <span className="text-foreground">Digital</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
  <button
    key={l.href}
    onClick={() => scrollTo(l.href)}
    // El comentario debe ir aquí afuera si lo necesitas
    className="text-sm text-[#ebf2f7] hover:text-[#ebf2f7]/70 transition-colors font-medium"
  >
    {l.label}
  </button>
))}
          <Button 
  size="sm" 
  onClick={() => scrollTo("#contacto")}
  className="bg-[#ebf2f7] text-[#0a2b49] font-bold hover:bg-[#ebf2f7]/90 transition-all shadow-md"
>
  Agendar Consultoría
</Button>

        {/* Mobile toggle */}
        <button className="md:hidden text-[#ebf2f7]" onClick={() => setOpen(!open)}>
  {open ? <X size={24} /> : <Menu size={24} />}
</button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-left text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {l.label}
                </button>
              ))}
              <Button size="sm" onClick={() => scrollTo("#contacto")} className="w-fit">
                Agendar Consultoría
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
