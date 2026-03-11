const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  // Definimos los links dinámicamente según la ubicación
  const navLinks = [
    { label: 'Inicio', href: isHome ? '#hero' : '/' },
    { label: 'Servicios', href: isHome ? '#servicios' : '/#servicios' },
    { label: 'Nosotros', href: isHome ? '#nosotros' : '/#nosotros' },
    { label: 'Casos de Éxito', href: isHome ? '#casos' : '/#casos' },
    { label: 'Contacto', href: isHome ? '#contacto' : '/#contacto' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#') && isHome) {
      // Si estamos en el home y es un ancla, scroll suave
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si no estamos en el home, navegamos a la ruta
      navigate(href);
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a2b49]/80 backdrop-blur-xl border-b border-[#ebf2f7]/10">
      <div className="container flex items-center justify-between h-16">
        {/* Logo - Siempre vuelve al Home */}
        <div className="flex items-center gap-3"> 
          <img src="/iorana-marketing-digital.png" alt="Logo" className="h-8 w-auto object-contain shrink-0" />
          <Link to="/" className="font-heading text-xl font-bold tracking-tight text-[#ebf2f7]">
            IORANA <span className="text-[#ebf2f7]/80">Digital</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {/* Link de Inicio */}
          <button 
            onClick={() => handleNavClick(navLinks[0].href)}
            className="text-sm text-[#ebf2f7] hover:text-[#ff8c00] transition-colors font-medium"
          >
            {navLinks[0].label}
          </button>

          {/* Dropdown de Servicios (Se mantiene igual en ambos) */}
          <div 
            className="relative h-16 flex items-center"
            onMouseEnter={() => { if(timeoutRef.current) clearTimeout(timeoutRef.current); setServicesOpen(true); }}
            onMouseLeave={() => { timeoutRef.current = setTimeout(() => setServicesOpen(false), 150); }}
          >
            <button className="flex items-center gap-1 text-sm text-[#ebf2f7] hover:text-[#ff8c00] transition-colors font-medium">
              Soluciones de Marketing
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 w-64 pt-2">
                <div className="bg-[#0a2b49] border border-[#ebf2f7]/15 rounded-xl shadow-2xl p-2">
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
      </div>
    </nav>
  );
};
