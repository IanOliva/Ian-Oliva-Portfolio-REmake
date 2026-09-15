import * as THREE from "three";
import { useMemo } from "react";

const BoardLine = ({
  start = [0, 0, 0],
  end = [1, 1, 0],
  color = "#8b0000",
  curve = 0.15,
}) => {
  const geometry = useMemo(() => {
    const startVector = new THREE.Vector3(...start);
    const endVector = new THREE.Vector3(...end);

    // Punto intermedio para generar una ligera curvatura
    const middle = startVector.clone().lerp(endVector, 0.5);

    // Desplazamiento perpendicular
    middle.x += curve;

    const curvePath = new THREE.QuadraticBezierCurve3(
      startVector,
      middle,
      endVector
    );

    return new THREE.TubeGeometry(
      curvePath,
      20,
      0.018,
      6,
      false
    );
  }, [start, end, curve]);

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        roughness={0.8}
      />
    </mesh>
  );
};

export default BoardLine;