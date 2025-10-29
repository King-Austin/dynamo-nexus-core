import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";
import awardsImage from "@/assets/awards-excellence.jpg";
import executiveImage from "@/assets/hero-executive-services.jpg";
import promiseImage from "@/assets/hero-our-promise.jpg";
import coreValuesImage from "@/assets/hero-core-values.jpg";
const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const heroContent = [{
    src: awardsImage,
    alt: "Award-Winning Excellence",
    title: "Award-Winning Excellence & Leadership",
    subtitle: "Recognized for outstanding achievements in sustainable development across Africa"
  }, {
    src: executiveImage,
    alt: "Peace of Mind - Dynamo Group Services",
    title: "Your Trusted Partner for Peace of Mind",
    subtitle: "Real Estate • Cooking Gas • Construction • Schools • Agriculture • Media/Event Coverage"
  }, {
    src: promiseImage,
    alt: "Our Promise Elaborated",
    title: "Our Promise to You - Commitment to Excellence",
    subtitle: "Five core responsibilities that guide everything we do for our customers, employees, and communities"
  }, {
    src: coreValuesImage,
    alt: "Core Values and Principles",
    title: "Built on Integrity, Quality & Peace of Mind",
    subtitle: "Customer-centric approach driven by nobility, diligence, and ethical leadership"
  }];
  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider with Overlay */}
      <div className="absolute inset-0 z-0">
        <Carousel setApi={setApi} opts={{
        align: "start",
        loop: true
      }} plugins={[Autoplay({
        delay: 3000
      })]} className="w-full h-full">
          <CarouselContent className="h-screen m-0">
            {heroContent.map((content, index) => <CarouselItem key={index} className="p-0 h-screen">
                <img src={content.src} alt={content.alt} className="w-full h-full object-cover object-center" />
              </CarouselItem>)}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/15"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/25"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white px-4">
        <div className="max-w-4xl mx-auto animate-fade-in" key={current}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            {heroContent[current].title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            {heroContent[current].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="btn-gold text-lg px-8 py-6 group" onClick={() => document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Explore Opportunities
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/20 border-white/50 text-white hover:bg-white/30 backdrop-blur-md shadow-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        
      </div>

      {/* Wave Divider */}
      <svg
        className="absolute bottom-0 left-0 w-full block overflow-hidden"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ height: '80px' }}
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,224L60,218.7C120,213,240,203,360,208C480,213,600,235,720,229.3C840,224,960,192,1080,186.7C1200,181,1320,203,1380,213.3L1440,224L1440,320L0,320Z"
        ></path>
      </svg>
    </section>;
};
export default Hero;