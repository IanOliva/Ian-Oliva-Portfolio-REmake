import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/useLanguage";

const LanguageSelector = () => {
  const { language, setLanguage, languages, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t("language.label")}
      className="fixed right-4 top-4 z-50 flex border border-red-900/60 bg-black/80 font-mono text-xs backdrop-blur-sm"
    >
      {languages.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-pressed={language === code}
          onClick={() => setLanguage(code)}
          className={cn(
            "cursor-target px-3 py-2 uppercase transition",
            "focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-red-500",
            language === code
              ? "bg-red-950/60 text-white"
              : "text-red-500 hover:text-white",
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;