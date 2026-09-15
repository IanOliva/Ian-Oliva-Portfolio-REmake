import * as THREE from "three";

const BoardPin = ({
  position = [0, 0, 0],
}) => {
  return (
    <group position={position}>
      {/* Cabeza de la chinche */}
      <mesh castShadow>
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshStandardMaterial
          color="#8b0000"
          roughness={0.35}
          metalness={0.6}
        />
      </mesh>

      {/* Parte clavada en el tablero */}
      <mesh
        position={[0, 0, -0.045]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <cylinderGeometry args={[0.018, 0.018, 0.10, 8]} />
        <meshStandardMaterial
          color="#333333"
          roughness={0.5}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
};

export default BoardPin;