import React from "react";
import { Fade } from "react-awesome-reveal";

export const Section = ({ children, id }) => {
  return (
    <Fade cascade damping={0.1} direction="right" delay={100} duration={500}>
      <section
        id={id}
        className="min-h-screen relative max-w-4xl mb-10 container z-10 border border-transparent p-8 rounded-lg bg-background/30 backdrop-blur-sm shadow-lg"
      >
        {children}
      </section>
    </Fade>
  );
};
