import React, { useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import Background from "@/components/Background";
import MouseParticles from "@/components/MouseParticles";
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Home = () => {
  useEffect(() => {
    const soundtrack = new Audio("/sounds/soundtrack.mp3");
    soundtrack.volume = 0.1;
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
      {/* {theme toggle} */}
      <ThemeToggle />
      {/* bg effect */}
      <ParticlesBackground />
      {/* Mouse particles */}
      <MouseParticles />
      {/* Navbar */}
      <Navbar />
      {/* Hero section */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
