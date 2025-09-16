import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
    // Set initial theme based on system preference
    else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const glitchSound = new Audio("/sounds/glitch.mp3");
    glitchSound.volume = 1.0;
    glitchSound.play();

    const body = document.body;
    body.classList.add("animate-glitch");
    setTimeout(() => body.classList.remove("animate-glitch"), 500);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-[-48%] z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden",
        "hover:shadow-[0_0_25px_rgba(255,0,0,0.9)] hover:scale-105",
      "active:scale-95 transition-all duration-300 relative overflow-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-primary animate-pulse" />
      ) : (
        <Moon className="h-6 w-6 text-primary animate-pulse" />
      )}
    </button>
  );
};

export default ThemeToggle;
