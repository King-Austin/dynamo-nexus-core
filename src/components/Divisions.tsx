import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Sprout, HardHat, Fuel, Scale, Film, Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import realEstateImage from "@/assets/real-estate-building.png";
import agrolandImage from "@/assets/agroland-lady.png";
import constructionImage from "@/assets/construction-team.jpg";
import oilGasImage from "@/assets/oil-gas-plant.png";
import lawfirmImage from "@/assets/lawfirm-justice.jpg";
import mediaImage from "@/assets/media-man.png";
import hrTrainingImage from "@/assets/hr-training.png";

const Divisions = () => {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation();
  
  const divisions = [
    {
      id: "real-estate",
      icon: Building2,
      title: "Dynamo Real Estate",
      description: "Premium residential and commercial properties across Africa. We develop modern estates with world-class amenities and infrastructure.",
      image: realEstateImage,
      features: ["Luxury Estates", "Commercial Properties", "Land Development"],
      statement: "Building the future of African real estate, one property at a time.",
    },
    {
      id: "agroland",
      icon: Sprout,
      title: "Dynamo Agroland (Agriculture)",
      description: "Sustainable agricultural investments with guaranteed returns. Invest in palm oil, rice farms, yam, coconut plantations and more.",
      image: agrolandImage,
      features: ["Palm Oil Plantations", "Rice Farms", "Investment Plans"],
      link: "https://landpalmdream.vercel.app/",
    },
    {
      id: "construction",
      icon: HardHat,
      title: "Dynamo Construction",
      description: "Expert construction services delivering quality infrastructure projects. From residential complexes to commercial buildings.",
      image: constructionImage,
      features: ["Residential Projects", "Commercial Buildings", "Infrastructure"],
      statement: "Constructing excellence through precision engineering and innovative design.",
    },
    {
      id: "oil-gas",
      icon: Fuel,
      title: "Dynamo Oil & Gas",
      description: "Strategic partnerships in the energy sector. Contributing to Africa's energy independence through sustainable practices.",
      image: oilGasImage,
      features: ["Energy Solutions", "Strategic Partnerships", "Sustainability"],
      link: "https://dynamo-gas-flow.vercel.app/",
    },
    {
      id: "lawfirm",
      icon: Scale,
      title: "Dynamo Law Firm",
      description: "Comprehensive legal services with expertise in corporate law, real estate, and business transactions. Your trusted legal partner.",
      image: lawfirmImage,
      features: ["Corporate Law", "Real Estate Law", "Legal Consulting"],
      link: "https://dynamo-legal-forge.vercel.app/",
    },
    {
      id: "media",
      icon: Film,
      title: "Dynamo Media",
      description: "Creative media solutions including digital marketing, content creation, and brand development. Bringing your vision to life.",
      image: mediaImage,
      features: ["Digital Marketing", "Content Creation", "Brand Development"],
      link: "https://white-space-dynamo.vercel.app/",
    },
    {
      id: "hr-business",
      icon: Briefcase,
      title: "Human Resource & Business Development",
      description: "Owners of Wolves & Metrics Ltd. Comprehensive business solutions driving organizational growth and excellence through strategic human capital management.",
      image: hrTrainingImage,
      features: ["Consulting Services", "Management Expertise", "Recruitment Services", "Training & Mobilization", "Marketing & Sales"],
      statement: "Empowering businesses through strategic talent acquisition and development.",
    },
  ];

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-custom">
        <div 
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-primary mb-4">
            Our Divisions
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-accent mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Diverse excellence across multiple industries
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {divisions.map((division, index) => {
            const DivisionCard = () => {
              const { ref, inView } = useScrollAnimation({ threshold: 0.2 });
              
              return (
                <div 
                  ref={ref}
                  key={division.id}
                  id={division.id}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-6 sm:gap-8 lg:gap-12 items-center transition-all duration-1000 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                >
                  <div className="w-full lg:w-1/2">
                    <img
                      src={division.image}
                      alt={division.title}
                      className={`rounded-2xl shadow-card-hover w-full ${
                        division.id === "hr-business" ? "h-80 sm:h-96 lg:h-[500px]" : "h-64 sm:h-80 lg:h-[350px]"
                      } object-cover hover-lift`}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center animate-bounce-subtle">
                      <division.icon className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary">{division.title}</h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {division.description}
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {division.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary rounded-full text-xs sm:text-sm font-medium text-primary smooth-transition hover:bg-accent/10"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    {division.link ? (
                      <Button 
                        className="btn-gold mt-4 w-full sm:w-auto"
                        onClick={() => window.open(division.link, '_blank')}
                      >
                        Visit Website
                      </Button>
                    ) : division.statement ? (
                      <p className="mt-4 text-base sm:text-lg font-medium text-primary italic">
                        {division.statement}
                      </p>
                    ) : null}
                  </div>
                </div>
              );
            };
            
            return <DivisionCard key={division.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Divisions;
