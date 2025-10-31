import { Building2, Users, Briefcase, MapPin, HandCoins, UserCheck } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import founderImage from "@/assets/founder.jpg";

interface StatItem {
  icon: React.ElementType;
  value: string;
  label: string;
}

const CountUpAnimation = ({ end, duration = 2000 }: { end: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const endNum = parseFloat(end.replace(/[^0-9.]/g, ''));
          const suffix = end.replace(/[0-9.]/g, '');
          const increment = endNum / (duration / 16);
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= endNum) {
              setCount(endNum);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  const suffix = end.replace(/[0-9.]/g, '');
  return (
    <div ref={countRef}>
      {Math.floor(count)}{suffix}
    </div>
  );
};

const OurStory = () => {
  const stats: StatItem[] = [
    { icon: Building2, value: "3000+", label: "Properties" },
    { icon: Users, value: "60+", label: "Site Engineers" },
    { icon: Briefcase, value: "200+", label: "Office Staff" },
    { icon: MapPin, value: "3+", label: "Locations" },
    { icon: HandCoins, value: "1B+", label: "Paid out in Realty" },
    { icon: UserCheck, value: "2000+", label: "Clients" },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'hsl(var(--story-bg))' }}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src={founderImage}
              alt="Hon. Aneto Samuel Onyema - Founder of Dynamo Group"
              className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <h2 
              className="text-4xl md:text-5xl font-bold text-white"
            >
              OUR STORY
            </h2>

            <div className="space-y-6 text-white/90 text-base leading-relaxed">
              <p>
                Founded in 2013 by visionary entrepreneur Hon. Aneto Samuel Onyema, Dynamo Group Ltd 
                began as Dynamo Industries, a small gas and energy business. Over time, it expanded into 
                Real Estate, Agriculture, Construction, Media, Human Resource Development, Legal Services, 
                and Education, becoming one of Nigeria's fastest-growing multi-sector companies.
              </p>

              <p>
                By 2020, the company launched Dynamo Agro Food and Farms Ltd, investing in palm oil, rice 
                production, and agro-layouts across several states. In 2022, Dynamo developed over 21 estates 
                nationwide with flexible payment plans, making homeownership more accessible.
              </p>

              <p>
                Through Empire School of Intelligence and Wolves & Metrics, Dynamo empowers young Nigerians 
                with business, tech, and leadership skills. With branches in Abuja, Anambra, and Delta, the 
                company continues to build communities, create jobs, and drive innovation across industries.
              </p>

              <p>
                Today, Dynamo stands as a diversified powerhouse—committed to progress, empowerment, 
                and sustainable development across Africa.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="flex justify-center">
                    <stat.icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                  <div 
                    className="text-3xl md:text-4xl font-bold"
                    style={{ color: 'hsl(var(--story-accent))' }}
                  >
                    <CountUpAnimation end={stat.value} />
                  </div>
                  <div className="text-sm text-white/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
