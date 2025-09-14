import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import ProjectsCarousel from "../misc/ProjectsCarousel";
import { Section } from "@/components/Section";
import ReusableTypewriter from "@/components/misc/ReusableTypewriter";
const ProjectsSection = () => {
  return (
    <Section id="projects">
        <h2 className="text-4xl md:text-8xl font-resident tracking-wide text-left">
          <span className="text-primary">P</span>rojectos <span className="text-primary">d</span>estacados
        </h2>
        <div className="text-left text-muted-foreground max-w-2xl text-lg">
          <ReusableTypewriter paragraphs={[
            "Aqui estan algunos de mis proyectos destacados:",
          ]} />
        </div>

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
      
    </Section>
  );
};

export default ProjectsSection;
