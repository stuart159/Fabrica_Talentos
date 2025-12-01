import { useState } from "react";
import { Link } from "react-router-dom";
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
import { Search, MapPin, Users, Briefcase, Star, Building2 } from "lucide-react";

const companies = [
  {
    id: 1,
    name: "Tech Innovators Inc.",
    logo: "TI",
    industry: "Tecnología",
    location: "Bogotá",
    employees: "1,000 - 5,000",
    rating: 4.5,
    reviews: 234,
    openJobs: 45,
    description: "Empresa líder en soluciones tecnológicas innovadoras para el sector empresarial.",
  },
  {
    id: 2,
    name: "Global Finance Solutions",
    logo: "GF",
    industry: "Finanzas",
    location: "Medellin",
    employees: "500 - 1,000",
    rating: 4.2,
    reviews: 156,
    openJobs: 32,
    description: "Servicios financieros globales con presencia en más de 20 países.",
  },
  {
    id: 3,
    name: "Creative Studio",
    logo: "CS",
    industry: "Diseño",
    location: "Bogotá",
    employees: "100 - 500",
    rating: 4.8,
    reviews: 89,
    openJobs: 18,
    description: "Agencia creativa especializada en branding y experiencias digitales.",
  },
  {
    id: 4,
    name: "Healthcare Pioneers Co.",
    logo: "HP",
    industry: "Salud",
    location: "Cali",
    employees: "5,000 - 10,000",
    rating: 4.3,
    reviews: 412,
    openJobs: 56,
    description: "Innovación en servicios de salud y tecnología médica.",
  },
  {
    id: 5,
    name: "Digital Solutions",
    logo: "DS",
    industry: "Tecnología",
    location: "Bucaramanga",
    employees: "500 - 1,000",
    rating: 4.6,
    reviews: 178,
    openJobs: 28,
    description: "Desarrollo de software y consultoría digital para empresas.",
  },
  {
    id: 6,
    name: "Retail Leaders Group",
    logo: "RL",
    industry: "Retail",
    location: "Medellin",
    employees: "10,000+",
    rating: 4.0,
    reviews: 567,
    openJobs: 89,
    description: "Cadena de tiendas minoristas con presencia nacional.",
  },
  {
    id: 7,
    name: "Data Insights Co.",
    logo: "DI",
    industry: "Tecnología",
    location: "Remoto",
    employees: "200 - 500",
    rating: 4.7,
    reviews: 92,
    openJobs: 15,
    description: "Análisis de datos y business intelligence para empresas.",
  },
  {
    id: 8,
    name: "Strategic Consulting Partners",
    logo: "SC",
    industry: "Consultoría",
    location: "Bogotá",
    employees: "100 - 500",
    rating: 4.4,
    reviews: 134,
    openJobs: 19,
    description: "Consultoría estratégica para transformación empresarial.",
  },
];

export default function Companies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [industryFilter, setIndustryFilter] = useState("all");
  const [sizeFilter, setSizeFilter] = useState("all");

  const filteredCompanies = companies.filter((company) => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = industryFilter === "all" || company.industry === industryFilter;
    return matchesSearch && matchesIndustry;
  });

  return (
    <Layout>
      <div className="bg-muted/30 min-h-screen">
        {/* Header */}
        <div className="bg-primary py-12 md:py-16">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Empresas que contratan
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Descubre las mejores empresas para trabajar y encuentra tu próxima oportunidad laboral.
            </p>
          </div>
        </div>

        <div className="container py-8">
          {/* Search and Filters */}
          <div className="bg-card rounded-xl border border-border p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar empresas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12"
                />
              </div>
              <Select value={industryFilter} onValueChange={setIndustryFilter}>
                <SelectTrigger className="w-full md:w-[200px] h-12">
                  <SelectValue placeholder="Industria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las industrias</SelectItem>
                  <SelectItem value="Tecnología">Tecnología</SelectItem>
                  <SelectItem value="Finanzas">Finanzas</SelectItem>
                  <SelectItem value="Salud">Salud</SelectItem>
                  <SelectItem value="Diseño">Diseño</SelectItem>
                  <SelectItem value="Retail">Retail</SelectItem>
                  <SelectItem value="Consultoría">Consultoría</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sizeFilter} onValueChange={setSizeFilter}>
                <SelectTrigger className="w-full md:w-[200px] h-12">
                  <SelectValue placeholder="Tamaño" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Cualquier tamaño</SelectItem>
                  <SelectItem value="small">1 - 100</SelectItem>
                  <SelectItem value="medium">100 - 1,000</SelectItem>
                  <SelectItem value="large">1,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results count */}
          <p className="text-muted-foreground mb-6">
            {filteredCompanies.length} empresas encontradas
          </p>

          {/* Company Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredCompanies.map((company) => (
              <div
                key={company.id}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-xl font-bold text-primary">{company.logo}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-foreground text-lg truncate">
                        {company.name}
                      </h3>
                      <div className="flex items-center gap-1 shrink-0">
                        <Star className="w-4 h-4 fill-warning text-warning" />
                        <span className="text-sm font-medium">{company.rating}</span>
                        <span className="text-xs text-muted-foreground">({company.reviews})</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{company.description}</p>
                    
                    <div className="flex flex-wrap gap-3 mt-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {company.industry}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {company.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {company.employees}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <span className="text-sm font-medium text-primary flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {company.openJobs} empleos activos
                      </span>
                      <Link to={`/empleos?empresa=${encodeURIComponent(company.name)}`}>
                        <Button size="sm">Ver empleos</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
