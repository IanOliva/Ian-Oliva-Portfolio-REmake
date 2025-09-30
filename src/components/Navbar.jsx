import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Hud from "./misc/healthHud.jsx";
import { Slide } from "react-awesome-reveal";
import ThemeToggle from "./misc/ThemeToggle.jsx";

const navItems = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre mi", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      { threshold: 0.6 } // 60% visible
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Botón hamburguesa para mobile */}
      <button
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className="fixed top-4 left-4 z-50 p-2 text-foreground md:hidden"
        aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar principal */}

      
      <aside
        className={cn(
          "fixed top-0 left-3 h-screen w-64 border border-transparent p-8 rounded-lg bg-background/30 backdrop-blur-sm shadow-lg",
          "flex flex-col justify-center items-center py-10 space-y-10 z-40 font-typewriter",
          "md:translate-x-0 animate-fade-in",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Overlay CRT Scanlines */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,0,0,0.05)_0_2px,transparent_2px_4px)] opacity-20 animate-[scrollLines_6s_linear_infinite]" />
          {/* {theme toggle} */}
          <ThemeToggle/>
          
          {/* Logo / Nombre */}
          <a
            className="text-2xl font-bold text-primary"
            href="#hero"
            onClick={() => {
              setActiveSection("#hero");
              setIsMobileMenuOpen(false);
            }}
          >
            <span className="text-glow text-foreground">Ian Oliva</span>
            <span className="block text-sm text-primary">Portfolio</span>
          </a>

          {/* Links de navegación */}
          <nav className="flex flex-col justify-center items-center gap-2 text-lg">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                data-text={item.name}
                className={cn(
                  "transition-colors duration-300 cursor-target",
                  activeSection === item.href
                    ? "text-primary link-animated"
                    : "text-foreground/80 hover:text-primary hover:link-animated"
                )}
                onClick={() => {
                  setActiveSection(item.href);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}

            <Hud/>
          </nav>
      </aside>

    </>
  );
};
