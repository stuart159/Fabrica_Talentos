import { useState } from "react";
import { Search, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-team.jpg";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/empleos?q=${encodeURIComponent(searchQuery)}&ubicacion=${encodeURIComponent(location)}`);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Hero Image with Overlay */}
      <div className="relative h-[500px] md:h-[550px]">
        <img
          src={heroImage}
          alt="Equipo profesional colaborando"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground/60" />
        
        {/* Content */}
        <div className="relative container h-full flex flex-col justify-center py-12">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
              Encuentra el trabajo de tus sueños
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
              Explora miles de oportunidades laborales en empresas innovadoras y en crecimiento. Tu próximo gran paso profesional está a solo un clic de distancia.
            </p>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="bg-background rounded-xl p-2 shadow-xl">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Busca por cargo, habilidad o empresa"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 border-0 bg-transparent focus-visible:ring-0"
                  />
                </div>
                <div className="hidden md:block w-px bg-border" />
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Ubicación"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10 h-12 border-0 bg-transparent focus-visible:ring-0"
                  />
                </div>
                <Button type="submit" size="lg" className="h-12 px-8">
                  Buscar
                </Button>
              </div>
            </form>

            {/* Popular Searches */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-sm text-primary-foreground/70">Populares:</span>
              {["Desarrollador", "Diseñador UX", "Marketing", "Ventas", "Remoto"].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="text-sm text-primary-foreground/90 hover:text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 px-3 py-1 rounded-full transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
