import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    toast({
      title: "Mensaje enviado correctamente",
      description: "Nos pondremos en contacto con usted lo antes posible.",
    });

    // Reset form
    setFormData({
      nombre: "",
      empresa: "",
      email: "",
      telefono: "",
      mensaje: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Contacto
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              ¿Listo para optimizar sus procesos industriales? Hablemos sobre cómo podemos ayudarle.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Información de Contacto
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary-foreground" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:contacto@tecinor.com" className="text-muted-foreground hover:text-primary transition-colors">
                        contacto@tecinor.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary-foreground" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                      <a href="tel:+34900000000" className="text-muted-foreground hover:text-primary transition-colors">
                        +34 687 74 61 83
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary-foreground" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Ubicación</h3>
                      <p className="text-muted-foreground">
                        Valencia, España<br />
                        Atendemos toda Europa
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-card border border-border">
                <h3 className="font-semibold text-foreground mb-3">Horario de Atención</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sábado - Domingo:</span>
                    <span className="font-medium">Cerrado</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-xl shadow-card border border-border">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Solicite una Propuesta
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                        Nombre Completo *
                      </label>
                      <Input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Juan Pérez"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium text-foreground mb-2">
                        Empresa *
                      </label>
                      <Input
                        id="empresa"
                        name="empresa"
                        type="text"
                        required
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Su Empresa S.L."
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Corporativo *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="juan.perez@empresa.com"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                        Teléfono
                      </label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="+34 600 000 000"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Cuéntenos sobre su proyecto o necesidades..."
                      rows={6}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent-hover"
                  >
                    Enviar Mensaje <Send className="ml-2" size={18} />
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Campos obligatorios. Sus datos serán tratados de acuerdo con nuestra política de privacidad.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            ¿Prefiere Hablar Directamente?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nuestro equipo está disponible para responder sus preguntas inmediatamente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline">
              <a href="tel:+34900000000">
                <Phone className="mr-2" size={18} />
                Llamar Ahora
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:contacto@tecinor.com">
                <Mail className="mr-2" size={18} />
                Enviar Email
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
