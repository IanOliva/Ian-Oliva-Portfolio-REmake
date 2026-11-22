import { useTexture } from "@react-three/drei";
import ianPicUrl from "@/assets/textures/ian-pic.webp"; 

const BoardPhoto = () => {
  // 2. Le pasás la variable importada al hook
  const texture = useTexture(ianPicUrl);

  return (
    <mesh position={[0, 0, 0.1]} scale={0.5}>
      <planeGeometry args={[1.15, 1.4]} />
      <meshStandardMaterial map={texture} roughness={0.8} transparent={true} alphaTest={0.5}/>
    </mesh>
  );
};

useTexture.preload(ianPicUrl);

export default BoardPhoto;