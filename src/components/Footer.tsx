import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="font-heading text-lg font-bold">
        <span className="neon-text">IORANA</span>
        <span className="text-foreground"> Digital</span>
      </div>
      <div className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} IORANA Digital. Todos los derechos reservados.
      </div>
      <div className="flex gap-6 text-sm text-muted-foreground">
        <Link to="/privacidad" className="hover:text-primary transition-colors">Privacidad</Link>
        <Link to="/terminos" className="hover:text-primary transition-colors">Términos</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
