import { useGLTF } from "@react-three/drei";
import floorModel from "@/assets/models/floor.glb";

const FloorModel = () => {
  const { scene } = useGLTF(floorModel);

   scene.traverse((child) => {
    if (child.isMesh) {
      child.receiveShadow = true;
    }
  });

  return (
    <primitive
      object={scene}
      scale={[2.5,1.5,1]}
      position={[-5, 0, -6]}
      rotation={[Math.PI / 2, 0, 0]}
      receiveShadow
    />
  );
};

useGLTF.preload(floorModel);

export default FloorModel;