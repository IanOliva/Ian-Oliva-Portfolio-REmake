import InteractiveObject from "../../interactables/InteractableObject";
import { usePortfolio } from "@/context/PortfolioContext";
import ComputerModel from "./ComputerModel";

const Computer = () => {
  const { openSection } = usePortfolio();

  return (
    <InteractiveObject
      id="hero"
      position={[1.5,0, -4.5]}
      label="ACCEDER AL TERMINAL"
      hitbox={[1.8, 1.8, 1.2]}
      onInteract={() => openSection("hero")}
    >
      <ComputerModel />
    </InteractiveObject>
  );
};

export default Computer;