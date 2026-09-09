import React, { useEffect, useState, lazy, Suspense } from "react";
import ThemeToggle from "@/components/misc/ThemeToggle";
import GrainBackground from "@/components/GrainBackground";
import TargetCursor from "@/components/misc/TargetCursor";
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import Footer from "@/components/sections/Footer";
import DecoderText from "@/components/misc/DecoderText";

// Separadas en su propio chunk: IntroScreen carga WebGL (ogl), ProjectsSection
// carga el carrusel Swiper y ContactSection carga emailjs + spoiled. Ninguna
// de las tres hace falta para el primer render del shell de la página.
const IntroScreen = lazy(() => import("@/components/sections/IntroScreen"));
const ProjectsSection = lazy(() => import("@/components/sections/ProjectsSection"));
const ContactSection = lazy(() => import("@/components/sections/ContactSection"));

const Home = () => {
  const [showIntro, setShowIntro] = useState(true);
  const handleContinue = () => {
    setShowIntro(false);
  };

  useEffect(() => {
    let soundtrack = null;

    // El audio se crea y se descarga recién en la primera interacción,
    // en vez de intentar reproducirlo (y descargarlo) apenas se monta el componente.
    const startSoundtrack = () => {
      if (soundtrack) return;
      soundtrack = new Audio("/sounds/soundtrack.mp3");
      soundtrack.volume = 0.05;
      soundtrack.play().catch((err) => {
        console.warn("Autoplay bloqueado por el navegador", err);
      });
    };

    window.addEventListener("click", startSoundtrack, { once: true });

    return () => {
      window.removeEventListener("click", startSoundtrack);
      if (soundtrack) {
        soundtrack.pause();
        soundtrack.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative transition-colors duration-1000">
      {showIntro && (
        <Suspense fallback={<div className="fixed inset-0 z-[999] bg-black" />}>
          <IntroScreen onContinue={handleContinue} />
        </Suspense>
      )}
      <TargetCursor spinDuration={5} hideDefaultCursor={true} />
      {!showIntro && (
        <>
          {/* bg effect */}
          <GrainBackground />

          {/* Navbar */}
          <Navbar />
          {/* Hero section */}
          <main className="md:ml-64 p-5">
            <HeroSection />

            <AboutSection />

            <Suspense fallback={null}>
              <ProjectsSection />
            </Suspense>

            <Suspense fallback={null}>
              <ContactSection />
            </Suspense>

            {/* Footer */}
            <Footer />
          </main>
        </>
      )}
    </div>
  );
};

export default Home;
