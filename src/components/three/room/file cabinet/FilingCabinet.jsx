import InteractiveObject from "../../interactables/InteractableObject";
import { usePortfolio } from "@/context/PortfolioContext";
import FileCabinetModel from "./FileCabinetModel";

const FilingCabinet = () => {
  const { navigateToObject } = usePortfolio();

  return (
    <InteractiveObject
      id="projects"
      position={[-4.5, 0, -4]}
      hitbox={[1.5, 1.5, 0.2]}
      onInteract={() => navigateToObject("projects")}
    >
      <FileCabinetModel />
    </InteractiveObject>
  );
};

export default FilingCabinet;