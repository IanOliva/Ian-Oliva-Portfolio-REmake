import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import ProjectsCarousel from "./ProjectsCarousel";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl overflow-visible">
        <h2 className="text-4xl md:text-7xl font-resident tracking-wide text-center mb-6">
          <span className="text-primary">P</span>rojectos <span className="text-primary">d</span>estacados
        </h2>
        <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto text-lg">
          Aqui estan algunos de mis proyectos destacados
        </p>

        <ProjectsCarousel />

        {/* <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ianoliva"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
