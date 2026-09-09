import React, { useEffect, useRef, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { SlideContext } from "@/context/Context";

export const Section = ({ children, id }) => {
  const [slideFinished, setSlideFinished] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSlideFinished(true);
          observer.disconnect(); // Solo se dispara una vez
        }
      },
      { threshold: 0.5 } // 50% visible
    );

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <Slide direction="right" duration={500} triggerOnce>
      <SlideContext.Provider value={slideFinished}>
        <section
          ref={ref}
          id={id}
          className="min-h-screen relative max-w-4xl mb-10 container z-10 border border-transparent p-8 rounded-lg bg-background/30 backdrop-blur-sm shadow-lg"
        >
          {children}
        </section>
      </SlideContext.Provider>
    </Slide>
  );
};
