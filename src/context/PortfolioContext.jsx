import { createContext, useContext, useState } from "react";

const PortfolioContext = createContext(null);

export const PortfolioProvider = ({ children }) => {
  const [hoveredObject, setHoveredObject] = useState(null);

  const [activeSection, setActiveSection] = useState(null);

  const [cameraTarget, setCameraTarget] = useState(null);

  const [isCameraMoving, setIsCameraMoving] = useState(false);

  const [isReturning, setIsReturning] = useState(false);

  const openSection = (section) => {
    setActiveSection(section);
  };

  const closeSection = () => {
    setActiveSection(null);
    setIsReturning(true);
  };

  const navigateToObject = (section) => {
    setCameraTarget({
      section,
    });

    setIsCameraMoving(true);
  };

  const finishCameraMovement = () => {
    if (cameraTarget?.section) {
      setActiveSection(cameraTarget.section);
    }

    setIsCameraMoving(false);
    setCameraTarget(null);
  };

  return (
    <PortfolioContext.Provider
      value={{
        hoveredObject,
        setHoveredObject,

        activeSection,
        openSection,
        closeSection,

        cameraTarget,
        isCameraMoving,
        navigateToObject,
        finishCameraMovement,

        isReturning,
        setIsReturning,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error("usePortfolio must be used inside PortfolioProvider");
  }

  return context;
};
