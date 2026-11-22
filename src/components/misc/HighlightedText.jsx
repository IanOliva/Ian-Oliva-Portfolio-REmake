// Muestra un texto traducido resaltando con el efecto "console-glow" los
// fragmentos marcados con llaves. Ejemplo: "Estado: {activo}".
// Así el idioma decide qué palabras se resaltan, sin cortar las frases.
const HighlightedText = ({ text, className = "console-glow" }) =>
  text.split(/\{([^}]*)\}/).map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className={className}>
        {part}
      </span>
    ) : (
      part
    ),
  );

export default HighlightedText;