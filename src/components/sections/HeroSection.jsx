import React from "react";
import { ChevronDown } from "lucide-react";
import TypewriterStrings from "@/components/misc/Typewriter";
import { Section } from "@/components/Section";

const HeroSection = () => {
  return (
    <Section
      id="hero"
      className="relative overflow-hidden text-center"
    >
      {/* Overlay CRT Scanlines */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,0,0,0.05)_0_2px,transparent_2px_4px)] opacity-20 animate-[scrollLines_6s_linear_infinite]" />

      <div className="flex flex-col items-center justify-center my-12 space-y-6">
        {/* Nombre */}
        <h1 className="text-4xl md:text-8xl font-resident tracking-wider text-foreground drop-shadow-[0_0_25px_rgba(255,0,0,0.5)] opacity-0 animate-fade-in">
          Hola, soy <span className="text-primary">I</span>an{" "}
          <span className="text-primary">O</span>liva
        </h1>

        {/* Subtítulo con efecto terminal */}
        <h3 className="font-typewriter text-2xl md:text-3xl text-primary opacity-0 animate-fade-in-delay-1 mt-3 tracking-widest drop-shadow-[0_0_12px_rgba(255,0,0,0.8)]">
          <TypewriterStrings />
        </h3>

        {/* Párrafo estilo dossier */}
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
          [Archivo clasificado]: Desarrollador especializado en{" "}
          <span className="text-primary">frontend</span> y{" "}
          <span className="text-primary">backend</span>.  
          Estado: <span className="text-green-500">Activo</span>.  
          Misión: Crear experiencias digitales intuitivas y eficientes.
        </p>

        {/* Botón */}
        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="biohazard-button relative">
            <span className="relative z-10">Ver Proyectos</span>
            
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button className="absolute z-10 bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ChevronDown className="h-12 w-12 text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]" />
      </button>

      <style jsx>{`
        @keyframes scrollLines {
          to {
            background-position-y: 100%;
          }
        }
      `}</style>
    </Section>
  );
};

export default HeroSection;
