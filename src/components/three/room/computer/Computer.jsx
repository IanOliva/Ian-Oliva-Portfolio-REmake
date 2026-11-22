import InteractiveObject from "../../interactables/InteractableObject";
import { usePortfolio } from "@/context/PortfolioContext";
import ComputerModel from "./ComputerModel";

const Computer = () => {
  const { navigateToObject } = usePortfolio();

  return (
    <InteractiveObject
      id="hero"
      position={[2,0, -4.5]}
      hitbox={[1.8, 1.8, 1.2]}
      onInteract={() => navigateToObject("hero")}
    >
      <ComputerModel />
    </InteractiveObject>
  );
};

export default Computer;