import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // o puedes usar `/css/skyblue`, `/css/sea-green`, etc.
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Tilt from "react-parallax-tilt";

const ProjectsCarousel = () => {
  const splideRef = useRef(null);
  const projects = [
    {
      id: 1,
      img: "projects/ecommerce.png",
      alt: "ecommerce",
      title: "Ecommerce",
      description: "Proyecto de Ecommerce",
      technologies: ["PHP", "Bootstrap", "Mysql"],
      link: "#",
    },
    {
      id: 2,
      img: "projects/ecommerceRemake.png",
      alt: "Ecommerce Remake",
      title: "Ecommerce Remake",
      description: "Proyecto de Ecommerce recreado con Laravel 11",
      technologies: ["PHP", "Laravel", "Bootstrap", "MySQL"],
      link: "#",
    },
    {
      id: 3,
      img: "projects/cap proyecto role game.png",
      alt: "Role Game",
      title: "Role Game",
      description: "Proyecto de juego de rol",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
    },
    {
      id: 4,
      img: "projects/ticket-track.png",
      alt: "Sistema de Tickets de incidencias",
      title: "Ticket Track",
      description: "Sistema de Tickets",
      technologies: ["Node.js", "Express", "MySQL"],
      link: "https://ticket-track-lilac.vercel.app",
    },
    {
      id: 5,
      img: "projects/multometro.png",
      alt: "multometro",
      title: "Multómetro",
      description: "Sistema para gestionar multas de tráfico",
      technologies: ["Node.js", "Tailwind", "MySQL"],
      link: "#",
    },
    {
      id: 6,
      img: "projects/avanti.png",
      alt: "avanti",
      title: "Avanti",
      description: "Plataforma de crowdfunding",
      technologies: ["Node.js", "Express", "MongoDB", "Mongoose"],
      link: "#",
    },
    {
      id: 7,
      img: "projects/QRManager.png",
      alt: "qr manager",
      title: "QR Manager",
      description: "Sistema para generar y editar códigos QR",
      technologies: ["Node.js", "Express", "MySQL", "Sequelize", "Tailwind"],
      link: "#",
    },
  ];

  return (
    <div className="relative w-full py-10">
      {/* Flecha izquierda */}
      <button
        className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 hover:bg-primary text-white rounded-full p-2 shadow-lg transition-colors duration-300"
        onClick={() => splideRef.current?.splide?.go("<")}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Carrusel Splide */}
      <div className="w-full overflow-hidden h-100 p-4">
        <Splide
          ref={splideRef}
          options={{
            type: "loop",
            arrows: false,
            perPage: 3,
            perMove: 1,
            gap: "1rem",
            autoplay: true,
            pauseOnHover: true,
            pagination: false,
            breakpoints: {
              1024: {
                perPage: 2,
              },
              640: {
                perPage: 1,
              },
            },
          }}
          aria-label="Proyectos personales"
          className="px-4"
        >
          {projects.map((project) => (
            <SplideSlide key={project.id}>
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
                glarePosition="all"
                scale={1.03}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="w-full h-full z-50"
              >
                <div className="relative overflow-visible z-10 rounded-xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col hover:scale-[1.02]">
                  <div className="h-40 w-full overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.alt}
                      className="w-full h-full rounded object-cover transition-transform duration-500 group-hover:scale-105 grayscale hover:filter-none"
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-grow text-white">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-zinc-300 mb-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white shadow-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex justify-end">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:underline"
                      >
                        Ver proyecto <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Flecha derecha */}
      <button
        className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 hover:bg-primary text-white rounded-full p-2 shadow-lg transition-colors duration-300"
        onClick={() => splideRef.current?.splide?.go(">")}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ProjectsCarousel;
