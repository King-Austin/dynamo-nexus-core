import { Target, Rocket, Heart, LucideIcon } from "lucide-react";

interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string | string[];
}

const VisionMissionValues = () => {
  const items: ValueItem[] = [
    {
      icon: Target,
      title: "Our Vision",
      description:
        "To provide consistent wealth to all Dynamo Group Stakeholders.",
    },
    {
      icon: Rocket,
      title: "Our Mission",
      description:
        "To ensure the Presence of Dynamo Group Products or Services in every Household.",
    },
    {
      icon: Heart,
      title: "Core Values",
      description: [
        "Excellence & integrity",
        "Resilience and Consistency",
        "Efficiency & Dependability",
        "Customer centric",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <article
              key={index}
              className={`bg-card p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border ${
                index === 2 
                  ? "rounded-[2.5rem] shadow-2xl scale-105 border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5" 
                  : "rounded-2xl"
              }`}
            >
              <div className="flex flex-col items-center text-center space-y-6">
                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <item.icon className="w-10 h-10 text-primary-foreground" strokeWidth={2} />
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-foreground">
                  {item.title}
                </h2>

                {/* Description */}
                {Array.isArray(item.description) ? (
                  <ul className="space-y-3 w-full">
                    {item.description.map((value, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-left text-foreground/80"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-foreground/80 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionValues;
