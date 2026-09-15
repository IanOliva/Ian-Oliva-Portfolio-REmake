import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { usePortfolio } from "@/context/PortfolioContext";

const CAMERA_POSITIONS = {
  hero: {
    position: [0.8, 2.6, -1.8],
    target: [2, 1.2, -4.5],
  },

  projects: {
    position: [-2.4, 2.6, -2.2],
    target: [-4.5, 1.4, -4],
  },

  about: {
    position: [2.8, 3.2, -0.2],
    target: [4.85, 2.8, -1],
  },

  contact: {
    position: [2.8, 3.2, 1.2],
    target: [4.9, 3, 2],
  },

  links: {
    position: [2.8, 2.4, 2.8],
    target: [4.95, 1.5, 3.5],
  },
};

const CameraController = () => {
  const { camera } = useThree();

  const {
    activeSection,
    cameraTarget,
    isCameraMoving,
    finishCameraMovement,
    isReturning,
    setIsReturning,
  } = usePortfolio();

  const targetRotation = useRef({
    x: -0.35,
    y: -0.55,
  });

  const currentRotation = useRef({
    x: -0.35,
    y: -0.55,
  });

  const targetPosition = useRef(new THREE.Vector3());
  const targetLookAt = useRef(new THREE.Vector3());
  const returnPosition = useRef(new THREE.Vector3());
  const returnQuaternion = useRef(new THREE.Quaternion());

  const targetQuaternion = useRef(new THREE.Quaternion());

  const isTravelling = useRef(false);

  /*
   * Posición inicial
   */
  useEffect(() => {
    camera.position.set(-4, 4.5, 5);

    camera.rotation.set(-0.35, -0.55, 0);
  }, [camera]);

  /*
   * Cuando recibimos una navegación,
   * preparamos el destino de la cámara.
   */
  useEffect(() => {
    if (!cameraTarget?.section) return;

    const destination = CAMERA_POSITIONS[cameraTarget.section];

    if (!destination) return;

    // Guardamos dónde estaba la cámara antes del viaje
    returnPosition.current.copy(camera.position);
    returnQuaternion.current.copy(camera.quaternion);

    targetPosition.current.set(...destination.position);

    targetLookAt.current.set(...destination.target);

    const tempCamera = camera.clone();

    tempCamera.position.copy(targetPosition.current);

    tempCamera.lookAt(targetLookAt.current);

    targetQuaternion.current.copy(tempCamera.quaternion);

    isTravelling.current = true;
  }, [cameraTarget, camera]);

  /*
   * Movimiento del mouse.
   */
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (activeSection || isCameraMoving) {
        return;
      }

      const normalizedX = (event.clientX / window.innerWidth) * 2 - 1;

      const normalizedY = (event.clientY / window.innerHeight) * 2 - 1;

      targetRotation.current.y = -0.55 - normalizedX * 0.12;

      targetRotation.current.x = -0.35 - normalizedY * 0.08;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [activeSection, isCameraMoving]);

  useEffect(() => {
    if (!isReturning) return;

    targetPosition.current.copy(returnPosition.current);

    targetQuaternion.current.copy(returnQuaternion.current);

    isTravelling.current = true;
  }, [isReturning]);

  /*
   * Animación principal.
   */
  useEffect(() => {
    let animationFrame;

    const animate = () => {
      /*
       * ==========================
       * CAMERA TRAVEL
       * ==========================
       */
      if (isTravelling.current) {
        /*
         * Movimiento de posición
         */
        camera.position.lerp(targetPosition.current, 0.045);

        /*
         * Movimiento de rotación
         */
        camera.quaternion.slerp(targetQuaternion.current, 0.045);

        /*
         * Comprobamos si ya llegó.
         */
        const distance = camera.position.distanceTo(targetPosition.current);

        const rotationDifference =
          1 - Math.abs(camera.quaternion.dot(targetQuaternion.current));

        if (distance < 0.03 && rotationDifference < 0.001) {
          camera.position.copy(targetPosition.current);

          camera.quaternion.copy(targetQuaternion.current);

          isTravelling.current = false;

          if (isReturning) {
            setIsReturning(false);
          } else {
            finishCameraMovement();
          }
        }
      }

      /*
       * ==========================
       * MOUSE LOOK
       * ==========================
       */
      if (!isTravelling.current && !activeSection && !isCameraMoving) {
        currentRotation.current.x +=
          (targetRotation.current.x - currentRotation.current.x) * 0.04;

        currentRotation.current.y +=
          (targetRotation.current.y - currentRotation.current.y) * 0.04;

        camera.rotation.set(
          currentRotation.current.x,
          currentRotation.current.y,
          0,
        );
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [
    camera,
    activeSection,
    isCameraMoving,
    finishCameraMovement,
    isReturning,
    setIsReturning,
  ]);

  return null;
};

export default CameraController;
