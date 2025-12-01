import { Link } from "react-router-dom";
import { Briefcase, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

const footerLinks = {
  plataforma: [
    { name: "Buscar empleos", href: "/empleos" },
    { name: "Empresas", href: "/empresas" },
    { name: "Salarios", href: "/salarios" },
    { name: "Publicar oferta", href: "/publicar" },
  ],
  recursos: [
    { name: "Blog", href: "/blog" },
    { name: "Guías de carrera", href: "/guias" },
    { name: "Consejos para CV", href: "/consejos-cv" },
    { name: "Preparación de entrevistas", href: "/entrevistas" },
  ],
  empresa: [
    { name: "Acerca de nosotros", href: "/acerca" },
    { name: "Contacto", href: "/contacto" },
    { name: "Política de privacidad", href: "/privacidad" },
    { name: "Términos de servicio", href: "/terminos" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-foreground">Fábrica de Talentos</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Conectamos a los mejores talentos con las empresas más innovadoras.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Plataforma</h4>
            <ul className="space-y-3">
              {footerLinks.plataforma.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Fábrica de Talentos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
