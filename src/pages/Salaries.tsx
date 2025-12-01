import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, TrendingUp, TrendingDown, Minus, DollarSign, MapPin, Briefcase } from "lucide-react";

const salaryData = [
  {
    id: 1,
    title: "Ingeniero de Software",
    category: "Tecnología",
    avgSalary: 8000000,
    minSalary: 4000000,
    maxSalary: 12000000,
    trend: "up",
    trendPercent: 8,
    openings: 1250,
  },
  {
    id: 2,
    title: "Diseñador UX/UI",
    category: "Diseño",
    avgSalary: 4300000,
    minSalary: 2300000,
    maxSalary: 7000000,
    trend: "up",
    trendPercent: 12,
    openings: 450,
  },
  {
    id: 3,
    title: "Product Manager",
    category: "Producto",
    avgSalary: 8000000,
    minSalary: 6000000,
    maxSalary: 18000000,
    trend: "up",
    trendPercent: 15,
    openings: 320,
  },
  {
    id: 4,
    title: "Analista de Datos",
    category: "Tecnología",
    avgSalary: 8000000,
    minSalary: 4000000,
    maxSalary: 22000000,
    trend: "up",
    trendPercent: 10,
    openings: 680,
  },
  {
    id: 5,
    title: "Gerente de Marketing",
    category: "Marketing",
    avgSalary: 5000000,
    minSalary: 2400000,
    maxSalary: 12000000,
    trend: "stable",
    trendPercent: 2,
    openings: 280,
  },
  {
    id: 6,
    title: "Contador",
    category: "Finanzas",
    avgSalary: 4500000,
    minSalary: 2500000,
    maxSalary: 8500000,
    trend: "stable",
    trendPercent: 1,
    openings: 520,
  },
  {
    id: 7,
    title: "Ejecutivo de Ventas",
    category: "Ventas",
    avgSalary: 5000000,
    minSalary: 2800000,
    maxSalary: 10000000,
    trend: "up",
    trendPercent: 5,
    openings: 890,
  },
  {
    id: 8,
    title: "DevOps Engineer",
    category: "Tecnología",
    avgSalary: 8500000,
    minSalary: 5000000,
    maxSalary: 16000000,
    trend: "up",
    trendPercent: 18,
    openings: 380,
  },
  {
    id: 9,
    title: "Recursos Humanos",
    category: "RRHH",
    avgSalary: 4800000,
    minSalary: 2800000,
    maxSalary: 90000000,
    trend: "stable",
    trendPercent: 3,
    openings: 340,
  },
  {
    id: 10,
    title: "Data Scientist",
    category: "Tecnología",
    avgSalary: 9000000,
    minSalary: 5500000,
    maxSalary: 17000000,
    trend: "up",
    trendPercent: 20,
    openings: 290,
  },
];

const salaryByLocation = [
  { location: "Bogotá", multiplier: 1.15, avgSalary: 7200000 },
  { location: "Medellin", multiplier: 1.10, avgSalary: 6800000 },
  { location: "Bucaramanga", multiplier: 1.05, avgSalary: 6500000 },
  { location: "Cali", multiplier: 1.0, avgSalary: 6200000 },
  { location: "Armenia", multiplier: 0.95, avgSalary: 5800000 },
  { location: "Ibague", multiplier: 1.08, avgSalary: 6700000 },
];

function formatSalary(amount: number) {
  return `$${amount.toLocaleString()} COP`;
}

function TrendIcon({ trend, percent }: { trend: string; percent: number }) {
  if (trend === "up") {
    return (
      <span className="flex items-center gap-1 text-success text-sm font-medium">
        <TrendingUp className="w-4 h-4" />
        +{percent}%
      </span>
    );
  }
  if (trend === "down") {
    return (
      <span className="flex items-center gap-1 text-destructive text-sm font-medium">
        <TrendingDown className="w-4 h-4" />
        -{percent}%
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1 text-muted-foreground text-sm font-medium">
      <Minus className="w-4 h-4" />
      {percent}%
    </span>
  );
}

export default function Salaries() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredSalaries = salaryData.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const avgMarketSalary = Math.round(
    salaryData.reduce((acc, item) => acc + item.avgSalary, 0) / salaryData.length
  );

  return (
    <Layout>
      <div className="bg-muted/30 min-h-screen">
        {/* Header */}
        <div className="bg-primary py-12 md:py-16">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Guía de Salarios
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Descubre los salarios promedio por puesto y toma decisiones informadas sobre tu carrera profesional.
            </p>
          </div>
        </div>

        <div className="container py-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{formatSalary(avgMarketSalary)}</p>
              <p className="text-sm text-muted-foreground">Salario promedio</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">+9.4%</p>
              <p className="text-sm text-muted-foreground">Crecimiento anual</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <Briefcase className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">5,400+</p>
              <p className="text-sm text-muted-foreground">Empleos analizados</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">32</p>
              <p className="text-sm text-muted-foreground">Ciudades cubiertas</p>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-card rounded-xl border border-border p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar puesto o rol..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-[200px] h-12">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las categorías</SelectItem>
                  <SelectItem value="Tecnología">Tecnología</SelectItem>
                  <SelectItem value="Diseño">Diseño</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="Ventas">Ventas</SelectItem>
                  <SelectItem value="Finanzas">Finanzas</SelectItem>
                  <SelectItem value="RRHH">Recursos Humanos</SelectItem>
                  <SelectItem value="Producto">Producto</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Salary List */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Salarios por puesto
              </h2>
              {filteredSalaries.map((item) => (
                <div
                  key={item.id}
                  className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                      <span className="text-sm text-muted-foreground">{item.category}</span>
                    </div>
                    <TrendIcon trend={item.trend} percent={item.trendPercent} />
                  </div>

                  {/* Salary Range Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>{formatSalary(item.minSalary)}</span>
                      <span className="font-semibold text-foreground">
                        {formatSalary(item.avgSalary)} promedio
                      </span>
                      <span>{formatSalary(item.maxSalary)}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full"
                        style={{
                          marginLeft: `${((item.minSalary / item.maxSalary) * 100)}%`,
                          width: `${100 - ((item.minSalary / item.maxSalary) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.openings} ofertas activas
                    </span>
                    <span className="text-primary font-medium">Ver empleos →</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Salary by Location */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                Salarios por ubicación
              </h2>
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="space-y-4">
                  {salaryByLocation.map((item, index) => (
                    <div
                      key={item.location}
                      className="flex items-center justify-between py-3 border-b border-border last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                          {index + 1}
                        </span>
                        <div>
                          <p className="font-medium text-foreground">{item.location}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.multiplier > 1 ? `+${((item.multiplier - 1) * 100).toFixed(0)}%` : `${((item.multiplier - 1) * 100).toFixed(0)}%`} vs promedio
                          </p>
                        </div>
                      </div>
                      <span className="font-semibold text-foreground">
                        {formatSalary(item.avgSalary)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips Card */}
              <div className="bg-primary/5 rounded-xl border border-primary/20 p-6 mt-6">
                <h3 className="font-semibold text-foreground mb-3">
                  💡 Tips para negociar tu salario
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Investiga el rango salarial antes de la entrevista</li>
                  <li>• Considera beneficios adicionales (bonos, stock options)</li>
                  <li>• Destaca tu experiencia y logros específicos</li>
                  <li>• No menciones tu salario actual, enfócate en el valor que aportas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
