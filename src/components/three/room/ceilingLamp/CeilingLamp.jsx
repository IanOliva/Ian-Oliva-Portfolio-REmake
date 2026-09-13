import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import lampModel from "@/assets/models/ceilingLamp.glb";

const CeilingLamp = ({
  position = [0, 0, 0],
}) => {
  const { scene } = useGLTF(lampModel);
  const lightRef = useRef();

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  useFrame(() => {
    if (!lightRef.current) return;

    const time = performance.now() * 0.001;

    // Pequeña variación para darle vida a la luz
    lightRef.current.intensity =
      3.5 + Math.sin(time * 2) * 0.08;
  });

  return (
    <group position={position}>
      {/* Modelo de la lámpara */}
      <primitive
        object={scene}
        scale={1}
      />

      {/* Luz que sale de la lámpara */}
      <pointLight
        ref={lightRef}
        position={[0, -0.4, 0]}
        intensity={3.5}
        distance={10}
        decay={2}
        color="#fff1d0"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
    </group>
  );
};

useGLTF.preload(lampModel);

export default CeilingLamp;