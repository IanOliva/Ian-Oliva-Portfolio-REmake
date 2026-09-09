// Pines fijos del tablero de detective (no generados desde otros datos).
// Las fotos de proyectos NO van acá — esas se generan automáticamente
// desde src/data/projects.js dentro de detectiveBoard.js, así que agregar
// un proyecto nuevo no requiere tocar este archivo.
//
// x/y: posición en el tablero, en unidades del mundo 3D, relativas al
// centro del corcho (0,0). color: hex de la nota estilo post-it.
export const boardFixedPins = [
  {
    id: "about",
    label: "INFORME\nPERSONAL",
    color: "#e8d97a",
    x: -1.55,
    y: 0.85,
  },
  {
    id: "contact",
    label: "CONTACTO\nDIRECTO",
    color: "#7ad9a0",
    x: 1.6,
    y: -0.8,
  },
];
