import { useEffect, useState } from "react";
import ParticlesBg from "particles-bg";

export const ParticlesBackground = () => {
  const [particles, setParticles] = useState(0);

  useEffect(() => {
    generateParticles();

    const handleResize = () => {
      generateParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const generateStars = () => {
  //   const numberOfStars = Math.floor(
  //     (window.innerWidth * window.innerHeight) / 10000
  //   );

  //   const newStars = [];

  //   for (let i = 0; i < numberOfStars; i++) {
  //     newStars.push({
  //       id: i,
  //       size: Math.random() * 3 + 1,
  //       x: Math.random() * 100,
  //       y: Math.random() * 100,
  //       opacity: Math.random() * 0.5 + 0.5,
  //       animationDuration: Math.random() * 4 + 2,
  //     });
  //   }

  //   setStars(newStars);
  // };

  // const generateMeteors = () => {
  //   const numberOfMeteors = 4;
  //   const newMeteors = [];

  //   for (let i = 0; i < numberOfMeteors; i++) {
  //     newMeteors.push({
  //       id: i,
  //       size: Math.random() * 2 + 1,
  //       x: Math.random() * 100,
  //       y: Math.random() * 20,
  //       delay: Math.random() * 15,
  //       animationDuration: Math.random() * 3 + 3,
  //     });
  //   }

  //   setMeteors(newMeteors);
  // };

  const generateParticles = () => {
    const numberOfParticles = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    setParticles(numberOfParticles);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <ParticlesBg type="cobweb" bg={true} num={particles} color="#ffffff" />
    </div>
  );
};
