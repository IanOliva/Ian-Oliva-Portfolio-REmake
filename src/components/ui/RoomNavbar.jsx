import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Hud from "@/components/misc/healthHud.jsx";
import ThemeToggle from "@/components/misc/ThemeToggle.jsx";

const navItems = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre mi", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];

export const RoomNavbar = () => {
  const [activeSection, setActiveSection] = useState("#hero");

  // Sonido al click de links
  useEffect(() => {
    const linkSound = new Audio("/sounds/inventory.mp3");
    linkSound.volume = 0.1;
    const handleLinkClick = () => {
      linkSound.currentTime = 0;
      linkSound.play();
    };
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });
    return () => {
      document.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  // IntersectionObserver para marcar sección activa
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }, // 60% visible
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

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
        <a
          className="font-bold text-primary"
          href="#hero"
          onClick={() => {
            setActiveSection("#hero");
          }}
        >
          <span className="text-glow text-foreground">Ian Oliva</span>
          <span className="block text-sm text-primary">Portfolio</span>
        </a>

        {/* Links de navegación */}
        <nav className="flex flex-row  gap-6">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              data-text={item.name}
              className={cn(
                "transition-colors duration-300 cursor-target",
                activeSection === item.href
                  ? "text-primary link-animated"
                  : "text-foreground/80 hover:text-primary hover:link-animated",
              )}
              onClick={() => {
                setActiveSection(item.href);
              }}
            >
              {item.name}
            </a>
          ))}

        </nav>
          {/* <Hud /> */}
      </aside>
    </>
  );
};
