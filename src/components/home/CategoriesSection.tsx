import { Link } from "react-router-dom";
import { 
  Code, 
  TrendingUp, 
  Megaphone, 
  Headphones, 
  Users, 
  Calculator,
  Palette,
  Stethoscope
} from "lucide-react";

const categories = [
  { name: "Tecnología", icon: Code, count: 1250, color: "bg-blue-500/10 text-blue-600" },
  { name: "Ventas", icon: TrendingUp, count: 890, color: "bg-green-500/10 text-green-600" },
  { name: "Marketing", icon: Megaphone, count: 650, color: "bg-orange-500/10 text-orange-600" },
  { name: "Atención al Cliente", icon: Headphones, count: 420, color: "bg-purple-500/10 text-purple-600" },
  { name: "Recursos Humanos", icon: Users, count: 380, color: "bg-pink-500/10 text-pink-600" },
  { name: "Finanzas", icon: Calculator, count: 520, color: "bg-emerald-500/10 text-emerald-600" },
  { name: "Diseño", icon: Palette, count: 340, color: "bg-cyan-500/10 text-cyan-600" },
  { name: "Salud", icon: Stethoscope, count: 280, color: "bg-red-500/10 text-red-600" },
];

export function CategoriesSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Explora por categoría
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encuentra oportunidades en tu área de especialización
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={`/empleos?categoria=${encodeURIComponent(category.name)}`}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.count.toLocaleString()} empleos
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
