import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const serviceLinks = [
  { label: 'SEO Técnico & On-Page', href: '/servicios/seo-tecnico' },
  { label: 'PPC & Paid Search', href: '/servicios/ppc-paid-search' },
  { label: 'Content Marketing', href: '/servicios/content-marketing' },
  { label: 'Automatizaciones', href: '/servicios/automatizaciones' },
  { label: 'Desarrollo Web', href: '/servicios/desarrollo-web' },
  { label: 'Imagen de Marca', href: '/servicios/imagen-de-marca' },
];

const solutionLinks = [
  { label: 'Kit Digital', href: '/soluciones/kit-digital' },
  { label: 'Diseño de Landings', href: '/soluciones/diseno-de-landings' },
  { label: 'Todo para Tu Negocio', href: '/soluciones/todo-para-tu-negocio' },
  { label: 'Informe Gratuito', href: '/como-esta-optimizado-mi-web' },
];
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (isHome && location.hash) {
      const timeout = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isHome, location.hash]);

  const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Casos de Éxito', href: '#casos' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (isHome) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/' + href);
      }
    } else {
      navigate(href);
    }
    setOpen(false);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMegaOpen(false);
    }, 150);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a2b49]/80 backdrop-blur-xl border-b border-[#ebf2f7]/10">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <img src="/iorana-marketing-digital.png" alt="Logo" className="h-8 w-auto object-contain shrink-0" />
          <Link to="/" className="font-heading text-xl font-bold tracking-tight text-[#ebf2f7]">
            IORANA <span className="text-[#ebf2f7]/80">Digital</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => handleNavClick('#hero')}
            className="text-sm text-[#ebf2f7] hover:text-[#ff8c00] transition-colors font-medium"
          >
            Inicio
          </button>

          {/* Mega menu: Servicios + Soluciones */}
          <div
            className="relative h-16 flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 text-sm text-[#ebf2f7] hover:text-[#ff8c00] transition-colors font-medium">
              Soluciones de Marketing
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
            </button>

            {megaOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] pt-2">
                <div className="bg-[#0a2b49] border border-[#ebf2f7]/15 rounded-xl shadow-2xl p-6 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Servicios */}
                    <div>
                      <div className="text-xs font-bold text-[#ff8c00] uppercase tracking-widest mb-3">Servicios</div>
                      <div className="space-y-1">
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.href}
                            to={s.href}
                            className="block px-3 py-2 text-sm text-[#ebf2f7]/80 hover:text-[#ff8c00] hover:bg-[#ebf2f7]/5 rounded-lg transition-colors"
                            onClick={() => setMegaOpen(false)}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* Soluciones */}
                    <div>
                      <div className="text-xs font-bold text-[#ff8c00] uppercase tracking-widest mb-3">Soluciones</div>
                      <div className="space-y-1">
                        {solutionLinks.map((s) => (
                          <Link
                            key={s.href}
                            to={s.href}
                            className="block px-3 py-2 text-sm text-[#ebf2f7]/80 hover:text-[#ff8c00] hover:bg-[#ebf2f7]/5 rounded-lg transition-colors"
                            onClick={() => setMegaOpen(false)}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(1).map((l) => (
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
            onClick={() => handleNavClick('#servicios')}
            className="bg-[#ebf2f7] text-[#0a2b49] font-bold hover:bg-[#ff8c00] hover:text-white transition-all shadow-md"
          >
            Nuestros Servicios
          </Button>
        </div>

        <button className="md:hidden text-[#ebf2f7]" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a2b49] border-b border-[#ebf2f7]/10 p-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
          <button onClick={() => handleNavClick('#hero')} className="text-left text-[#ebf2f7] py-2 text-lg hover:text-[#ff8c00]">
            Inicio
          </button>

          {/* Mobile Services/Solutions dropdown */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="text-left text-[#ebf2f7] py-2 text-lg hover:text-[#ff8c00] flex items-center justify-between"
          >
            Soluciones de Marketing
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
          </button>

          {mobileServicesOpen && (
            <div className="pl-4 space-y-1">
              <div className="text-xs font-bold text-[#ff8c00] uppercase tracking-widest py-2">Servicios</div>
              {serviceLinks.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="block py-2 text-[#ebf2f7]/80 hover:text-[#ff8c00] text-sm"
                  onClick={() => setOpen(false)}
                >
                  {s.label}
                </Link>
              ))}
              <div className="text-xs font-bold text-[#ff8c00] uppercase tracking-widest py-2 mt-2">Soluciones</div>
              {solutionLinks.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="block py-2 text-[#ebf2f7]/80 hover:text-[#ff8c00] text-sm"
                  onClick={() => setOpen(false)}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          {navLinks.slice(1).map((l) => (
            <button
              key={l.label}
              onClick={() => handleNavClick(l.href)}
              className="text-left text-[#ebf2f7] py-2 text-lg hover:text-[#ff8c00]"
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
