import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { toast } = useToast();
  const { ref: headerRef, inView: headerInView } = useScrollAnimation();
  const { ref: formRef, inView: formInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: infoRef, inView: infoInView } = useScrollAnimation({ threshold: 0.2 });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+234 803 000 0000",
      link: "tel:+2348030000000",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@dynamogroup.com",
      link: "mailto:info@dynamogroup.com",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 Business District, Lagos, Nigeria",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div 
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-accent mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Have questions? We're here to help you find the perfect investment opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div 
            ref={formRef}
            className={`transition-all duration-1000 ${
              formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-11 sm:h-12"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-11 sm:h-12"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your investment interests..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="btn-gold w-full">
                Send Message
                <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div 
            ref={infoRef}
            className={`space-y-5 sm:space-y-6 transition-all duration-1000 ${
              infoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className={`card-hover transition-all duration-700 ${
                  infoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: infoInView ? `${(index + 1) * 100}ms` : '0ms' }}
              >
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 animate-bounce-subtle">
                      <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1 text-sm sm:text-base">{info.title}</h3>
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-accent smooth-transition text-sm sm:text-base"
                      >
                        {info.details}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Map Placeholder */}
            <Card className="overflow-hidden hover-lift">
              <CardContent className="p-0">
                <div className="w-full h-56 sm:h-64 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center animate-float">
                    <MapPin className="h-10 w-10 sm:h-12 sm:w-12 text-accent mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm sm:text-base">Interactive Map</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
