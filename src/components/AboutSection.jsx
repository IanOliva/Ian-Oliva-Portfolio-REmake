import React from "react";
import { Briefcase, Code, User } from "lucide-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPhp,
  FaLaravel,
  FaBootstrap,
} from "react-icons/fa";
import { SiMysql, SiMongodb, SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-7xl font-resident tracking-wide text-center mb-12">
          <span className="text-primary">S</span>obre{" "}
          <span className="text-primary">m</span>i
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Técnico en Programación</h3>
            <p className="text-muted-foreground">
              Soy un desarrollador web que disfruta transformar ideas en
              proyectos reales. Me gusta crear sitios y aplicaciones que no solo
              se vean bien, sino que también sean fáciles y agradables de usar.
            </p>
            <p className="text-muted-foreground">
              A lo largo de mi experiencia he trabajado con tecnologías
              modernas, buscando siempre que el código sea limpio, rápido y
              accesible para todos. Me motiva aprender cosas nuevas y aplicar lo
              que descubro para que cada proyecto sea mejor que el anterior.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Contactame
              </a>
              <a href="https://docs.google.com/document/d/1nYjp6P7Eiq2jIu5ZYsvs-N0AR6NeOsKLFqLqaFwocdk/edit?usp=sharing" target="_blank" className="cosmic-button">
                Ver CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover bg-background/30">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">FrontEnd</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <FaHtml5 className="text-orange-500 text-4xl sm:text-5xl md:text-6xl" />
                    <FaCss3Alt className="text-blue-500 text-4xl sm:text-5xl md:text-6xl" />
                    <FaJs className="text-yellow-300 text-4xl sm:text-5xl md:text-6xl" />
                    <FaReact className="text-cyan-400 text-4xl sm:text-5xl md:text-6xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover bg-background/30">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Backend</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <FaNodeJs className="text-green-500 text-4xl sm:text-5xl md:text-6xl" />
                    <FaPhp className="text-blue-500 text-4xl sm:text-5xl md:text-6xl" />
                    <SiMysql className="text-blue-300 text-4xl sm:text-5xl md:text-6xl" />
                    <SiMongodb className="text-green-700 text-4xl sm:text-5xl md:text-6xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover bg-background/30">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">
                    Frameworks, librerias y ORMS
                  </h4>
                  <div className="flex items-center gap-2 mt-2">
                    <FaLaravel className="text-red-600 text-4xl sm:text-5xl md:text-6xl" />
                    <FaBootstrap className="text-purple-600 text-4xl sm:text-5xl md:text-6xl" />
                    <SiExpress className="text-gray-800 text-4xl sm:text-5xl md:text-6xl" />
                    <RiTailwindCssFill className="text-sky-400 text-4xl sm:text-5xl md:text-6xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
