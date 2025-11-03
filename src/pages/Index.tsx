import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OurPromise from "@/components/OurPromise";
import Divisions from "@/components/Divisions";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import FAQ from "@/components/FAQ";
import OurStory from "@/components/OurStory";
import ValueProposition from "@/components/ValueProposition";
import VisionMissionValues from "@/components/VisionMissionValues";
import cityAnimation from "@/assets/city-animation.gif";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <VisionMissionValues />
      <OurPromise />
      <Divisions />
      <Testimonials />

        
      <div className="min-h-screen bg-background">
        <ValueProposition />
        <div className="my-6">
          <OurStory />
        </div>
        <div className="w-full overflow-hidden px-4 md:px-8 lg:px-16">
          <img 
            src={cityAnimation} 
            alt="City skyline with tower and green gradient overlay" 
            className="w-full h-auto object-cover rounded-3xl"
            loading="lazy"
            decoding="async"
          />
        </div>
        <FAQ />
      </div>


      <Projects />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
