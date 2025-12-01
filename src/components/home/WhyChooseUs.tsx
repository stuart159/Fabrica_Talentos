import { Building2, Users, BarChart3, Shield, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Amplia red de empresas",
    description: "Accede a una amplia red de empresas líderes en diversos sectores.",
  },
  {
    icon: Users,
    title: "Perfiles de candidatos detallados",
    description: "Encuentra candidatos con perfiles completos y detallados.",
  },
  {
    icon: BarChart3,
    title: "Análisis de mercado laboral",
    description: "Obtén información valiosa sobre las tendencias del mercado laboral.",
  },
  {
    icon: Shield,
    title: "Proceso seguro",
    description: "Tu información está protegida con los más altos estándares de seguridad.",
  },
  {
    icon: Clock,
    title: "Respuesta rápida",
    description: "Conecta con empresas y recibe respuestas en tiempo récord.",
  },
  {
    icon: Award,
    title: "Calidad garantizada",
    description: "Solo las mejores ofertas laborales verificadas y actualizadas.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Por qué elegir Fábrica de Talentos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conectamos a los mejores talentos con las empresas más innovadoras. Nuestra plataforma ofrece herramientas avanzadas para facilitar la búsqueda y selección de candidatos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
