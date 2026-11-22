import * as THREE from "three";
import { useMemo } from "react";
import { QuadraticBezierLine } from "@react-three/drei";

const BoardLine = ({
  start = [0, 0, 0],
  end = [1, 1, 0],
  color = "#4f1212",
  curve = 0.15,
}) => {
  // Calculamos el punto de control para la curva bezier
  const mid = useMemo(() => {
    const startVector = new THREE.Vector3(...start);
    const endVector = new THREE.Vector3(...end);
    const middle = startVector.clone().lerp(endVector, 0.5);
    middle.x += curve;
    return [middle.x, middle.y, middle.z];
  }, [start, end, curve]);

  return (
    <QuadraticBezierLine
      start={start}
      end={end}
      mid={mid}
      color={color}
      lineWidth={4} // Controla el grosor visual en píxeles/unidades
      transparent={true}
      opacity={0.85} // Simula la ligera transparencia de la tinta roja
    />
  );
};

export default BoardLine;