import InteractiveObject from "../../interactables/InteractableObject";
import { usePortfolio } from "@/context/PortfolioContext";
import FileCabinetModel from "./FileCabinetModel";

const FilingCabinet = () => {
  const { openSection } = usePortfolio();

  return (
    <InteractiveObject
      id="about"
      position={[-4, 0, -4]}
      label="EXAMINAR EXPEDIENTE"
      hitbox={[1.5, 1.5, 0.2]}
      onInteract={() => openSection("about")}
    >
      <FileCabinetModel />
    </InteractiveObject>
  );
};

export default FilingCabinet;