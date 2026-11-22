import * as THREE from "three";
import { useTexture } from "@react-three/drei";

const BoardEvidence = ({
  image,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = [0.8, 1],
}) => {
  const texture = useTexture(image);

  return (
    <group position={position} rotation={rotation}>
      {/* Papel */}
      <mesh castShadow receiveShadow>
        <planeGeometry args={size} />
        <meshStandardMaterial
          map={texture}
          roughness={0.9}
          side={THREE.DoubleSide}
          transparent={true}
          alphaTest={0.5}
        />
      </mesh>
    </group>
  );
};

export default BoardEvidence;