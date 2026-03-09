const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-background border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nadina Díaz. Todos los derechos reservados.
        </p>
        <p className="text-xs text-muted-foreground/60">
          Bioingeniera · Data Analyst · Project Manager
        </p>
      </div>
    </footer>
  );
};

export default Footer;
