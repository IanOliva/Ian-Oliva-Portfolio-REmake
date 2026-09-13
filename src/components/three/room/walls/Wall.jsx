import { useTexture } from "@react-three/drei";
import * as THREE from "three";

import wallTexture from "@/assets/textures/wall_texture.webp";

const Wall = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = [10, 5],
}) => {
  const texture = useTexture(wallTexture);

  texture.wrapS = texture.wrapT = 1000;
  texture.repeat.set(4, 2);

  return (
    <mesh position={position} rotation={rotation} receiveShadow>
      <planeGeometry args={size} />
      <meshStandardMaterial map={texture}side={THREE.DoubleSide} />
      
    </mesh>
  );
};

export default Wall;