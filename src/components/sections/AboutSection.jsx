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
import { Section } from "@/components/Section";
import ReusableTypewriter from "@/components/misc/ReusableTypewriter";
import DecodeWord from "../misc/DecodeWord";
import ConsoleRadar from "../misc/ConsoleRadar";
import ConsoleBackground from "../misc/ConsoleBackround";
import ConsoleButton from "../misc/ConsoleButton";

const AboutMe = () => {

  return (
    <Section id="about">
      {/* Overlay CRT Scanlines */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,0,0,0.05)_0_2px,transparent_2px_4px)] opacity-20 animate-[scrollLines_6s_linear_infinite]" />

      <div className="flex items-center justify-between mb-10">
        <h2 className="text-4xl md:text-8xl font-resident tracking-wide text-left text-glow">
          <span className="text-primary">S</span>obre{" "}
          <span className="text-primary">m</span>i
        </h2>
        <div className="p-3 rounded-full bg-primary/10">
          <Code className="h-8 w-8 text-primary" />
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-6 text-left">
          <h3 className="text-2xl font-typewriter tracking-wide">
            IAN OLIVA IO-DEV-05-06.
          </h3>
          <div className="text-muted-foreground font-mono">
            <p>
              Perfil orientado a [desarrollo web]
              moderno. Presenta habilidad para convertir ideas en prototipos
              estables y usables. Mantiene rutina continua de mejora,
              aprendizaje y refinamiento de procesos.
            </p>
            <p>
              Registros internos indican que el sujeto emplea [tecnologías avanzadas]
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact">
              <ConsoleButton icon={<Briefcase />} text="Contactame" />
            </a>
            <a
              href="https://docs.google.com/document/d/1nYjp6P7Eiq2jIu5ZYsvs-N0AR6NeOsKLFqLqaFwocdk/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ConsoleButton icon={<User />} text="Ver CV" />
            </a>
          </div>
        </div>
        <div className="shadow-lg transition-all duration-500 console-frame relative">
          <ConsoleBackground />
          {/* Encabezado */}
          <div className="px-6 pt-6 pb-2">
            <h4 className="text-2xl font-typewriter tracking-wide text-center text-primary">
              <DecodeWord text="Tecnologías" speed={70} delay={40} />
            </h4>
          </div>

          {/* Grid de iconos */}
          <div className=" px-8 py-6 relative">
            <ConsoleRadar />

            {/* {[
              { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
              { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
              {
                icon: <FaJs className="text-yellow-300" />,
                name: "JavaScript",
              },
              { icon: <FaReact className="text-cyan-400" />, name: "React" },
              {
                icon: <FaNodeJs className="text-green-500" />,
                name: "Node.js",
              },
              { icon: <FaPhp className="text-indigo-500" />, name: "PHP" },
              { icon: <SiMysql className="text-blue-400" />, name: "MySQL" },
              {
                icon: <SiMongodb className="text-green-600" />,
                name: "MongoDB",
              },
              { icon: <FaLaravel className="text-red-600" />, name: "Laravel" },
              {
                icon: <FaBootstrap className="text-purple-600" />,
                name: "Bootstrap",
              },
              {
                icon: (
                  <SiExpress className="text-gray-700 dark:text-gray-200" />
                ),
                name: "Express.js",
              },
              {
                icon: <RiTailwindCssFill className="text-sky-400" />,
                name: "Tailwind CSS",
              },
            ].map((tech, i) => (
              <div
                key={i}
                className="group relative flex justify-center items-center"
              >
                
                <div className="text-5xl cursor-target transition-transform duration-300 hover:scale-110 drop-shadow-[0_0_6px_rgba(255,255,255,0.2)] ">
                  {tech.icon}
                </div>

                
                <span className="absolute bottom-[-2rem] z-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 text-xs bg-black/90 border border-primary/30 text-white px-2 py-1 rounded-md shadow-md">
                  {tech.name}
                </span>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
