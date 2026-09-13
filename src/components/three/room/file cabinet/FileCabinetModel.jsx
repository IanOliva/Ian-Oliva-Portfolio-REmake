import { useGLTF } from "@react-three/drei";
import fileCabinetModel from "@/assets/models/file_cabinet.glb";


const FileCabinetModel = () => {
  const { scene } = useGLTF(fileCabinetModel);

  scene.traverse((child) => {
  if (child.isMesh) {
    child.castShadow = true;
    child.receiveShadow = true;
  }
});

  return (
    <primitive
      object={scene}
      scale={2}
      rotation={[0, 0, 0]}
    />
  );
};

useGLTF.preload(fileCabinetModel);

export default FileCabinetModel;