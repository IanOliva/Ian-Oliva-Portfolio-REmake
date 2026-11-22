import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import Hud from "@/components/misc/healthHud.jsx";
import ThemeToggle from "@/components/misc/ThemeToggle.jsx";
import { useLanguage } from "@/context/useLanguage";
import { usePortfolio } from "@/context/PortfolioContext";

// Cada ítem usa el mismo id que el objeto 3D al que lleva.
const navItems = ["hero", "about", "projects", "contact", "links"];

export const RoomNavbar = () => {
  const { t } = useLanguage();
  const {
    hoveredObject,
    setHoveredObject,
    navigateToObject,
    isCameraMoving,
    isReturning,
    activeSection,
  } = usePortfolio();

  const clickSound = useRef(null);

  // No se puede viajar a otro objeto mientras la cámara se mueve o hay algo abierto.
  const isBusy = isCameraMoving || isReturning || Boolean(activeSection);

  useEffect(() => {
    const sound = new Audio("/sounds/inventory.mp3");
    sound.volume = 0.1;
    clickSound.current = sound;
  }, []);

  // El sonido es un adorno: si el navegador lo bloquea o falla, no debe
  // impedir que el botón haga su trabajo.
  const playClickSound = () => {
    const sound = clickSound.current;
    if (!sound) return;

    try {
      sound.currentTime = 0;
      Promise.resolve(sound.play()).catch(() => {});
    } catch {
      // Se ignora el error de audio a propósito.
    }
  };

  const handleSelect = (id) => {
    if (isBusy) return;

    navigateToObject(id);
    playClickSound();
  };

  // Resalta el objeto 3D correspondiente, igual que si se lo apuntara con el mouse.
  const handleMouseEnter = (id) => {
    if (isBusy) return;

    setHoveredObject({ id, via: "pointer" });
  };

  // Solo con foco de teclado: un clic con el mouse ya se resolvió en handleMouseEnter.
  const handleFocus = (event, id) => {
    if (isBusy || !event.currentTarget.matches(":focus-visible")) return;

    setHoveredObject({ id, via: "keyboard" });
  };

  // Solo limpia si el resaltado sigue siendo de este ítem.
  const handleLeave = (id) => {
    setHoveredObject((current) => (current?.id === id ? null : current));
  };

  return (
    <>
      {/* Sidebar principal */}

      <aside
        className={cn(
          "fixed top-0 w-1/2 left-1/2 -translate-x-1/2 border border-transparent rounded-lg bg-background/30 backdrop-blur-sm shadow-lg",
          "flex flex-row justify-evenly items-center gap-2 z-50 font-typewriter",
          "animate-fade-in text-lg",
        )}
      >
        {/* Overlay CRT Scanlines */}
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,0,0,0.05)_0_2px,transparent_2px_4px)] opacity-20 animate-[scrollLines_6s_linear_infinite]" />
        {/* {theme toggle} */}
        <ThemeToggle />

        {/* Logo / Nombre */}
        <p className="font-bold text-primary">
          <span className="text-glow text-foreground">Ian Oliva</span>
          <span className="block text-sm text-primary">Portfolio</span>
        </p>

        {/* Un botón por objeto de la habitación */}
        <nav aria-label={t("nav.label")} className="flex flex-row gap-6">
          {navItems.map((id) => {
            const isHighlighted = hoveredObject?.id === id;

            return (
              <button
                key={id}
                type="button"
                data-text={t(`nav.${id}`)}
                aria-disabled={isBusy}
                onClick={() => handleSelect(id)}
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={() => handleLeave(id)}
                onFocus={(event) => handleFocus(event, id)}
                onBlur={() => handleLeave(id)}
                className={cn(
                  "cursor-target transition-colors duration-300",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500",
                  "aria-disabled:opacity-50",
                  isHighlighted
                    ? "text-primary link-animated"
                    : "text-foreground/80 hover:text-primary hover:link-animated",
                )}
              >
                {t(`nav.${id}`)}
              </button>
            );
          })}
        </nav>
        {/* <Hud /> */}
      </aside>
    </>
  );
};