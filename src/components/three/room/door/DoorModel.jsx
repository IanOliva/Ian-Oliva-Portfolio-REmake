import { useGLTF } from "@react-three/drei";
import doorModel from "@/assets/models/door.glb";

const DoorModel = () => {
  const { scene } = useGLTF(doorModel);

  scene.traverse((child) => {
  if (child.isMesh) {
    child.castShadow = true;
    child.receiveShadow = true;
  }
});

  return (
    <primitive
      object={scene}
      scale={1.6}
      rotation={[0, 1.57, 0]}
    />
  );
};

useGLTF.preload(doorModel);

export default DoorModel;