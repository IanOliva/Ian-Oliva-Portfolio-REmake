import React, { useEffect, useState } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_-+=[]{}|;:,.<>?";

const DecoderText = ({
  texts = ["WELCOME", "TO THE GAME", "HAVE FUN"], // varias frases
  speed = 50,
  delay = 100,
  loop = true,
  pauseBetween = 2000, // tiempo de espera entre frases
}) => {
  const [displayText, setDisplayText] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const animateText = (text, onComplete) => {
      setDisplayText(Array.from(text).map(() => " "));

      text.split("").forEach((char, i) => {
        if (char === " ") return;

        setTimeout(() => {
          let iteration = 0;
          const interval = setInterval(() => {
            if (!isMounted) return;
            setDisplayText((prev) => {
              const newText = [...prev];
              newText[i] = chars[Math.floor(Math.random() * chars.length)];
              return newText;
            });
            iteration++;

            if (iteration > 10) {
              clearInterval(interval);
              setDisplayText((prev) => {
                const newText = [...prev];
                newText[i] = char;
                return newText;
              });
            }
          }, speed);
        }, i * delay);
      });

      // cuando termina, llamamos al callback
      const totalTime = text.length * delay + 1000;
      setTimeout(() => {
        if (onComplete) onComplete();
      }, totalTime);
    };

    const runSequence = () => {
      animateText(texts[currentIndex], () => {
        if (loop || currentIndex < texts.length - 1) {
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }, pauseBetween);
        }
      });
    };

    runSequence();

    return () => {
      isMounted = false;
    };
  }, [currentIndex, texts, speed, delay, loop, pauseBetween]);

  return (
    <p className="font-console console-glow inline-block text-2xl md:text-3xl">
      {displayText.map((c, i) => (
        <span key={i}>{c}</span>
      ))}
    </p>
  );
};

export default DecoderText;
