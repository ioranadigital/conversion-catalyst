import React, { useState, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const serviceLinks = [
  { label: 'SEO Técnico & On-Page', href: '/servicios/seo-tecnico' },
  { label: 'PPC & Paid Search', href: '/servicios/ppc-paid-search' },
  { label: 'Content Marketing', href: '/servicios/content-marketing' },
  { label: 'Automatizaciones', href: '/servicios/automatizaciones' },
  { label: 'Desarrollo Web', href: '/servicios/desarrollo-web' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  // Lógica de enlaces: Si no es Home, añade "/" antes del ancla
  const navLinks = [
    { label: 'Inicio', href: isHome ? '#hero' : '/' },
    { label: 'Servicios', href: isHome ? '#servicios' : '/#servicios' },
    { label: 'Nosotros', href: isHome ? '#nosotros' : '/#nosotros' },
    { label: 'Casos de Éxito', href: isHome ? '#casos' : '/#casos' },
    { label: 'FAQ', href: isHome ? '#faq' : '/#faq' },
    { label: 'Contacto', href: isHome ? '#contacto' : '/#contacto' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#') && isHome) {
      // Scroll suave si ya estamos en el index
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navegación normal si estamos en páginas interiores
      navigate(href);
    }
    setOpen(false);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a2b49]/80 backdrop-blur-xl border-b border-[#ebf2f7]/10">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3"> 
          <img src="/iorana-marketing-digital.png" alt="Logo" className="h-8 w-auto object-contain shrink-0" />
          <Link to="/" className="font-heading text-xl font-bold tracking-tight text-[#ebf2f7]">
            IORANA <span className="text-[#ebf2f7]/80">Digital</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {/* Enlace Inicio */}
          <button 
            onClick={() => handleNavClick(navLinks[0].href)} 
            className="text-sm text-[#ebf2f7] hover:text-[#ff8c00] transition-colors font-medium"
          >
            {navLinks[0].label}
          </button>

          {/* Submenú de Soluciones */}
          <div 
            className="relative h-16 flex items-center" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 text-sm text-[#ebf2f7] hover:text-[#ff8c00] transition-colors font-medium">
              Soluciones de Marketing
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 w-64 pt-2">
                <div className="bg-[#0a2b49] border border-[#ebf2f7]/15 rounded-xl shadow-2xl p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="block px-4 py-2.5 text-sm text-[#ebf2f7]/80 hover:text-[#ff8c00] hover:bg-[#ebf2f7]/5 rounded-lg transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Resto de links dinámicos */}
          {navLinks.slice(2).map((l) => (
            <button 
              key={l.label} 
              onClick={() => handleNavClick(l.href)} 
              className="text-sm text-[#ebf2f7] hover:text-[#ff8c00] transition-colors font-medium"
            >
              {l.label}
            </button>
          ))}
          
          <Button
            size="sm"
            onClick={() => handleNavClick(isHome ? '#contacto' : '/#contacto')}
            className="bg-[#ebf2f7] text-[#0a2b49] font-bold hover:bg-[#ff8c00] hover:text-white transition-all shadow-md"
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
           {navLinks.map((l) => (
            <button 
              key={l.label} 
              onClick={() => handleNavClick(l.href)} 
              className="text-left text-[#ebf2f7] py-2 text-lg hover:text-[#ff8c00] transition-colors"
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
