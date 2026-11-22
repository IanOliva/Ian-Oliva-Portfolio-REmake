import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const RoomLights = () => {
  const redLightRef = useRef();

  useFrame(() => {
    if (!redLightRef.current) return;

    const time = performance.now() * 0.001;

    redLightRef.current.intensity = 0.25 + Math.sin(time * 2) * 0.02;
  });

  return (
    <>
      {/* Iluminación ambiental */}
      <ambientLight intensity={0.3} />

      {/* Luz frontal suave */}
      <pointLight
        position={[0, 3, 4]}
        intensity={1.2}
        distance={10}
        decay={2}
      />

      <spotLight
        position={[3.5, 4.5, -1]}
        intensity={8}
        distance={8}
        angle={0.45}
        penumbra={0.6}
        decay={2}
        color="#fff4df"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
    </>
  );
};

export default RoomLights;
