import { useCallback, useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, translate } from "@/i18n";

const STORAGE_KEY = "portfolio-language";

// Prioridad: idioma guardado, idioma del navegador, idioma por defecto.
const detectInitialLanguage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGUAGES.includes(saved)) return saved;
  } catch {
    // El almacenamiento puede no estar disponible; se sigue sin guardar.
  }

  const browser = navigator.language?.slice(0, 2);
  return SUPPORTED_LANGUAGES.includes(browser) ? browser : DEFAULT_LANGUAGE;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(detectInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;

    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ver nota en detectInitialLanguage.
    }
  }, [language]);

  const t = useCallback((key) => translate(language, key), [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t, languages: SUPPORTED_LANGUAGES }),
    [language, t],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};