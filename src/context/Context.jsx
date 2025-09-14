import { createContext, useContext } from "react";

// Context para saber si la animación del Slide terminó
export const SlideContext = createContext(false);

// Hook para usarlo más fácil
export const useSlideFinished = () => useContext(SlideContext);
