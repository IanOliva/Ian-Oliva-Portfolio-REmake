import { usePortfolio } from "@/context/PortfolioContext";
import { useLanguage } from "@/context/useLanguage";

const InteractionPrompt = () => {
  const { hoveredObject } = usePortfolio();
  const { t } = useLanguage();

  if (!hoveredObject) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed bottom-10 left-1/2 z-50 -translate-x-1/2">
      <div className="border border-red-900/70 bg-black/85 px-6 py-3 shadow-lg backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-red-500">
            {t(
              hoveredObject.via === "keyboard"
                ? "prompt.keyboardAction"
                : "prompt.action",
            )}
          </span>

          <span className="font-mono text-xs tracking-[0.2em] text-white">
            {t(`objects.${hoveredObject.id}`)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InteractionPrompt;
