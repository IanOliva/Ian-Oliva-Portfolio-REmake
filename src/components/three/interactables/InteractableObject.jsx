import { useEffect, useRef } from "react";
import { usePortfolio } from "@/context/PortfolioContext";

const InteractiveObject = ({
  children,
  position = [0, 0, 0],
  id,
  label = "EXAMINAR",
  onInteract,
  hitbox = [1, 1, 1],
}) => {
  const { hoveredObject, setHoveredObject } = usePortfolio();

  const isHovered = hoveredObject?.id === id;

  const visualRef = useRef();
  const flashRef = useRef(0);

  const handlePointerOver = (event) => {
    event.stopPropagation();

    setHoveredObject({
      id,
      label,
    });

    document.body.style.cursor = "pointer";

    // Flash inicial
    flashRef.current = 1;
  };

  const handlePointerOut = (event) => {
    event.stopPropagation();

    setHoveredObject(null);

    document.body.style.cursor = "default";
  };

  const handleClick = (event) => {
    event.stopPropagation();

    onInteract?.();
  };

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      if (isHovered) {
        // Flash inicial que desaparece rápidamente
        flashRef.current += (0 - flashRef.current) * 0.08;
      } else {
        flashRef.current += (0 - flashRef.current) * 0.15;
      }

      if (visualRef.current) {
        const intensity = isHovered
          ? 0.08 + flashRef.current * 0.35
          : 0;

        visualRef.current.traverse((object) => {
          if (!object.isMesh || !object.material) return;

          const materials = Array.isArray(object.material)
            ? object.material
            : [object.material];

          materials.forEach((material) => {
            if (!material.emissive) return;

            material.emissive.set("#5a0000");
            material.emissiveIntensity = intensity;
          });
        });
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isHovered]);

  return (
    <group position={position}>
      {/* Modelo visual */}
      <group
        ref={visualRef}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        {children}
      </group>

      {/* Hitbox invisible */}
      <mesh
        visible={false}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <boxGeometry args={hitbox} />
        <meshBasicMaterial
          transparent
          opacity={0}
        />
      </mesh>
    </group>
  );
};

export default InteractiveObject;

