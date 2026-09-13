import InteractiveObject from "../../interactables/InteractableObject";
import { usePortfolio } from "@/context/PortfolioContext";
import TelephoneModel from "./telephoneModel";

const Telephone = () => {
  const { openSection } = usePortfolio();

  return (
    <InteractiveObject
      id="contact"
      position={[4.9, 3, 2]}
      label="LLAMAR CONTACTO"
      hitbox={[1.5, 1.2, 1.2]}
      onInteract={() => openSection("contact")}
    >
      <TelephoneModel />
    </InteractiveObject>
  );
};

export default Telephone;