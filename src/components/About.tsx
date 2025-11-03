import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation();
  const { ref: cardsRef, inView: cardsInView } = useScrollAnimation({ threshold: 0.2 });
  
  const values = [
    {
      icon: Eye,
      title: "Our Vision",
      description: "To provide consistent wealth to all Dynamo Group Stakeholders.",
    },
    {
      icon: Target,
      title: "Our Mission",
      description: "To ensure the Presence of Dynamo Group Products or Services in every Household.",
    },
    {
      icon: Shield,
      title: "Core Values",
      description: "Excellence & Integrity, Resilience and Consistency, Efficiency & Dependability, Customer Centric.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div 
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-primary mb-4">
            Who We Are
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-accent mx-auto mb-6 sm:mb-8"></div>
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 max-w-6xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed flex-1">
              Dynamo Group is a forward-thinking conglomerate focused on empowering Africa through sustainable investments in real estate, agriculture, and construction. We provide top-notch services, premium estates, and profitable agro-investment programs for individuals and organizations.
            </p>
            <div className="flex-shrink-0 w-full lg:w-auto">
              <img 
                src={teamPhoto} 
                alt="Dynamo Group Team" 
                className="w-full max-w-md lg:w-80 xl:w-96 h-auto aspect-square object-cover rounded-full shadow-lg border-4 border-accent/20 mx-auto hover-lift"
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
