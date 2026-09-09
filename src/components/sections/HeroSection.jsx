import React from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/Section";
import ConsoleButton from "@/components/misc/ConsoleButton";

import Textra from "react-textra";

const HeroSection = () => {
  return (
    <Section id="hero" className="relative overflow-hidden text-center">
      {/* Overlay CRT Scanlines */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,0,0,0.05)_0_2px,transparent_2px_4px)] opacity-20 animate-[scrollLines_6s_linear_infinite]" />

      <div className="flex flex-col justify-center space-y-6">
        {/* Nombre */}
        <h1 className="text-4xl md:text-8xl font-resident tracking-wider text-foreground text-glow animate-fade-in text-left">
          EXPEDIENTE CLASIFICADO
        </h1>
        <h2 className="text-4xl md:text-6xl font-resident tracking-wider text-foreground text-glow animate-fade-in text-left flex items-center">
          <div>
            SUJETO <span className="text-primary">I</span>AN <span className="text-primary">O</span>LIVA
          </div>
           <h5 className="md:text-4xl">(ID: IO-DEV-05-06)</h5>
        </h2>


        {/* Párrafo estilo dossier */}
        <p className="max-w-3xl text-left font-mono text-lg md:text-lg text-muted-foreground opacity-0 animate-fade-in-delay-3 ">
          <span className="console-glow">[</span>Archivo clasificado
          <span className="console-glow">]</span> : Desarrollador especializado
          en <span className="console-glow">desarrollo web</span>. Estado:{" "}
          <span className="console-glow">activo</span> Misión: Crear
          experiencias digitales intuitivas y eficientes. Visto por última vez
          en instalaciones de formación avanzadas de <span className="console-glow">Ingeniería de Software.</span>
        </p>
        <div className="mx-auto">
          <a href="#about">

          <ConsoleButton text="Proyectos" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button className="absolute z-10 bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ChevronDown className="h-12 w-12 text-primary drop-shadow-[0_0_10px_var(--color-primary)]" />
      </button>
    </Section>
  );
};

export default HeroSection;
