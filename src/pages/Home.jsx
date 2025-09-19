import React, { useEffect, useState } from "react";
import ThemeToggle from "@/components/misc/ThemeToggle";
import IntroScreen from "@/components/sections/IntroScreen";
import GrainBackground from "@/components/GrainBackground";
import MouseParticles from "@/components/MouseParticles";
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

const Home = () => {
  const [showIntro, setShowIntro] = useState(true);
  const handleContinue = () => {
    setShowIntro(false);
  };

  useEffect(() => {
    const soundtrack = new Audio("/sounds/soundtrack.mp3");
    soundtrack.volume = 0.05;
    soundtrack.play();
    const tryPlay = () => {
      soundtrack.play().catch((err) => {
        console.warn("Autoplay bloqueado por el navegador", err);
      });
      window.removeEventListener("click", tryPlay);
    };
    window.addEventListener("click", tryPlay);

    soundtrack.play().catch(() => {});

    return () => {
      soundtrack.pause();
      soundtrack.currentTime = 0;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative transition-colors duration-1000">
      {showIntro && <IntroScreen onContinue={handleContinue} />}

      {!showIntro && (
        <>
          {/* bg effect */}
          <GrainBackground />
          {/* Mouse particles */}
          <MouseParticles />
          {/* Navbar */}
          <Navbar />
          {/* Hero section */}
          <main className="md:ml-64 p-5">
            <HeroSection />

            <AboutSection />

            <ProjectsSection />

            <ContactSection />

            {/* Footer */}
            <Footer />
          </main>
        </>
      )}
    </div>
  );
};

export default Home;
