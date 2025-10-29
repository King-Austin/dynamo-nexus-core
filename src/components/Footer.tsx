import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import dynamoLogo from "@/assets/dynamo-group-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "News", href: "#" },
    ],
    divisions: [
      { name: "Real Estate", href: "#real-estate" },
      { name: "Agroland", href: "#agroland" },
      { name: "Construction", href: "#construction" },
      { name: "Oil & Gas", href: "#oil-gas" },
    ],
    resources: [
      { name: "Investment Guide", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary text-white animate-fade-in">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Company Info */}
          <div className="animate-fade-in-left">
            <div className="flex items-center space-x-2 mb-4">
              <img src={dynamoLogo} alt="Dynamo Group" className="h-14 sm:h-16 w-auto hover-lift" />
            </div>
            <p className="text-white/80 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Building Africa's future through sustainable investments in real estate, agriculture, and construction.
            </p>
            <div className="space-y-2">
              <a href="tel:+2348030000000" className="flex items-center text-white/80 hover:text-accent smooth-transition text-sm sm:text-base">
                <Phone className="h-4 w-4 mr-2" />
                +234 803 000 0000
              </a>
              <a href="mailto:info@dynamogroup.com" className="flex items-center text-white/80 hover:text-accent smooth-transition text-sm sm:text-base">
                <Mail className="h-4 w-4 mr-2" />
                info@dynamogroup.com
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/80 hover:text-accent smooth-transition text-sm sm:text-base">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Our Divisions</h3>
            <ul className="space-y-2">
              {footerLinks.divisions.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/80 hover:text-accent smooth-transition text-sm sm:text-base">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/80 hover:text-accent smooth-transition text-sm sm:text-base">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 animate-fade-in">
            <p className="text-white/80 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} Dynamo Group. All Rights Reserved.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary smooth-transition hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
