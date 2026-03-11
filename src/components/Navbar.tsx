import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

://const serviceLinks = [
  { label: 'SEO Técnico & On-Page', href: '/servicios/seo-tecnico' },
  { label: 'PPC & Paid Search', href: '/servicios/ppc-paid-search' },
  { label: 'Content Marketing', href: '/servicios/content-marketing' },
  { label: 'Automatizaciones', href: '/servicios/automatizaciones' },
  { label: 'Desarrollo Web', href: '/servicios/desarrollo-web' },
];://

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Casos de Éxito', href: '#casos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const scrollTo = (id: string) => {
    if (isHome) {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
      }
    } else {
      navigate('/' + id);
      setOpen(false);
    }
  };

  const handleCTA = () => {
    if (isHome) {
      document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contacto');
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a2b49]/80 backdrop-blur-xl border-b border-[#ebf2f7]/10">
      <div className="container flex items-center justify-between h-16">
     <div className="flex items-center gap-3"> 
        <img src="/iorana-marketing-digital.png" alt="Marketing Digital Asturias" className="h-8 w-auto object-contain shrink-0"  />
        <Link to="/" className="font-heading text-xl font-bold tracking-tight">
          <span className="text-[#ebf2f7]">IORANA</span>{" "}
          <span className="text-[#ebf2f7]/80">Digital</span>
      </Link>
    </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.slice(0, 1).map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm text-[#ebf2f7] hover:text-[#ebf2f7]/70 transition-colors font-medium"
            >
              {l.label}
            </button>
          ))}

          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="flex items-center gap-1 text-sm text-[#ebf2f7] hover:text-[#ebf2f7]/70 transition-colors font-medium">
              Servicios
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#0a2b49] border border-[#ebf2f7]/15 rounded-xl shadow-2xl p-2 animate-fade-in">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="block px-4 py-2.5 text-sm text-[#ebf2f7]/80 hover:text-[#ebf2f7] hover:bg-[#ebf2f7]/5 rounded-lg transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map((l) => (
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
            onClick={handleCTA}
            className="bg-[#ebf2f7] text-[#0a2b49] font-bold hover:bg-[#ebf2f7]/90 transition-all shadow-md"
          >
            Agendar Consultoría
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-[#ebf2f7]" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0a2b49] border-b border-[#ebf2f7]/10 p-4 flex flex-col gap-2">
          <button onClick={() => scrollTo('#hero')} className="text-left text-[#ebf2f7] py-2 text-lg">
            Inicio
          </button>
          
          <div>
            <button 
              onClick={() => setServicesOpen(!servicesOpen)} 
              className="flex items-center gap-2 text-left text-[#ebf2f7] py-2 text-lg w-full"
            >
              Servicios
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    onClick={() => { setOpen(false); setServicesOpen(false); }}
                    className="block text-[#ebf2f7]/70 py-1.5 text-base hover:text-[#ebf2f7]"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map((l) => (
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
