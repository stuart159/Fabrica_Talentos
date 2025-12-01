import { Briefcase, Building2, Users, TrendingUp } from "lucide-react";

const stats = [
  { label: "Empleos activos", value: "12,500+", icon: Briefcase },
  { label: "Empresas registradas", value: "3,200+", icon: Building2 },
  { label: "Candidatos", value: "85,000+", icon: Users },
  { label: "Contrataciones exitosas", value: "25,000+", icon: TrendingUp },
];

export function StatsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
