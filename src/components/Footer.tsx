const Footer = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="font-heading text-lg font-bold">
        <span className="neon-text">IORANA</span>
        <span className="text-foreground">Digital</span>
      </div>

      <div className="container flex items-center justify-between h-16">
        <a href="#hero" onClick={() => scrollTo("#hero")} className="font-heading text-xl font-bold tracking-tight">
          <span className="neon-text">IORANA</span>{" "}
          <span className="text-foreground">Digital</span>
        </a>

      
      
      <div className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} IORANA Digital. Todos los derechos reservados.
      </div> {/* <-- Faltaba este cierre */}
      <div className="flex gap-6 text-sm text-muted-foreground">
        <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
        <a href="#" className="hover:text-primary transition-colors">Términos</a>
      </div>
    </div> {/* <-- Este cierra el container */}
  </footer>
);

export default Footer;

