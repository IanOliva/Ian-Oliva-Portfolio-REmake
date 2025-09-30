import React from "react";
import DecodeWord from "./DecodeWord";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const ProjectsCarousel = () => {
  const projects = [
    {
      id: 1,
      img: "projects/ecommerce.png",
      role: "FullStack",
      alt: "ecommerce",
      title: "Ecommerce",
      description: "Mi primer proyecto de Ecommerce",
      technologies: ["PHP", "Bootstrap", "Mysql"],
      link: "#",
    },
    {
      id: 2,
      img: "projects/ecommerceRemake.png",
      role: "FullStack",
      alt: "Ecommerce Remake",
      title: "Ecommerce Remake",
      description: "Proyecto de Ecommerce recreado con Laravel 11",
      technologies: ["PHP", "Laravel", "Bootstrap", "MySQL"],
      link: "#",
    },
    {
      id: 3,
      img: "projects/cap proyecto role game.png",
      role: "Frontend",
      alt: "Role Game",
      title: "Role Game",
      description: "Proyecto de juego de rol",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
    },
    {
      id: 4,
      img: "projects/ticket-track.png",
      role: "FullStack",
      alt: "Sistema de Tickets de incidencias",
      title: "Ticket Track",
      description: "Sistema de gestion de tickets de incidencias",
      technologies: ["Node.js", "Express", "MySQL", "EJS", "Bootstrap"],
      link: "https://ticket-track-lilac.vercel.app",
    },
    {
      id: 5,
      img: "projects/multometro.png",
      role: "FullStack",
      alt: "multometro",
      title: "Multómetro",
      description: "Sistema para gestionar multas de tráfico",
      technologies: ["Node.js", "Tailwind", "MySQL", "EJS"],
      link: "#",
    },
    {
      id: 6,
      img: "projects/avanti.png",
      role: "Backend",
      alt: "avanti",
      title: "Avanti",
      description: "Plataforma de crowdfunding",
      technologies: ["Node.js", "Express", "MongoDB", "Mongoose"],
      link: "#",
    },
    {
      id: 7,
      img: "projects/QRManager.png",
      role: "FullStack",
      alt: "qr manager",
      title: "QR Manager",
      description: "Sistema para generar y editar códigos QR",
      technologies: [
        "Node.js",
        "Express",
        "MySQL",
        "Sequelize",
        "Tailwind",
        "React.js",
      ],
      link: "#",
    },
    {
      id: 8,
      img: "projects/fakegram.png",
      role: "Fullstack",
      alt: "fakegram",
      title: "Fakegram",
      description: "Clon de instagram",
      technologies: ["React", "Tailwind", "MongoDB"],
      link: "#",
    },
  ];

  return (
    <section className="">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
        className="px-6"
      >
        {/* 🔥 Flechas personalizadas */}
        <button
          className="custom-prev absolute z-10 top-1/2 left-2 -translate-y-1/2 
        bg-black/70 border border-green-500 shadow-[0_0_10px_#00ff99] 
        p-3 rounded-full text-green-400 transition-transform duration-200 
        hover:scale-110 hover:shadow-[0_0_20px_#00ff99] hover:animate-pulse"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          className="custom-next absolute z-10 top-1/2 right-2 -translate-y-1/2 
        bg-black/70 border border-green-500 shadow-[0_0_10px_#00ff99] 
        p-3 rounded-full text-green-400 transition-transform duration-200 
        hover:scale-110 hover:shadow-[0_0_20px_#00ff99] hover:animate-pulse"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {projects.map((project, i) => (
          <SwiperSlide key={i} className="transition-all duration-500">
            {({ isActive }) => (
              <div
                className={`rounded-2xl shadow-lg overflow-hidden transition-transform duration-500 console-frame ${
                  isActive
                    ? "scale-105 opacity-100 "
                    : "scale-90 opacity-60 filter grayscale blur-[1px] "
                }`}
              >
                <div className="h-30 w-full">
                  <img
                    src={project.img}
                    alt={project.alt}
                    className="w-full h-full object-cover border border-green-500"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow text-white">
                  <h3 className="text-xl font-mono console-glow mb-1">
                    <DecodeWord text={project.title} loop={true} />
                  </h3>
                  <div className="text-center font-typewriter backdrop-blur-sm">
                    <p className="text-black">{project.role}</p>
                  </div>
                  <p className="text-sm text-foreground font-mono mb-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs font-mono rounded-full bg-gradient-to-r from-red-500 via-red-500 text-white shadow-md"
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
                      className="inline-flex items-center gap-2 text-lg text-red-500 font-console hover:underline"
                    >
                      Ver proyecto <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProjectsCarousel;
