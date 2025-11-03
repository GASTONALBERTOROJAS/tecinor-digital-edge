import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Proyectos = () => {
  const projects = [
    {
      title: "Automatización de Reporting para Grupo Manufacturero Europeo",
      industry: "Manufactura Automotriz",
      challenge: "Una empresa con 5 plantas en Europa invertía más de 200 horas mensuales en consolidar informes de producción manualmente desde múltiples sistemas SAP y hojas Excel.",
      solution: "Implementamos un sistema automatizado de extracción, transformación y carga (ETL) que conecta todos los sistemas SAP, procesa datos en tiempo real y genera dashboards interactivos en Power BI.",
      results: [
        "Reducción del 90% en tiempo de reporting (de 200h a 20h mensuales)",
        "Visibilidad en tiempo real de KPIs de producción",
        "ROI recuperado en menos de 6 meses",
        "Eliminación de errores humanos en consolidación de datos"
      ]
    },
    {
      title: "Plataforma de Gestión de Mantenimiento Predictivo",
      industry: "Industria Química",
      challenge: "Planta química con paradas no planificadas que generaban pérdidas de €500K anuales. Necesitaban predecir fallos antes de que ocurrieran.",
      solution: "Desarrollamos una plataforma IoT que recoge datos de sensores en tiempo real, aplica algoritmos de machine learning para predecir fallos y genera alertas tempranas a equipos de mantenimiento.",
      results: [
        "Reducción del 75% en paradas no planificadas",
        "Ahorro anual de €375K en costes de producción",
        "Aumento del 15% en disponibilidad de equipos críticos",
        "Extensión de vida útil de maquinaria en 20%"
      ]
    },
    {
      title: "Transformación Digital de Operaciones Logísticas",
      industry: "Distribución y Logística",
      challenge: "Operador logístico con procesos manuales de gestión de flota, rutas ineficientes y falta de visibilidad en tiempo real de envíos.",
      solution: "Creamos una plataforma integral que incluye optimización de rutas con IA, tracking GPS en tiempo real, app móvil para conductores y portal web para clientes con visibilidad completa.",
      results: [
        "Reducción del 30% en kilómetros recorridos",
        "Mejora del 40% en puntualidad de entregas",
        "Reducción de costes operativos de €200K anuales",
        "Satisfacción del cliente incrementada al 95%"
      ]
    },
    {
      title: "Implementación de Industria 4.0 en Planta de Producción",
      industry: "Electrónica Industrial",
      challenge: "Fabricante de componentes electrónicos buscaba modernizar su planta para competir globalmente, necesitando digitalización completa de procesos productivos.",
      solution: "Proyecto integral de transformación que incluyó digitalización de líneas de producción, implementación de sistemas MES, gemelos digitales y analítica avanzada para optimización continua.",
      results: [
        "Incremento del 25% en productividad general",
        "Reducción del 40% en defectos de calidad",
        "Trazabilidad completa de productos en tiempo real",
        "Certificación Industria 4.0 obtenida"
      ]
    },
    {
      title: "Sistema ERP Personalizado para Grupo Industrial",
      industry: "Fabricación de Maquinaria",
      challenge: "Empresa familiar en crecimiento con sistemas desconectados en finanzas, producción, ventas e inventario. Necesitaban unificación urgente.",
      solution: "Desarrollamos un ERP a medida integrado con sus procesos únicos, incluyendo módulos de producción por pedido, gestión de proyectos complejos y facturación internacional.",
      results: [
        "Unificación de 7 sistemas dispersos en una plataforma",
        "Reducción del 50% en ciclo de orden a entrega",
        "Visibilidad financiera en tiempo real",
        "Escalabilidad para crecimiento de 300%"
      ]
    },
    {
      title: "Optimización Energética con IA",
      industry: "Industria Alimentaria",
      challenge: "Planta procesadora con costes energéticos que representaban el 18% de gastos operativos, sin visibilidad sobre consumos ni patrones de uso.",
      solution: "Instalamos sistema de monitorización energética inteligente con sensores IoT y algoritmos de IA que identifican ineficiencias y optimizan consumo en tiempo real.",
      results: [
        "Reducción del 22% en costes energéticos anuales",
        "Ahorro de €180K en primer año",
        "Reducción de 450 toneladas de CO₂ anuales",
        "Certificación energética mejorada"
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
              Casos de Éxito
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Proyectos reales que demuestran el impacto tangible de nuestras soluciones tecnológicas en empresas industriales europeas.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl shadow-card border border-border p-8 hover:shadow-card-hover transition-shadow animate-fade-in"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                    {project.industry}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {project.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      Desafío
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Solución
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Resultados Alcanzados</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Impacto en Números
            </h2>
            <p className="text-lg text-muted-foreground">
              Resultados agregados de nuestros proyectos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-card text-center border border-border">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Proyectos Completados</div>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-card text-center border border-border">
              <div className="text-4xl font-bold text-primary mb-2">€5M+</div>
              <div className="text-muted-foreground">Ahorros Generados</div>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-card text-center border border-border">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Satisfacción Cliente</div>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-card text-center border border-border">
              <div className="text-4xl font-bold text-primary mb-2">30%</div>
              <div className="text-muted-foreground">Mejora Promedio Eficiencia</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            ¿Su Empresa Será el Próximo Caso de Éxito?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Hablemos sobre cómo podemos generar resultados similares en su organización
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent-hover">
            <Link to="/contacto">
              Iniciar su Proyecto <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Proyectos;
