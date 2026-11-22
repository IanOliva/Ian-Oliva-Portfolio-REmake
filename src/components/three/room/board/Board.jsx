import InteractiveObject from "../../interactables/InteractableObject";
import { usePortfolio } from "@/context/PortfolioContext";

import BoardModel from "./BoardModel";
import BoardPhoto from "./BoardPhoto";
import BoardLine from "./BoardLine";
import BoardPin from "./BoardPin";
import BoardPaper from "./BoardPaper";
import BoardEvidence from "./BoardEvidence";
import argentinaMap from "@/assets/textures/arg_map.webp";
import cudiPolaroid from "@/assets/textures/board/cudi_polaroid.webp";

const Board = () => {
  const { navigateToObject } = usePortfolio();

  return (
    <InteractiveObject
      id="about"
      position={[4.85, 2.8, -1]}
      rotation={[0, -Math.PI / 2, 0]}
      label="EXAMINAR ARCHIVO"
      hitbox={[3, 2.2, 0.3]}
      onInteract={() => navigateToObject("about")}
    >
      <BoardModel />

      <BoardPhoto />

      {/* <BoardLine start={[0, 0, 0.2]} end={[1.1, 0.65, 0.2]} curve={-0.2} />
      <BoardLine start={[0.1, -0.1, 0.2]} end={[1.15, -0.7, 0.2]} curve={0.2} />
      <BoardLine
      start={[0, -0.1, 0.2]}
      end={[-1.2, -0.65, 0.2]}
      curve={-0.25}
      /> */}


      <BoardPin position={[1.1, 0.65, 0.23]} />

      <BoardPin position={[-1.2, -0.65, 0.23]} />

      <BoardPin position={[1.15, -0.7, 0.23]} />

      <BoardLine start={[-0.1, 0.2, 0.12]} end={[-1.2, 0.7, 0.2]} curve={0.35} />
      <BoardPin position={[-1.5, 1, 0.25]} />
      <BoardEvidence
        image={argentinaMap}
        position={[-1.5, 0.7, 0]}
        rotation={[0, 0, -0.08]}
        size={[0.8, 0.95]}
      />

      <BoardLine start={[-1.2, 0.8, 0.2]} end={[-0.12, 0.65, 1.5]} curve={-0.25} />
      <BoardPin position={[-0.2, 0.95, 0.7]} />
      <BoardEvidence
        image={cudiPolaroid}
        position={[-0.3, 0.95, 0]}
        rotation={[0, 0, 0.08]}
        size={[0.5, 0.65]}
      />

      {/* <BoardPaper
        position={[1.1, 0.65, 0.21]}
        rotation={[0, 0, 0.06]}
        size={[0.75, 0.95]}
      />

      <BoardPaper
        position={[-1.2, -0.65, 0.21]}
        rotation={[0, 0, 0.1]}
        size={[0.8, 0.9]}
      />

      <BoardPaper
        position={[1.15, -0.7, 0.21]}
        rotation={[0, 0, -0.07]}
        size={[0.8, 0.9]}
      /> */}
    </InteractiveObject>
  );
};

export default Board;
