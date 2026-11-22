import { cn } from "@/lib/utils";

// Contenedor común de todas las pantallas de carga: negro, a pantalla completa
// y con el contenido centrado. Así no se nota el cambio entre una y otra.
const LoadingLayout = ({ className, children }) => (
  <div
    className={cn(
      "fixed inset-0 z-[55] flex flex-col items-center justify-center gap-6 bg-black px-6 text-center font-mono",
      className,
    )}
  >
    {children}
  </div>
);

export default LoadingLayout;