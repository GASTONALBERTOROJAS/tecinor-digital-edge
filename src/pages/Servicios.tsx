import { Link } from "react-router-dom";
import { Cog, Code, BarChart3, TrendingUp, Database, Cloud, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

const Servicios = () => {
  const mainServices = [
    {
      icon: Cog,
      title: "Automatización de Procesos",
      description: "Liberamos tiempo valioso de su equipo automatizando tareas repetitivas y optimizando workflows empresariales.",
      features: [
        "RPA (Robotic Process Automation)",
        "Desarrollo de macros avanzadas",
        "Integración SAP/Excel/ERP",
        "Workflows personalizados",
        "Automatización de reporting"
      ]
    },
    {
      icon: Code,
      title: "Desarrollo de Software a Medida",
      description: "Creamos aplicaciones y sistemas únicos diseñados específicamente para las necesidades de su empresa.",
      features: [
        "Aplicaciones web progresivas",
        "Desarrollo de apps móviles",
        "Sistemas de gestión personalizados",
        "Integraciones API complejas",
        "Arquitecturas cloud-native"
      ]
    },
    {
      icon: BarChart3,
      title: "Análisis de Datos y Power BI",
      description: "Convertimos sus datos en insights accionables mediante análisis avanzado y visualizaciones intuitivas.",
      features: [
        "Dashboards interactivos Power BI",
        "Data warehousing",
        "Análisis predictivo y ML",
        "Business Intelligence estratégico",
        "Reporting automatizado"
      ]
    },
    {
      icon: TrendingUp,
      title: "Optimización de Procesos Industriales",
      description: "Mejoramos la eficiencia operativa combinando ingeniería tradicional con tecnología de vanguardia.",
      features: [
        "Implementación Lean Manufacturing",
        "Industria 4.0 y IoT",
        "Mejora continua (Kaizen)",
        "Reducción de costes operativos",
        "Digitalización de planta"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Database,
      title: "Integración de Sistemas ERP",
      description: "Conectamos sus sistemas existentes para crear un ecosistema tecnológico unificado.",
      features: [
        "SAP, Oracle, Microsoft Dynamics",
        "Migraciones de datos",
        "APIs personalizadas"
      ]
    },
    {
      icon: Cloud,
      title: "Soluciones Cloud",
      description: "Migramos y optimizamos sus operaciones en la nube para mayor escalabilidad y eficiencia.",
      features: [
        "Azure, AWS, Google Cloud",
        "Arquitecturas híbridas",
        "DevOps y CI/CD"
      ]
    },
    {
      icon: Shield,
      title: "Ciberseguridad Industrial",
      description: "Protegemos sus activos digitales y sistemas industriales contra amenazas cibernéticas.",
      features: [
        "Auditorías de seguridad",
        "Protección de infraestructura",
        "Cumplimiento normativo"
      ]
    },
    {
      icon: Zap,
      title: "Consultoría Tecnológica",
      description: "Asesoramiento estratégico para la transformación digital de su organización.",
      features: [
        "Roadmaps tecnológicos",
        "Assessment de madurez digital",
        "Estrategia IT/OT"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Servicios Tecnológicos para la Industria
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Soluciones integrales que combinan ingeniería, tecnología y experiencia industrial para impulsar la transformación digital de su empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Servicios Principales
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nuestras áreas de especialización para maximizar la eficiencia de su operación
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {mainServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Servicios Complementarios
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Capacidades adicionales para una solución completa de transformación digital
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            ¿Necesita una Solución Personalizada?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Cada empresa es única. Hablemos sobre cómo podemos ayudarle específicamente
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent-hover">
            <Link to="/contacto">
              Solicitar Consulta Gratuita
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;
