import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/useLanguage";

// progress: número de 0 a 100, o null cuando todavía no se sabe cuánto falta.
const LoadingBar = ({ progress = null }) => {
  const { t } = useLanguage();

  const isIndeterminate = progress === null;
  const rounded = isIndeterminate ? 0 : Math.round(progress);

  return (
    <>
      <p className="text-sm text-neutral-200">{t("loading.label")}</p>

      <div
        role="progressbar"
        aria-label={t("loading.label")}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={isIndeterminate ? undefined : rounded}
        className="h-1 w-64 max-w-full bg-red-950"
      >
        <div
          className={cn(
            "h-full bg-red-600",
            isIndeterminate
              ? "w-full animate-pulse motion-reduce:animate-none"
              : "transition-[width] duration-300 motion-reduce:transition-none",
          )}
          style={isIndeterminate ? undefined : { width: `${progress}%` }}
        />
      </div>

      {/* Se reserva el espacio aunque no haya porcentaje para que nada salte. */}
      <p
        className={cn(
          "text-xs tabular-nums text-neutral-300",
          isIndeterminate && "invisible",
        )}
      >
        {rounded}%
      </p>

      <p className="max-w-xs text-xs text-neutral-400">{t("loading.hint")}</p>
    </>
  );
};

export default LoadingBar;