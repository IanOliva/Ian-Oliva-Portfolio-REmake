import InteractiveObject from "../../interactables/InteractableObject";
import { usePortfolio } from "@/context/PortfolioContext";
import BoardModel from "./BoardModel";

const Board = () => {
  const { openSection } = usePortfolio();

  

  return (
    <InteractiveObject
      id="skills"
      position={[4.9, 3, -2]}
      label="EXAMINAR TABLERO"
      hitbox={[1.5, 1.5, 0.2]}
      onInteract={() => openSection("skills")}
    >
      <BoardModel />
    </InteractiveObject>
  );
};

export default Board;