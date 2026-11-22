import { useEffect, useId, useRef } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { useLanguage } from "@/context/useLanguage";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import TechnicalProfile from "@/components/sections/TechnicalProfile";
import ContactSection from "@/components/sections/ContactSection";
import SocialLinks from "@/components/sections/SocialLinks";

// Elementos a los que se puede llegar con la tecla Tab.
const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

const SectionModal = () => {
  const { activeSection, closeSection } = usePortfolio();
  const { t } = useLanguage();

  const titleId = useId();
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Al abrir, el foco pasa al modal; al cerrar, vuelve a donde estaba.
  useEffect(() => {
    if (!activeSection) {
      return;
    }

    const previouslyFocused = document.activeElement;

    closeButtonRef.current?.focus();

    return () => {
      previouslyFocused?.focus?.();
    };
  }, [activeSection]);

  // Escape cierra el modal y Tab queda dando vueltas dentro de él.
  useEffect(() => {
    if (!activeSection) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeSection();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusable = dialogRef.current.querySelectorAll(FOCUSABLE_SELECTOR);

      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
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

  // Cierra solo si el clic empezó en el fondo oscuro, no dentro del modal.
  const handleBackdropMouseDown = (event) => {
    if (event.target === event.currentTarget) {
      closeSection();
    }
  };

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
    <div
      onMouseDown={handleBackdropMouseDown}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[85vh] w-full max-w-6xl flex-col overflow-hidden border border-red-900/60 bg-[#080808] shadow-[0_0_60px_rgba(120,0,0,0.25)]"
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-red-950/70 bg-black px-6 py-4">
          <div>
            {/* Adorno de ambientación, los lectores de pantalla lo saltean. */}
            <p
              aria-hidden="true"
              className="font-mono text-xs tracking-[0.35em] text-red-500"
            >
              PERSONAL ARCHIVE // IO-01
            </p>

            <h2
              id={titleId}
              className="mt-1 font-mono text-sm tracking-[0.25em] text-white"
            >
              {t(`sections.${activeSection}`)}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeSection}
            aria-keyshortcuts="Escape"
            className="cursor-target border border-red-900/60 px-3 py-2 font-mono text-xs text-red-500 transition hover:bg-red-950/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            {t("modal.close")} (Esc)
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto">{renderContent()}</div>
      </div>
    </div>
  );
};

export default SectionModal;