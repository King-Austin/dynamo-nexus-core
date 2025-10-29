import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import riceMarketingImg from "@/assets/projects/rice-marketing.webp";
import estateDuplexImg from "@/assets/projects/estate-duplex.jpg";
import estateSemiDetachImg from "@/assets/projects/estate-semi-detach.jpg";
import estateTerraceImg from "@/assets/projects/estate-terrace.jpg";
import agroCityExtensionImg from "@/assets/projects/agro-city-extension.jpg";
import greenerCityImg from "@/assets/projects/greener-city.jpg";
import millenniumCityLayoutImg from "@/assets/projects/millennium-city-layout.jpg";
import teamRiceBagsImg from "@/assets/projects/team-rice-bags.png";
import riceNutritionalImg from "@/assets/projects/rice-nutritional-info.jpg";
import riceBagsStockImg from "@/assets/projects/rice-bags-stock.jpg";
import riceBrandPromoImg from "@/assets/projects/rice-brand-promo.jpg";
import riceAmbassadorsImg from "@/assets/projects/rice-ambassadors.jpg";

const Projects = () => {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation();
  const { ref: gridRef, inView: gridInView } = useScrollAnimation({ threshold: 0.1 });
  
  const projectImages = [
    { image: riceMarketingImg, alt: "Dynamo Rice Marketing - Premium Quality Rice" },
    { image: riceBrandPromoImg, alt: "Dynamo Premium Rice Ezeabatago - Brand Ambassador" },
    { image: riceNutritionalImg, alt: "Dynamo Premium Rice - Nutritional Value & Recipe" },
    { image: riceAmbassadorsImg, alt: "Dynamo Rice Product Launch - Brand Ambassadors" },
    { image: riceBagsStockImg, alt: "Dynamo Premium Rice - 50kg & 25kg Bags" },
    { image: teamRiceBagsImg, alt: "Dynamo Group Team with Rice Products" },
    { image: estateDuplexImg, alt: "Dynamo Group Estate - Millennium City Layout Duplex" },
    { image: estateSemiDetachImg, alt: "Dynamo Group Estate - Semi-Detach 4 Bedroom Security House" },
    { image: estateTerraceImg, alt: "Dynamo Group Estate - Terrace 4 Bedroom BQ" },
    { image: agroCityExtensionImg, alt: "Dynamo Agro City Extension - Mgbakwu, Awka" },
    { image: greenerCityImg, alt: "Dynamo Greener City - Kuje, Abuja" },
    { image: millenniumCityLayoutImg, alt: "Dynamo Group Estate - Millennium City Layout Agu Awka" },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div 
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-primary mb-4">
            Project Gallery
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Simple Photo Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {projectImages.map((project, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-lg group aspect-square transition-all duration-700 ${
                gridInView 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ 
                transitionDelay: gridInView ? `${index * 80}ms` : '0ms'
              }}
            >
              <img 
                src={project.image} 
                alt={project.alt}
                className="w-full h-full object-cover smooth-transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 smooth-transition"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
