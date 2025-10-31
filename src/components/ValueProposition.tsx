import { Globe, Handshake, TrendingUp, Home, Sprout } from "lucide-react";

interface ValueItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ValueProposition = () => {
  const values: ValueItem[] = [
    {
      icon: Globe,
      title: "Innovation & Excellence",
      description: "We deliver modern solutions that shape the future of real estate, agriculture, and development.",
    },
    {
      icon: Handshake,
      title: "Trust & Transparency",
      description: "Our business is built on honesty, accountability, and customer satisfaction.",
    },
    {
      icon: TrendingUp,
      title: "Profitable Investments",
      description: "Every Dynamo project is structured to generate strong and sustainable ROI for investors.",
    },
    {
      icon: Home,
      title: "Affordable Ownership",
      description: "We make land and property ownership accessible through flexible payment plans.",
    },
    {
      icon: Sprout,
      title: "Nation Building",
      description: "From real estate to agro projects, we empower communities and drive economic growth.",
    },
  ];

  return (
    <section className="py-8 bg-background">
      <div className="w-full bg-gradient-to-br from-card to-primary/5 rounded-[3rem] shadow-2xl border-2 border-primary/20 p-8 md:p-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">
          <span className="text-primary">OUR VALUE PROPOSITION</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {values.map((value, index) => (
            <article
              key={index}
              style={{ animationDelay: `${index * 100}ms` }}
              className="group relative bg-gradient-to-br from-card to-primary-light/20 rounded-xl p-4 
                         shadow-lg hover:shadow-[var(--shadow-glow)] 
                         hover:scale-105 transition-all duration-500 
                         animate-fade-in border border-primary/10
                         hover:border-primary/30 overflow-hidden
                         before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-accent/5 
                         before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
            >
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent 
                              flex items-center justify-center flex-shrink-0
                              shadow-[var(--shadow-icon)] group-hover:animate-pulse-glow
                              group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-primary-foreground group-hover:animate-float" strokeWidth={2.5} />
                </div>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
