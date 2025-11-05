import { Link } from "react-router-dom";
import { ArrowRight, Cog, Code, BarChart3, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import Hero3D from "@/components/Hero3D";
import heroImage from "@/assets/hero-industrial.jpg";

const Index = () => {
  const services = [
    {
      icon: Cog,
      title: "Automatización de Procesos",
      description: "Optimizamos sus operaciones con RPA, macros avanzadas e integración con sistemas SAP y Excel.",
      features: [
        "Robotic Process Automation (RPA)",
        "Integración SAP/Excel",
        "Workflows personalizados"
      ]
    },
    {
      icon: Code,
      title: "Desarrollo de Software",
      description: "Creamos soluciones tecnológicas a medida para cubrir las necesidades específicas de su empresa.",
      features: [
        "Aplicaciones web y móviles",
        "Integraciones API",
        "Arquitecturas escalables"
      ]
    },
    {
      icon: BarChart3,
      title: "Análisis de Datos",
      description: "Transformamos sus datos en decisiones estratégicas con Power BI y herramientas avanzadas de análisis.",
      features: [
        "Dashboards Power BI",
        "Análisis predictivo",
        "Business Intelligence"
      ]
    },
    {
      icon: TrendingUp,
      title: "Optimización Industrial",
      description: "Mejoramos la eficiencia de sus procesos industriales mediante ingeniería y tecnología.",
      features: [
        "Lean Manufacturing",
        "Industria 4.0",
        "Mejora continua"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with 3D */}
      <section className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Tecnología industrial moderna" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
        </div>
        
        {/* 3D Element */}
        <Hero3D />
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in border border-accent/30">
              <Sparkles className="text-accent" size={20} />
              <span className="text-primary-foreground font-medium">Innovación Industrial 4.0</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground animate-fade-in bg-gradient-to-r from-white via-white to-accent/80 bg-clip-text text-transparent leading-tight">
              Tecnología e Ingeniería para una Industria Más Eficiente
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/95 mb-8 leading-relaxed animate-slide-in-left font-light">
              Ayudamos a empresas industriales europeas a optimizar sus procesos mediante automatización, desarrollo de software y análisis de datos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-hover text-lg shadow-lg hover:shadow-xl transition-all group">
                <Link to="/contacto">
                  Solicitar Propuesta 
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-lg backdrop-blur-sm">
                <Link to="/servicios">
                  Ver Servicios
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluciones integrales para la transformación digital de su empresa industrial
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/servicios">
                Ver Todos los Servicios <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            ¿Listo para Optimizar sus Procesos?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Descubra cómo nuestras soluciones pueden transformar su empresa industrial
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent-hover">
            <Link to="/contacto">
              Contactar Ahora <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
