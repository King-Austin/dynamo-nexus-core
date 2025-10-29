import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonials = () => {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation();
  const { ref: carouselRef, inView: carouselInView } = useScrollAnimation({ threshold: 0.2 });
  
  const testimonials = [
    {
      name: "Adebayo Okonkwo",
      role: "Real Estate Investor",
      company: "Lagos Properties Ltd",
      content: "Dynamo Group transformed our investment portfolio. Their Millennium City project exceeded all expectations with world-class infrastructure and exceptional returns.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adebayo"
    },
    {
      name: "Chioma Nwosu",
      role: "Agricultural Director",
      company: "Green Harvest Co.",
      content: "Working with Dynamo Agroland has been revolutionary for our farming operations. Their sustainable practices and modern technology have doubled our yields.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chioma"
    },
    {
      name: "Ibrahim Mohammed",
      role: "Business Owner",
      company: "Abuja Commercial Hub",
      content: "The construction quality and attention to detail in our commercial complex was outstanding. Dynamo delivered on time and within budget.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ibrahim"
    },
    {
      name: "Folake Adeyemi",
      role: "Property Developer",
      company: "Urban Estates Nigeria",
      content: "Dynamo's professionalism and expertise in real estate development is unmatched. Their projects set the standard for excellence across Africa.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Folake"
    },
    {
      name: "Emeka Okafor",
      role: "Agricultural Consultant",
      company: "AgriTech Solutions",
      content: "The innovation and commitment to sustainable agriculture at Dynamo Agroland is truly inspiring. They're leading the future of farming in Nigeria.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emeka"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container-custom">
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-1000 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear what our valued clients say about their experience working with Dynamo Group
          </p>
        </div>

        <div 
          ref={carouselRef}
          className={`transition-all duration-1000 ${
            carouselInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 1000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="card-hover h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      
                      <p className="text-foreground mb-6 flex-grow italic">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center gap-3 pt-4 border-t border-border">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full bg-secondary"
                        />
                        <div>
                          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
