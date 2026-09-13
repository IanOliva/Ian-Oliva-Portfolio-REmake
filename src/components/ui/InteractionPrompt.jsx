import { usePortfolio } from "@/context/PortfolioContext";

const InteractionPrompt = () => {
  const { hoveredObject } = usePortfolio();

  if (!hoveredObject) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed bottom-10 left-1/2 z-50 -translate-x-1/2">
      <div className="border border-red-900/70 bg-black/85 px-6 py-3 shadow-lg backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-red-500">
            [ LMB ]
          </span>

          <span className="font-mono text-xs tracking-[0.2em] text-white">
            {hoveredObject.label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InteractionPrompt;