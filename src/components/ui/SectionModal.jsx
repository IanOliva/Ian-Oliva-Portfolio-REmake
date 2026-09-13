import { useEffect } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import TechnicalProfile from "@/components/sections/TechnicalProfile";
import ContactSection from "@/components/sections/ContactSection";
import SocialLinks from "@/components/sections/SocialLinks";

const SectionModal = () => {
  const { activeSection, closeSection } = usePortfolio();

  const sectionTitles = {
    hero: "SYSTEM PROFILE",
    about: "PERSONAL FILE",
    skills: "TECHNICAL ANALYSIS",
    contact: "COMMUNICATION TERMINAL",
    links: "EXTERNAL NETWORK",
  };

  useEffect(() => {
    if (!activeSection) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeSection();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSection, closeSection]);

  if (!activeSection) {
    return null;
  }

  const renderContent = () => {
    switch (activeSection) {
      case "projects":
        return <ProjectsSection />;
      case "about":
        return <AboutSection />;
      case "hero":
        return <HeroSection />;
      case "skills":
        return <TechnicalProfile />;
      case "contact":
        return <ContactSection />;
      case "links":
        return <SocialLinks />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm">
      <div className="relative flex max-h-[85vh] w-full max-w-6xl flex-col overflow-hidden border border-red-900/60 bg-[#080808] shadow-[0_0_60px_rgba(120,0,0,0.25)]">
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-red-950/70 bg-black px-6 py-4">
          <div>
            <p className="font-mono text-[10px] tracking-[0.35em] text-red-600">
              PERSONAL ARCHIVE // IO-01
            </p>

            <h2 className="mt-1 font-mono text-sm tracking-[0.25em] text-white">
              {sectionTitles[activeSection] || activeSection.toUpperCase()}
            </h2>
          </div>

          <button
            type="button"
            onClick={closeSection}
            className="border border-red-900/60 px-3 py-2 font-mono text-xs text-red-500 transition hover:bg-red-950/40 hover:text-white"
          >
            [ ESC ] CLOSE
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto">{renderContent()}</div>
      </div>
    </div>
  );
};

export default SectionModal;
