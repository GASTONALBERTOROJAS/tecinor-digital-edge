import { Link } from "react-router-dom";
import { Target, Eye, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import teamImage from "@/assets/team-collaboration.jpg";

const Nosotros = () => {
  const values = [
    {
      icon: Target,
      title: "Orientación a Resultados",
      description: "Nos enfocamos en generar valor real y medible para nuestros clientes, con soluciones que impactan directamente en sus resultados de negocio."
    },
    {
      icon: Eye,
      title: "Innovación Continua",
      description: "Mantenemos una visión actualizada de las últimas tecnologías y metodologías para ofrecer siempre las mejores soluciones del mercado."
    },
    {
      icon: Award,
      title: "Excelencia Técnica",
      description: "Combinamos ingeniería robusta con desarrollo de software de calidad, asegurando soluciones fiables y escalables."
    },
    {
      icon: Users,
      title: "Colaboración Cercana",
      description: "Trabajamos codo a codo con nuestros clientes, entendiendo su industria y adaptándonos a sus necesidades específicas."
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
              Sobre Tecinor
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Somos el puente entre la ingeniería tradicional y la innovación tecnológica para la industria europea.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Tecinor nace de la convergencia entre la experiencia industrial y la innovación tecnológica. Fundada por profesionales con décadas de experiencia en el sector manufacturero y de ingeniería, identificamos una necesidad crítica: las empresas industriales europeas requerían un socio que realmente entendiera sus procesos.
                </p>
                <p>
                  No somos solo desarrolladores de software, ni únicamente ingenieros industriales. Somos ambos. Esta combinación única nos permite diseñar e implementar soluciones que no solo son tecnológicamente avanzadas, sino que están profundamente alineadas con las realidades operativas de la industria.
                </p>
                <p>
                  Desde nuestros inicios, hemos ayudado a decenas de empresas industriales a digitalizar sus operaciones, automatizar procesos críticos y tomar decisiones basadas en datos. Cada proyecto refuerza nuestra convicción: la tecnología debe servir a la industria, no al revés.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={teamImage} 
                alt="Equipo de Tecinor colaborando" 
                className="rounded-xl shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-card border border-border">
              <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <Target className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Nuestra Misión</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Impulsar la competitividad de las empresas industriales europeas mediante soluciones tecnológicas innovadoras que optimizan procesos, reducen costes y generan valor sostenible. Nos comprometemos a ser el socio tecnológico de confianza que entiende tanto de ingeniería como de innovación digital.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-card border border-border">
              <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <Eye className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Nuestra Visión</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser reconocidos como el referente en transformación digital industrial en Europa, donde empresas manufactureras y de ingeniería nos elijan por nuestra capacidad única de combinar conocimiento técnico profundo con innovación tecnológica de vanguardia. Aspiramos a liderar el camino hacia la Industria 4.0 con soluciones prácticas y efectivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Nuestros Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada proyecto y relación con nuestros clientes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-card border border-border hover:shadow-card-hover transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <value.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            ¿Quiere Conocer Más Sobre Nosotros?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Hablemos sobre cómo podemos ayudar a su empresa a alcanzar sus objetivos
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent-hover">
            <Link to="/contacto">
              Contactar con Nosotros
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
