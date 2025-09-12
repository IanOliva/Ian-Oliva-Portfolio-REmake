import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Hud from "./misc/healthHud.jsx"

const navItems = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre mi", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

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
          "md:translate-x-0", // siempre visible en desktop
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full" // toggle en mobile
        )}
      >
        {/* Logo / Nombre */}
        <a
          className="text-2xl font-bold text-primary"
          href="#hero"
          onClick={() => {
            setActiveSection("#hero"),
            setIsMobileMenuOpen(false)
          }}
        >
          <span className="text-glow text-foreground">Ian Oliva</span>
          <span className="block text-sm text-primary">Portfolio</span>
        </a>

        {/* Links de navegación */}
        <nav className="flex flex-col justify-center items-center gap-4 text-lg">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              data-text={item.name}
              className={cn(
                "transition-colors duration-300 ",
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

          <Hud status = "fine"/>
        </nav>
      </aside>
    </>
  );
};
