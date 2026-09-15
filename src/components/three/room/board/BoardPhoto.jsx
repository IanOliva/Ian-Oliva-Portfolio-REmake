import { useTexture } from "@react-three/drei";
// 1. Importás la imagen desde la carpeta assets usando una ruta relativa
import ianPicUrl from "@/assets/textures/ian-pic.webp"; // Ajustá los "../" según dónde esté este componente

const BoardPhoto = () => {
  // 2. Le pasás la variable importada al hook
  const texture = useTexture(ianPicUrl);

  return (
    <mesh position={[0, 0, 0.16]} scale={0.5}>
      <planeGeometry args={[1.15, 1.4]} />
      <meshStandardMaterial map={texture} roughness={0.8} />
    </mesh>
  );
};

useTexture.preload(ianPicUrl);

export default BoardPhoto;