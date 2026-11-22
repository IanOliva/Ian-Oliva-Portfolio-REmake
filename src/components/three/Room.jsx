import Floor from "./room/floor/Floor";
import Wall from "./room/walls/Wall";
import Ceiling from "./room/ceiling/Ceiling";
import Computer from "./room/computer/Computer";
import FilingCabinet from "./room/file cabinet/FilingCabinet";
import Board from "./room/board/Board";
import Telephone from "./room/phone/Telephone";
import Door from "./room/door/Door";
import RoomLights from "./room/RoomLights";
import CeilingLamp from "./room/ceilingLamp/CeilingLamp";
import Boardlight from "./room/board/BoardLight";

const Room = () => {
  return (
    <group>
      {/* Luz ambiental */}
      <RoomLights />
      <Boardlight />


      {/* Estructura de la habitación */}
      <Floor />

      {/* Pared del fondo */}
      <Wall position={[0, 2.5, -5]} rotation={[0, 0, 0]} size={[10, 5]} />

      {/* Pared izquierda */}
      <Wall
        position={[-5, 2.5, 0]}
        rotation={[0, Math.PI / 2, 0]}
        size={[10, 5]}
      />

      {/* Pared derecha */}
      <Wall
        position={[5, 2.5, 0]}
        rotation={[0, Math.PI / 2, 0]}
        size={[10, 5]}
      />

      {/* Pared de cierre */}
      <Wall position={[0, 2.5, 5]} rotation={[0, 0, 0]} size={[10, 5]} />

      <Ceiling />

      <CeilingLamp position={[0, 4.95, 0.5]} />

      {/* Objetos interactivos */}
      <Computer />
      <FilingCabinet />
      <Board />
      <Telephone />
      <Door />
    </group>
  );
};

export default Room;
