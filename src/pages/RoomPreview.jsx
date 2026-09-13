import PortfolioScene from "@/components/three/PortfolioScene";
import { PortfolioProvider } from "@/context/PortfolioContext";

const RoomPreview = () => {
  return (
    <PortfolioProvider>
      <PortfolioScene />
    </PortfolioProvider>
  );
};

export default RoomPreview;