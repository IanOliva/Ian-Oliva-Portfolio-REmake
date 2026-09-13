import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Room from "./Room";
import CameraController from "./CameraController";
import InteractionPrompt from "../ui/InteractionPrompt";
import SectionModal from "../ui/SectionModal";

const PortfolioScene = () => {
  return (
    <div className="fixed inset-0 h-full w-full bg-black">
      <Canvas shadows
        camera={{
          position: [0, 1.6, 7],
          fov: 55,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: false,
        }}
      >
        <color attach="background" args={["#050505"]} />

        <Suspense fallback={null}>
          <CameraController />
          <Room />
        </Suspense>
      </Canvas>

      
       {/* UI HTML por encima del Canvas */}
      <InteractionPrompt />
      <SectionModal />
    </div>
  );
};

export default PortfolioScene;