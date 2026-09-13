import { useGLTF } from "@react-three/drei";
import pcModel from "@/assets/models/pc.glb";


const ComputerModel = () => {
  const { scene } = useGLTF(pcModel);
  scene.traverse((child) => {
  if (child.isMesh) {
    child.castShadow = true;
    child.receiveShadow = true;
  }
});

  return (
    <primitive
      object={scene}
      scale={1.5}
      rotation={[0, -1.5, 0]}
    />
  );
};

useGLTF.preload(pcModel);

export default ComputerModel;

