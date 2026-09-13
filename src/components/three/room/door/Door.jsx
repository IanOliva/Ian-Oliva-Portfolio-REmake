import InteractiveObject from "../../interactables/InteractableObject";
import { usePortfolio } from "@/context/PortfolioContext";
import DoorModel from "./DoorModel";

const Door = () => {
  const { openSection } = usePortfolio();

  return (
    <InteractiveObject
      id="links"
      position={[4.85, 0, 0]}
      label="ABRIR PUERTA"
      hitbox={[2, 4, 0.8]}
      onInteract={() => openSection("links")}
    >
    <DoorModel />
    </InteractiveObject>
  );
};

export default Door;