import { useTexture } from "@react-three/drei";
import * as THREE from "three";

import ceilingTexture from "@/assets/textures/ceiling_texture.webp";

const Ceiling = ({
  position = [0, 5, 0],
  rotation = [Math.PI / 2, 0, 0],
  size = [10, 10],
}) => {
  const texture = useTexture(ceilingTexture);

  texture.wrapS = texture.wrapT = 1000;
  texture.repeat.set(1, 2);

  return (
    <mesh position={position} rotation={rotation} receiveShadow>
      <planeGeometry args={size} />
      <meshStandardMaterial map={texture}side={THREE.DoubleSide} />
      
    </mesh>
  );
};

export default Ceiling;