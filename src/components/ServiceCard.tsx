import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <div className="group bg-gradient-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border hover:border-primary/50 animate-fade-in relative overflow-hidden">
      {/* Animated background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
          <Icon className="text-primary-foreground" size={28} />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-start text-sm text-muted-foreground group-hover:translate-x-1 transition-transform duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="text-accent mr-2 mt-0.5 font-bold">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
