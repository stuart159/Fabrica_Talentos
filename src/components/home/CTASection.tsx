import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
            Publica tu oferta de empleo
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Atrae a los mejores talentos con nuestra plataforma. Publica tu oferta y encuentra al candidato ideal para tu equipo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/publicar">
              <Button size="lg" variant="secondary" className="gap-2">
                <Building2 className="w-5 h-5" />
                Publicar oferta
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/registro">
              <Button size="lg" variant="outline" className="gap-2 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Users className="w-5 h-5" />
                Crear cuenta gratis
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
