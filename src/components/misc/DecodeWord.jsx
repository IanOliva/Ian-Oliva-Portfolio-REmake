import React, { useEffect, useState } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_-+=[]{}|;:,.<>?";

const DecodeWord = ({
  text = "WELCOME",   // palabra única
  speed = 50,         // velocidad del cambio de caracteres
  delay = 100,        // retraso entre letras
  loop = false,       // 🔥 si true, repite infinitamente
  pauseBetween = 2000,// pausa antes de reiniciar animación
  onComplete,         // callback opcional cuando termina
}) => {
  const [displayText, setDisplayText] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const animateText = () => {
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

      // tiempo total de animación
      const totalTime = text.length * delay + 1000;

      // cuando termina
      setTimeout(() => {
        if (onComplete) onComplete();
        if (loop) {
          setTimeout(() => {
            if (isMounted) animateText();
          }, pauseBetween);
        }
      }, totalTime);
    };

    animateText();

    return () => {
      isMounted = false;
    };
  }, [text, speed, delay, loop, pauseBetween, onComplete]);

  return (
    <p className="font-console console-glow inline-block text-2xl md:text-3xl">
      {displayText.map((c, i) => (
        <span key={i}>{c}</span>
      ))}
    </p>
  );
};

export default DecodeWord;
