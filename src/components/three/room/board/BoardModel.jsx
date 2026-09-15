import { useGLTF } from "@react-three/drei";
import boardModel from "@/assets/models/board.glb";


const BoardModel = () => {
  const { scene } = useGLTF(boardModel);
  scene.traverse((child) => {
  if (child.isMesh) {
    child.castShadow = true;
    child.receiveShadow = true;
  }
});

  return (
    <primitive
      object={scene}
      scale={2.9}
    />
  );
};

useGLTF.preload(boardModel);

export default BoardModel;