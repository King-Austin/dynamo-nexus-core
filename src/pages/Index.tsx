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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <OurPromise />
      <Divisions />
      <Testimonials />
      <Projects />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
