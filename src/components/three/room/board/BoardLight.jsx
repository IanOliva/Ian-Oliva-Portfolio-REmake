import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const BoardLight = () => {
  const lightRef = useRef();
  const targetRef = useRef();

  const { scene } = useThree();

  useEffect(() => {
    if (!lightRef.current || !targetRef.current) return;

    lightRef.current.target = targetRef.current;

    scene.add(targetRef.current);

    return () => {
      scene.remove(targetRef.current);
    };
  }, [scene]);

  return (
    <>
      <spotLight
        ref={lightRef}
        position={[2.8, 4.3, -1]}
        intensity={8}
        distance={8}
        angle={0.45}
        penumbra={0.6}
        decay={2}
        color="#fff5e1"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <object3D
        ref={targetRef}
        position={[4.7, 2.8, -1]}
      />
    </>
  );
};

export default BoardLight;