import InteractiveObject from "../../interactables/InteractableObject";
import { usePortfolio } from "@/context/PortfolioContext";
import TelephoneModel from "./TelephoneModel";

const Telephone = () => {
  const { navigateToObject } = usePortfolio();

  return (
    <InteractiveObject
      id="contact"
      position={[4.9, 3, 2]}
      label="LLAMAR CONTACTO"
      hitbox={[1.5, 1.2, 1.2]}
      onInteract={() => navigateToObject("contact")}
    >
      <TelephoneModel />
    </InteractiveObject>
  );
};

export default Telephone;