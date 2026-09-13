import Floor from "./room/floor/Floor";
import Wall from "./room/walls/Wall";
import Computer from "./room/computer/Computer";
import FilingCabinet from "./room/file cabinet/FilingCabinet";
import InvestigationBoard from "./room/board/InvestigationBoard";
import Telephone from "./room/phone/Telephone";
import Door from "./room/door/Door";
import RoomLights from "./room/RoomLights";
import CeilingLamp from "./room/ceilingLamp/CeilingLamp";

const Room = () => {
  return (
    <group>
      {/* Luz ambiental */}
      <RoomLights />

      {/* Estructura de la habitación */}
      <Floor />

      <Wall position={[0, 2.5, -5]} rotation={[0, 0, 0]} size={[10, 5]} />

      <Wall
        position={[-5, 2.5, 0]}
        rotation={[0, Math.PI / 2, 0]}
        size={[10, 5]}
      />

      <Wall
        position={[5, 2.5, 0]}
        rotation={[0, Math.PI / 2, 0]}
        size={[10, 5]}
      />

      <Wall
        position={[0, 5, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        size={[10, 10]}
      />

      <CeilingLamp position={[0, 4.95, 0.5]} />

      {/* Objetos interactivos */}
      <Computer />
      <FilingCabinet />
      <InvestigationBoard />
      <Telephone />
      <Door />
    </group>
  );
};

export default Room;
