import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const OurPromise = () => {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation();
  const { ref: contentRef, inView: contentInView } = useScrollAnimation({ threshold: 0.1 });
  
  const responsibilities = [
    {
      title: "FIRST",
      content: "Our FIRST responsibility is to Our customers, the distinctive men and women who obtain our services, for their faith in us for quality services. To them we promise to always reduce cost and continually improve our quality."
    },
    {
      title: "SECOND",
      content: "Our SECOND responsibility is to our employees, the smart gentlemen and women that work with us, they must feel comfortable and derive a sense of security from their jobs, responsible working hours, adequate salaries. Their supervisors must be considerate, fair minded, understanding and reasonable. Each employee will be considered as an individual standing on his own right by merit."
    },
    {
      title: "THIRD",
      content: "Our THIRD responsibility is to the communities we exist in, we must be good citizens, create employment, support good works and charitable deeds, pay our own justifiable quota of taxes, provide social amenities and obligations deemed necessary."
    },
    {
      title: "FOURTH",
      content: "Our FOURTH responsibility is to our management. Our executives must be prominent personalities who take responsibility of their decisions. They must be persons of great reputation, evidently talented, experienced and credible."
    },
    {
      title: "FINALLY",
      content: "FINALLY, our responsibility is to dynamo group. Business just maintain transparency, make sound profit, beat competitions, preserve wealth, mistakes paid for, research carried out, subsidiaries established, new plants and machines installed."
    }
  ];

  return (
    <section id="our-promise" className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container-custom">
        <div 
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-primary mb-4">
            Our Promise Elaborated
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-accent mx-auto mb-6 sm:mb-8"></div>
        </div>

        <div 
          ref={contentRef}
          className="max-w-5xl mx-auto space-y-6"
        >
          {responsibilities.map((item, index) => (
            <Card 
              key={index}
              className={`card-hover border-l-4 border-l-accent transition-all duration-700 ${
                contentInView 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
              style={{ 
                transitionDelay: contentInView ? `${index * 100}ms` : '0ms'
              }}
            >
              <CardContent className="pt-6 pb-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm sm:text-base">{index + 1}</span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-foreground leading-relaxed flex-1">
                    {item.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPromise;
