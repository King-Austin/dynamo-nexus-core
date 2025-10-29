import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import dynamoLogo from "@/assets/dynamo-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const divisions = [
    { name: "Dynamo Real Estate", href: "#real-estate", external: false },
    { name: "Dynamo Agroland (Agriculture)", href: "https://landpalmdream.vercel.app/", external: true },
    { name: "Dynamo Construction", href: "#construction", external: false },
    { name: "Dynamo Oil & Gas", href: "https://dynamo-gas-flow.vercel.app/", external: true },
    { name: "Dynamo Law Firm", href: "https://dynamo-legal-forge.vercel.app/", external: true },
    { name: "Dynamo Media", href: "https://white-space-dynamo.vercel.app/", external: true },
    { name: "Human Resource & Business Development", href: "#hr-business", external: false },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm animate-slide-down">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center animate-fade-in-left">
            <a href="#home" className="flex items-center space-x-2 hover:opacity-80 smooth-transition">
              <img src={dynamoLogo} alt="Dynamo Group Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
              <span className="text-lg sm:text-xl font-bold text-primary">Dynamo Group</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 animate-fade-in-right">
            <a href="#home" className="text-foreground hover:text-primary smooth-transition font-medium">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary smooth-transition font-medium">
              About Us
            </a>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary font-medium">
                    Our Divisions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {divisions.map((division) => (
                        <li key={division.name}>
                          <NavigationMenuLink asChild>
                            <a
                              href={division.href}
                              target={division.external ? "_blank" : undefined}
                              rel={division.external ? "noopener noreferrer" : undefined}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{division.name}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a href="#projects" className="text-foreground hover:text-primary smooth-transition font-medium">
              Projects
            </a>
            <a href="#contact" className="text-foreground hover:text-primary smooth-transition font-medium">
              Contact Us
            </a>
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-secondary smooth-transition animate-fade-in-right"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-down">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <a href="#home" className="text-foreground hover:text-primary smooth-transition font-medium py-2" onClick={() => setIsOpen(false)}>
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary smooth-transition font-medium py-2" onClick={() => setIsOpen(false)}>
                About Us
              </a>
              <div className="space-y-2">
                <div className="text-foreground font-medium flex items-center py-2">
                  Our Divisions <ChevronDown className="ml-1 h-4 w-4" />
                </div>
                <div className="pl-4 space-y-2">
                  {divisions.map((division) => (
                    <a
                      key={division.name}
                      href={division.href}
                      target={division.external ? "_blank" : undefined}
                      rel={division.external ? "noopener noreferrer" : undefined}
                      className="block text-sm text-muted-foreground hover:text-primary smooth-transition py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {division.name}
                    </a>
                  ))}
                </div>
              </div>
              <a href="#projects" className="text-foreground hover:text-primary smooth-transition font-medium py-2" onClick={() => setIsOpen(false)}>
                Projects
              </a>
              <a href="#contact" className="text-foreground hover:text-primary smooth-transition font-medium py-2" onClick={() => setIsOpen(false)}>
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
