import * as THREE from "three";

const BoardPaper = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = [0.8, 1],
}) => {
  return (
    <group position={position} rotation={rotation}>
      {/* Papel */}
      <mesh receiveShadow castShadow>
        <planeGeometry args={size} />

        <meshStandardMaterial
          color="#d8d2c4"
          roughness={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Pequeño espesor del papel */}
      <mesh position={[0, 0, -0.008]}>
        <boxGeometry args={[size[0], size[1], 0.015]} />

        <meshStandardMaterial color="#c8c1b3" roughness={1} />
      </mesh>
    </group>
  );
};

export default BoardPaper;
