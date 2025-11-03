import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-bold">Tecinor</span>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Tecnología e ingeniería para una industria más eficiente
            </p>
            <div className="flex space-x-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:contacto@tecinor.com"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/proyectos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Automatización de Procesos</li>
              <li>Desarrollo de Software</li>
              <li>Análisis de Datos</li>
              <li>Optimización Industrial</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:contacto@tecinor.com" className="hover:text-primary-foreground transition-colors">
                  contacto@tecinor.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+34 900 000 000</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70 space-y-2 md:space-y-0">
            <p>© {currentYear} Tecinor. Todos los derechos reservados.</p>
            <div className="flex space-x-6">
              <Link to="/legal" className="hover:text-primary-foreground transition-colors">
                Aviso Legal
              </Link>
              <Link to="/privacidad" className="hover:text-primary-foreground transition-colors">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
