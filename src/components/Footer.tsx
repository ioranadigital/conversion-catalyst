const Footer = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="font-heading text-lg font-bold">
        <span className="neon-text">Orbital</span> SEO
      </div>
      <div className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Orbital SEO. Todos los derechos reservados.
      </div>
      <div className="flex gap-6 text-sm text-muted-foreground">
        <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
        <a href="#" className="hover:text-primary transition-colors">Términos</a>
      </div>
    </div>
  </footer>
);

export default Footer;
