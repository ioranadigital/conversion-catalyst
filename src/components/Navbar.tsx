import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Casos de Éxito', href: '#casos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a2b49]/80 backdrop-blur-xl border-b border-[#ebf2f7]/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#hero" onClick={() => scrollTo("#hero")} className="font-heading text-xl font-bold tracking-tight">
          <span className="text-[#ebf2f7]">IORANA</span>{" "}
          <span className="text-[#ebf2f7]/80">Digital</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
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
        </div>

        {/* Mobile toggle */}
        <button 
          className="md:hidden text-[#ebf2f7]" 
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="md:hidden bg-[#0a2b49] border-b border-[#ebf2f7]/10 p-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-left text-[#ebf2f7] py-2 text-lg"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;


      
