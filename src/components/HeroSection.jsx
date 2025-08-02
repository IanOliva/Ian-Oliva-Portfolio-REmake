import React from "react";
import {ChevronDown} from "lucide-react";
import TypewriterStrings from "@/components/Typewriter";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <div className="text-4xl md:text-8xl tracking-tight text-foreground">
            <h1 className="opacity-0 animate-fade-in font-resident tracking-wider">Hola, soy <span className="text-primary">I</span>an <span className="text-primary">O</span>liva</h1>
            <h3 className="font-typewriter text-3xl text-primary opacity-0 animate-fade-in-delay-1 mt-3 tracking-widest drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">
              <TypewriterStrings />
            </h3>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Desarrollo aplicaciones web con tecnologias modernas.
            Especializandome tanto en desarrollo frontend como backend. Me
            apasiona crear experiencias digitales que sean intuitivas y
            eficientes.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Ve mis trabajos
            </a>
          </div>

        </div>
      </div>
      <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ChevronDown className="h-20 w-20 text-primary"/>
      </button>
    </section>
  );
};

export default HeroSection;
