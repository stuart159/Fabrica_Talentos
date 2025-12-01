import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  Briefcase,
  Building2,
  Bookmark,
  Share2,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const jobData = {
  id: 1,
  title: "Ingeniero de Software",
  company: "Tech Innovators Inc.",
  location: "Ciudad de México y alrededores",
  type: "Tiempo completo",
  modality: "Remoto",
  postedAgo: "Publicado hace 2 semanas",
  logo: "TI",
  description:
    "Estamos buscando un ingeniero de software talentoso y motivado para unirse a nuestro equipo. El candidato ideal tendrá una sólida formación en informática y experiencia en el desarrollo de aplicaciones web. Será responsable de diseñar, desarrollar y mantener aplicaciones de software de alta calidad.",
  responsibilities: [
    "Desarrollar nuevas características y funcionalidades para nuestras aplicaciones web.",
    "Escribir código limpio, eficiente y bien documentado.",
    "Colaborar con otros ingenieros para diseñar e implementar soluciones técnicas.",
    "Participar en revisiones de código y proporcionar retroalimentación constructiva.",
  ],
  requirements: [
    "Licenciatura en Informática o campo relacionado.",
    "Experiencia en el desarrollo de aplicaciones web utilizando lenguajes como Java, Python o JavaScript.",
    "Familiaridad con frameworks como React, Angular o Vue.js.",
    "Conocimiento de bases de datos relacionales y no relacionales.",
  ],
  companyDescription:
    "Somos una empresa de tecnología innovadora que se centra en el desarrollo de soluciones de software para diversas industrias. Ofrecemos un ambiente de trabajo dinámico y colaborativo, con oportunidades de crecimiento profesional y desarrollo personal. Valoramos la creatividad, la innovación y el trabajo en equipo.",
};

export default function JobDetail() {
  const { id } = useParams();

  const handleApply = () => {
    toast({
      title: "Aplicación enviada",
      description: "Tu aplicación ha sido enviada exitosamente. Te contactaremos pronto.",
    });
  };

  const handleSave = () => {
    toast({
      title: "Empleo guardado",
      description: "Este empleo ha sido guardado en tu lista.",
    });
  };

  return (
    <Layout>
      <div className="bg-muted/30 min-h-screen py-8">
        <div className="container max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/empleos" className="hover:text-primary transition-colors">
              Empleos
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{jobData.title}</span>
          </nav>

          {/* Job Header */}
          <div className="bg-card rounded-xl border border-border p-6 md:p-8 mb-6">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-2xl font-bold text-primary">{jobData.logo}</span>
              </div>
              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {jobData.title}
                </h1>
                <p className="text-muted-foreground mb-4">
                  {jobData.postedAgo} · {jobData.type} · {jobData.modality}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" onClick={handleApply}>
                    Aplicar
                  </Button>
                  <Button variant="outline" size="lg" onClick={handleSave}>
                    <Bookmark className="w-4 h-4 mr-2" />
                    Guardar
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Job Content */}
          <div className="bg-card rounded-xl border border-border p-6 md:p-8 space-y-8">
            {/* Description */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">
                Descripción del empleo
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {jobData.description}
              </p>
            </section>

            {/* Responsibilities */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">
                Responsabilidades
              </h2>
              <ul className="space-y-3">
                {jobData.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-border mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Requirements */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">Requisitos</h2>
              <ul className="space-y-3">
                {jobData.requirements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-border mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Company Info */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">
                Acerca de la empresa
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {jobData.companyDescription}
              </p>
            </section>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
              <Button size="lg" onClick={handleApply}>
                Aplicar
              </Button>
              <Button variant="outline" size="lg" onClick={handleSave}>
                <Bookmark className="w-4 h-4 mr-2" />
                Guardar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
