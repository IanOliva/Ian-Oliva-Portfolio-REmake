import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useSlideFinished } from "@/context/Context";

const ReusableTypewriter = ({ paragraphs = [], typeSpeed = 20, delayBetween = 800 }) => {
  const slideFinished = useSlideFinished();
  const [visibleParagraphs, setVisibleParagraphs] = useState([]);
  const [finishedParagraphs, setFinishedParagraphs] = useState(0); // índice de párrafos ya terminados

  useEffect(() => {
    if (!slideFinished) return;

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

        return () => clearTimeout(timeout);
      }
    };

    showNextParagraph();
  }, [slideFinished, paragraphs, typeSpeed, delayBetween]);

  return (
    <div>
      {visibleParagraphs.map((paragraph, index) => (
        <p key={index} className="mb-6">
          <Typewriter
            words={[paragraph]}
            cursor={index === finishedParagraphs}   // cursor visible solo en el párrafo activo
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
