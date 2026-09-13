import { createContext, useContext, useState } from "react";

const PortfolioContext = createContext(null);

export const PortfolioProvider = ({ children }) => {
  const [hoveredObject, setHoveredObject] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  const openSection = (section) => {
    setActiveSection(section);
  };

  const closeSection = () => {
    setActiveSection(null);
  };

  return (
    <PortfolioContext.Provider
      value={{
        hoveredObject,
        setHoveredObject,
        activeSection,
        openSection,
        closeSection,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error(
      "usePortfolio must be used inside PortfolioProvider"
    );
  }

  return context;
};