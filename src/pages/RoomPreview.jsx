import PortfolioScene from "@/components/three/PortfolioScene";
import { PortfolioProvider } from "@/context/PortfolioContext";
import { LanguageProvider }  from "@/context/LanguageProvider";

const RoomPreview = () => {
  return (
    <LanguageProvider>
      <PortfolioProvider>
        <PortfolioScene />
      </PortfolioProvider>
    </LanguageProvider>
  );
};

export default RoomPreview;
