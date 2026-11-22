import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/useLanguage";
import LoadingLayout from "./LoadingLayout";
import LoadingBar from "./LoadingBar";

// Time in ms to wait before removing the loading screen after the progress reaches 100%.
const FADE_OUT_MS = 600;

const LoadingScreen = () => {
  const { progress, active, errors } = useProgress();
  const { t } = useLanguage();
  const [removed, setRemoved] = useState(false);

  const hasError = errors.length > 0;
  const isDone = progress >= 100 && !active && !hasError;

  useEffect(() => {
    if (!isDone) return;

    const timeout = setTimeout(() => setRemoved(true), FADE_OUT_MS);

    return () => clearTimeout(timeout);
  }, [isDone]);

  if (removed) {
    return null;
  }

  return (
    <LoadingLayout
      className={cn(
        "transition-opacity duration-[600ms] motion-reduce:transition-none",
        isDone ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      {hasError ? (
        <div role="alert" className="flex max-w-sm flex-col items-center gap-4">
          <p className="text-sm text-neutral-200">{t("loading.error")}</p>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="cursor-target border border-red-900/60 px-4 py-2 text-xs text-red-500 transition hover:bg-red-950/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            {t("loading.retry")}
          </button>
        </div>
      ) : (
        <LoadingBar progress={progress} />
      )}
    </LoadingLayout>
  );
};

export default LoadingScreen;