import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <div className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/50 animate-fade-in">
      <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="text-primary-foreground" size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-muted-foreground">
            <span className="text-accent mr-2 mt-0.5 font-bold">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
