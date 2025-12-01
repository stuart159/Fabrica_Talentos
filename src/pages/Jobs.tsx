import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  Filter,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const allJobs = [
  {
    id: 1,
    title: "Ingeniero de Software Senior",
    company: "Tech Innovators Inc.",
    location: "Bogotá",
    type: "Tiempo completo",
    modality: "Híbrido",
    experience: "Senior",
    salary: "$8'0000,000 - $12'000,000 COP​",
    postedAgo: "Hace 2 semanas",
    applications: 100,
    logo: "TI",
    employees: "1000-5000",
  },
  {
    id: 2,
    title: "Ingeniero de Software Intermedio",
    company: "Digital Solutions",
    location: "Medellin",
    type: "Tiempo completo",
    modality: "Remoto",
    experience: "Intermedio",
    salary: "$4'000,000 - $8'000,000 COP",
    postedAgo: "Hace 1 semana",
    applications: 50,
    logo: "DS",
    employees: "500-1000",
  },
  {
    id: 3,
    title: "Ingeniero de Software Junior",
    company: "Startup Hub",
    location: "Bucaramanga",
    type: "Tiempo completo",
    modality: "Presencial",
    experience: "Junior",
    salary: "$5'000,000 - $10'000,000 COP",
    postedAgo: "Hace 3 días",
    applications: 20,
    logo: "SH",
    employees: "50-200",
  },
  {
    id: 4,
    title: "Diseñador UX/UI",
    company: "Creative Studio",
    location: "Medellin",
    type: "Tiempo completo",
    modality: "Remoto",
    experience: "Intermedio",
    salary: "$7'000,000 - $8'000,000 COP",
    postedAgo: "Hace 5 días",
    applications: 35,
    logo: "CS",
    employees: "100-500",
  },
  {
    id: 5,
    title: "Analista de Datos",
    company: "Data Insights Co.",
    location: "Remoto",
    type: "Tiempo completo",
    modality: "Remoto",
    experience: "Senior",
    salary: "$8'000,000 - $10'000,000 COP",
    postedAgo: "Hace 1 semana",
    applications: 45,
    logo: "DI",
    employees: "200-500",
  },
  {
    id: 6,
    title: "Product Manager",
    company: "Tech Innovators Inc.",
    location: "Bucaramanga",
    type: "Tiempo completo",
    modality: "Híbrido",
    experience: "Senior",
    salary: "$5'000,000 - $7'000,000 COP",
    postedAgo: "Hace 4 días",
    applications: 60,
    logo: "TI",
    employees: "1000-5000",
  },
];

const tabs = [
  { id: "empleos", label: "Empleos" },
  { id: "personas", label: "Personas" },
  { id: "publicaciones", label: "Publicaciones" },
  { id: "grupos", label: "Grupos" },
];

export default function Jobs() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState("empleos");
  const [sortBy, setSortBy] = useState("relevancia");
  const [dateFilter, setDateFilter] = useState("all");
  const [experienceFilter, setExperienceFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredJobs = allJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesExperience = experienceFilter === "all" || job.experience === experienceFilter;
    const matchesType = typeFilter === "all" || job.type === typeFilter;
    return matchesSearch && matchesExperience && matchesType;
  });

  return (
    <Layout>
      <div className="bg-muted/30 min-h-screen py-8">
        <div className="container max-w-4xl">
          {/* Search Bar */}
          <div className="bg-card rounded-xl border border-border p-4 mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar empleos, empresas, habilidades..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-10 h-12 text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Results Header */}
          <div className="mb-6">
            <h1 className="text-xl font-bold text-foreground mb-4">
              Resultados de la búsqueda
            </h1>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-auto min-w-[180px] bg-card">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevancia">Ordenar por: Relevancia</SelectItem>
                  <SelectItem value="fecha">Ordenar por: Más recientes</SelectItem>
                  <SelectItem value="salario">Ordenar por: Salario</SelectItem>
                </SelectContent>
              </Select>

              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="w-auto min-w-[180px] bg-card">
                  <SelectValue placeholder="Fecha de publicación" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Cualquier fecha</SelectItem>
                  <SelectItem value="24h">Últimas 24 horas</SelectItem>
                  <SelectItem value="semana">Última semana</SelectItem>
                  <SelectItem value="mes">Último mes</SelectItem>
                </SelectContent>
              </Select>

              <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                <SelectTrigger className="w-auto min-w-[180px] bg-card">
                  <SelectValue placeholder="Nivel de experiencia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Cualquier nivel</SelectItem>
                  <SelectItem value="Junior">Junior</SelectItem>
                  <SelectItem value="Intermedio">Intermedio</SelectItem>
                  <SelectItem value="Senior">Senior</SelectItem>
                </SelectContent>
              </Select>

              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-auto min-w-[160px] bg-card">
                  <SelectValue placeholder="Tipo de empleo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Cualquier tipo</SelectItem>
                  <SelectItem value="Tiempo completo">Tiempo completo</SelectItem>
                  <SelectItem value="Medio tiempo">Medio tiempo</SelectItem>
                  <SelectItem value="Freelance">Freelance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <Link
                key={job.id}
                to={`/empleo/${job.id}`}
                className="block bg-card rounded-xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-lg font-bold text-primary">{job.logo}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg mb-1 hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm text-primary mb-1">
                      {job.postedAgo} | {job.applications} solicitudes
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {job.company} | {job.employees} empleados | {job.location} ({job.modality})
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            {[1, 2, 3, 4, 5].map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="icon"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
