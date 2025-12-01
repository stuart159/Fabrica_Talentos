import { Building2 } from "lucide-react";

const companies = [
  { name: "Tech Innovators Inc.", logo: "TI", jobs: 45 },
  { name: "Global Finance Solutions", logo: "GF", jobs: 32 },
  { name: "Retail Leaders Group", logo: "RL", jobs: 28 },
  { name: "Strategic Consulting Partners", logo: "SC", jobs: 19 },
  { name: "Healthcare Pioneers Co.", logo: "HP", jobs: 56 },
];

export function FeaturedCompanies() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Empresas destacadas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Las mejores empresas confían en nosotros para encontrar talento
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="group flex flex-col items-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-xl font-bold text-primary">{company.logo}</span>
              </div>
              <h3 className="font-medium text-foreground text-center text-sm mb-1">
                {company.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {company.jobs} empleos activos
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
