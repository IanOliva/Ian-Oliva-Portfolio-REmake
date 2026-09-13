import { useGLTF } from "@react-three/drei";
import telephoneModel from "@/assets/models/telephone.glb";

const TelephoneModel = () => {
  const { scene } = useGLTF(telephoneModel);
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <primitive
      object={scene}
      scale={0.15}
      rotation={[1.5, 0, 1.5]}
    />
  );
};

useGLTF.preload(telephoneModel);

export default TelephoneModel;