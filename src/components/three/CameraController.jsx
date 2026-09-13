import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { usePortfolio } from "@/context/PortfolioContext";

const CameraController = () => {
  const { camera } = useThree();
  const { activeSection } = usePortfolio();

  const targetRotation = useRef({
    x: -0.35,
    y: -0.55,
  });

  const currentRotation = useRef({
    x: -0.35,
    y: -0.55,
  });

  useEffect(() => {
    camera.position.set(-4, 4.5, 5);

    camera.rotation.set(
      -0.35,
      -0.55,
      0
    );
  }, [camera]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (activeSection) return;

      const normalizedX =
        (event.clientX / window.innerWidth) * 2 - 1;

      const normalizedY =
        (event.clientY / window.innerHeight) * 2 - 1;

      // Mouse izquierda → cámara izquierda
      // Mouse derecha → cámara derecha
      targetRotation.current.y =
        -0.55 - normalizedX * 0.12;

      // Mouse arriba → cámara arriba
      // Mouse abajo → cámara abajo
      targetRotation.current.x =
        -0.35 - normalizedY * 0.08;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, [activeSection]);

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      currentRotation.current.x +=
        (targetRotation.current.x -
          currentRotation.current.x) *
        0.04;

      currentRotation.current.y +=
        (targetRotation.current.y -
          currentRotation.current.y) *
        0.04;

      camera.rotation.set(
        currentRotation.current.x,
        currentRotation.current.y,
        0
      );

      animationFrame =
        requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [camera]);

  return null;
};

export default CameraController;