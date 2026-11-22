import { Fragment } from "react";

// Resalta la primera letra de cada palabra con el color principal, como en los
// títulos de sección ("Sobre mí" -> S y m). Funciona con cualquier idioma.
const HighlightedInitials = ({ text }) =>
  text.split(" ").map((word, index) => (
    <Fragment key={index}>
      {index > 0 && " "}
      <span className="text-primary">{word.charAt(0)}</span>
      {word.slice(1)}
    </Fragment>
  ));

export default HighlightedInitials;