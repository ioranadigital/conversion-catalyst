import { Link } from "react-router-dom";

const serviceLinks = [
  { label: "SEO Técnico & On-Page", href: "/servicios/seo-tecnico" },
  { label: "PPC & Paid Search", href: "/servicios/ppc-paid-search" },
  { label: "Content Marketing", href: "/servicios/content-marketing" },
  { label: "Automatizaciones", href: "/servicios/automatizaciones" },
  { label: "Desarrollo Web", href: "/servicios/desarrollo-web" },
  { label: "Imagen de Marca", href: "/servicios/imagen-de-marca" },
];

const solutionLinks = [
  { label: "Kit Digital", href: "/soluciones/kit-digital" },
  { label: "Diseño de Landings", href: "/soluciones/diseno-de-landings" },
  { label: "Todo para Tu Negocio", href: "/soluciones/todo-para-tu-negocio" },
];

const Footer = () => (
  <footer className="border-t border-border py-14 px-4">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Brand */}
        <div>
          <div className="font-heading text-lg font-bold mb-3">
            <span className="neon-text">IORANA</span>
            <span className="text-foreground"> Digital</span>
          </div>
          <p className="text-sm text-[#ebf2f7]/50 leading-relaxed">
            Marketing digital estratégico para empresas que quieren crecer.
          </p>
        </div>

        {/* Servicios */}
        <div>
          <div className="text-xs font-bold text-[#ff8c00] uppercase tracking-widest mb-4">Servicios</div>
          <div className="space-y-2">
            {serviceLinks.map((l) => (
              <Link key={l.href} to={l.href} className="block text-sm text-[#ebf2f7]/60 hover:text-[#ff8c00] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Soluciones */}
        <div>
          <div className="text-xs font-bold text-[#ff8c00] uppercase tracking-widest mb-4">Soluciones</div>
          <div className="space-y-2">
            {solutionLinks.map((l) => (
              <Link key={l.href} to={l.href} className="block text-sm text-[#ebf2f7]/60 hover:text-[#ff8c00] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div>
          <div className="text-xs font-bold text-[#ff8c00] uppercase tracking-widest mb-4">Legal</div>
          <div className="space-y-2">
            <Link to="/privacidad" className="block text-sm text-[#ebf2f7]/60 hover:text-[#ff8c00] transition-colors">Privacidad</Link>
            <Link to="/terminos" className="block text-sm text-[#ebf2f7]/60 hover:text-[#ff8c00] transition-colors">Términos</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#ebf2f7]/10 pt-6 text-center text-sm text-[#ebf2f7]/40">
        © {new Date().getFullYear()} IORANA Digital. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
