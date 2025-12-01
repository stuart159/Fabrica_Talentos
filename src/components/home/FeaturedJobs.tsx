import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, DollarSign, ArrowRight } from "lucide-react";

const featuredJobs = [
  {
    id: 1,
    title: "Ingeniero de Software Senior",
    company: "Tech Innovators Inc.",
    location: "Ciudad de México",
    type: "Tiempo completo",
    modality: "Híbrido",
    salary: "$80,000 - $120,000 MXN",
    postedAgo: "Hace 2 días",
    logo: "TI",
  },
  {
    id: 2,
    title: "Diseñador UX/UI",
    company: "Creative Studio",
    location: "Guadalajara",
    type: "Tiempo completo",
    modality: "Remoto",
    salary: "$50,000 - $70,000 MXN",
    postedAgo: "Hace 3 días",
    logo: "CS",
  },
  {
    id: 3,
    title: "Gerente de Marketing Digital",
    company: "Global Finance Solutions",
    location: "Monterrey",
    type: "Tiempo completo",
    modality: "Presencial",
    salary: "$60,000 - $90,000 MXN",
    postedAgo: "Hace 1 semana",
    logo: "GF",
  },
  {
    id: 4,
    title: "Analista de Datos",
    company: "Data Insights Co.",
    location: "Remote",
    type: "Tiempo completo",
    modality: "Remoto",
    salary: "$45,000 - $65,000 MXN",
    postedAgo: "Hace 5 días",
    logo: "DI",
  },
];

export function FeaturedJobs() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Empleos destacados
            </h2>
            <p className="text-muted-foreground">
              Las mejores oportunidades laborales del momento
            </p>
          </div>
          <Link to="/empleos" className="hidden md:block">
            <Button variant="outline" className="gap-2">
              Ver todos
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {featuredJobs.map((job, index) => (
            <Link
              key={job.id}
              to={`/empleo/${job.id}`}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-primary">{job.logo}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                      {job.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{job.company}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                      {job.modality}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <span className="text-sm font-medium text-foreground flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      {job.salary}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {job.postedAgo}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/empleos">
            <Button variant="outline" className="gap-2">
              Ver todos los empleos
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
