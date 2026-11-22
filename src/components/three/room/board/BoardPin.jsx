import { useGLTF } from "@react-three/drei";
import boardPinModel from "@/assets/models/board_pin.glb";

const BoardPin = ({
  position = [0, 0, 0],
  rotation = [1, 0, 0],
  scale = 6,
}) => {
  // Carga el archivo .glb / .gltf desde la carpeta public
  const { scene } = useGLTF(boardPinModel);

  // Clonamos la escena si vas a renderizar múltiples chinches/pins en pantalla
  const clonedScene = scene.clone();

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <primitive object={clonedScene} castShadow receiveShadow />
    </group>
  );
};

// Precarga el modelo 3D para evitar parpadeos al montarse
useGLTF.preload(boardPinModel);

export default BoardPin;