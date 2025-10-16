import React, { useEffect, useState, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useSlideFinished } from "@/context/Context";

const ReusableTypewriter = ({ paragraphs = [], typeSpeed = 20, delayBetween = 800 }) => {
  const slideFinished = useSlideFinished();
  const [visibleParagraphs, setVisibleParagraphs] = useState([]);
  const [finishedParagraphs, setFinishedParagraphs] = useState(0);
  const timeoutsRef = useRef([]);
  const isProcessingRef = useRef(false); // Bandera para evitar ejecuciones múltiples
  const hasStartedRef = useRef(false); // Bandera para ejecutar solo una vez

  useEffect(() => {
    if (!slideFinished) {
      // Reset completo cuando slideFinished es false
      setVisibleParagraphs([]);
      setFinishedParagraphs(0);
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      timeoutsRef.current = [];
      isProcessingRef.current = false;
      hasStartedRef.current = false;
      return;
    }

    // Evitar ejecución múltiple
    if (isProcessingRef.current || hasStartedRef.current) {
      return;
    }

    isProcessingRef.current = true;
    hasStartedRef.current = true;

    // Limpiar timeouts previos por seguridad
    timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    timeoutsRef.current = [];

    let currentIndex = 0;

    const showNextParagraph = () => {
      if (currentIndex < paragraphs.length) {
        setVisibleParagraphs((prev) => [...prev, paragraphs[currentIndex]]);

        const estimatedTime = paragraphs[currentIndex].length * typeSpeed + delayBetween;

        const timeout = setTimeout(() => {
          setFinishedParagraphs((prev) => prev + 1);
          currentIndex++;
          showNextParagraph();
        }, estimatedTime);

        timeoutsRef.current.push(timeout);
      } else {
        isProcessingRef.current = false;
      }
    };

    showNextParagraph();

    // Cleanup function
    return () => {
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      timeoutsRef.current = [];
    };
  }, [slideFinished, paragraphs, typeSpeed, delayBetween]);

  return (
    <div>
      {visibleParagraphs.map((paragraph, index) => (
        <p key={index} className="mb-6">
          <Typewriter
            words={[paragraph]}
            cursor={index === finishedParagraphs}
            cursorStyle="|"
            cursorBlinking={index === finishedParagraphs}
            typeSpeed={typeSpeed}
            deleteSpeed={0}
            delaySpeed={0}
            loop={1}
          />
        </p>
      ))}
    </div>
  );
};

export default ReusableTypewriter;