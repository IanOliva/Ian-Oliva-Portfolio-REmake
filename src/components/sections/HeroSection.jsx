import React from "react";
import { ChevronDown } from "lucide-react";
import TypewriterStrings from "@/components/misc/Typewriter";
import { Section } from "@/components/Section";
import DecoderText from "../misc/DecoderText";

const HeroSection = () => {
  return (
    <Section id="hero" className="relative overflow-hidden text-center">
      {/* Overlay CRT Scanlines */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,0,0,0.05)_0_2px,transparent_2px_4px)] opacity-20 animate-[scrollLines_6s_linear_infinite]" />

      <div className="flex flex-col items-center justify-center my-12 space-y-6">
        {/* Nombre */}
        <h1 className="text-4xl md:text-8xl font-resident tracking-wider text-foreground text-glow animate-fade-in">
          Hola, soy <span className="text-primary">I</span>an{" "}
          <span className="text-primary">O</span>liva
        </h1>

        {/* Subtítulo con efecto terminal */}
        <h3 className="font-typewriter text-2xl md:text-3xl text-primary opacity-0 animate-fade-in-delay-1 mt-3 tracking-widest blood-glow">
          <TypewriterStrings />
        </h3>
        {/* Texto con efecto de decodificación */}

        {/* Párrafo estilo dossier */}
        <p className="max-w-3xl font-mono text-lg md:text-lg text-muted-foreground opacity-0 animate-fade-in-delay-3 ">
          <span className="console-glow">[</span>Archivo clasificado
          <span className="console-glow">]</span> : Desarrollador especializado
          en <span className="console-glow">desarrollo web</span>. Estado:{" "}
          <span className="console-glow">activo</span> Misión: Crear
          experiencias digitales intuitivas y eficientes.
        </p>

        {/* Botón */}
        <div className="pt-4 animate-fade-in-delay-4">
          <a href="#projects" className="fog-button cursor-target">
            <span className="relative z-10">Ver Proyectos</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button className="absolute z-10 bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ChevronDown className="h-12 w-12 text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]" />
      </button>
    </Section>
  );
};

export default HeroSection;
