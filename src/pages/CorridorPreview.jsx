import { useRef } from "react";
import ScrollCorridor from "@/components/three/ScrollCorridor";

/**
 * Ruta de prueba aislada — no se linkea desde la navegación real del sitio.
 * Sirve para validar la sensación de movimiento del pasillo 3D (Etapa 1)
 * antes de integrar puertas/salas (Etapa 2) y contenido real (Etapa 3).
 *
 * Visitar en local: http://localhost:5173/corridor-preview
 */
const CorridorPreview = () => {
  const scrollHeightRef = useRef(null);

  return (
    <div>
      <ScrollCorridor scrollHeightRef={scrollHeightRef} />

      <div
        ref={scrollHeightRef}
        style={{
          height: "400vh",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "fixed",
            top: 20,
            left: 20,
            color: "#3adb84",
            fontFamily: "monospace",
            fontSize: 14,
            letterSpacing: "0.05em",
            zIndex: 10,
          }}
        >
          ETAPA 1 — prueba de pasillo · scrolleá para avanzar
        </div>
      </div>
    </div>
  );
};

export default CorridorPreview;
