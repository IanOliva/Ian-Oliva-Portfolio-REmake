import { FaCode } from "react-icons/fa";

const UmbrellaIDCard = ({ onClose }) => {
  return (
    <div className="absolute overflow-visible top-30 left-100 w-100 bg-gradient-to-br from-[#0c0c0c] to-[#1a1a1a] rounded-lg border-4 border-primary shadow-[0_0_30px_var(--color-primary)] overflow-hidden font-typewriter text-white animate-fade-in">
      {/* Botón de cierre */}
      <button
        onClick={onClose}
        className="absolute top-0 right-[-30px] text-primary hover:text-red-300 transition-colors text-xl font-bold"
        aria-label="Cerrar"
      >
        ✕
      </button>
      <section>
        {/* Logo Umbrella */}
        <div className="flex items-center justify-evenly p-1">
          <img
            src="/Umbrella_Corporation_logo.svg"
            alt="Umbrella Corporation"
            className="w-10 h-10"
          />
          <div>
            <h2 className="text-lg font-bold tracking-wider">UMBRELLA</h2>
            <p className="text-xs text-gray-300 -mt-1">CORPORATION</p>
          </div>
          {/* Eslogan */}
          <p className="text-xs italic text-gray-400">
            Our Business is Life Itself.
          </p>
        </div>

        <div className="flex items-center justify-between mt-1 space-x-2 px-3">
          {/* Datos personales */}
          <div className="text-left text-sm  mt-2 space-y-1 w-1/2">
            <p className="flex justify-between">
              NAME:
              <span className="text-primary"> Ian</span>
            </p>
            <p className="flex justify-between">
              D.O.B:
              <span className="text-primary"> 05/06/2000</span>
            </p>
            <p className="flex justify-between">
              P.O.B:
              <span className="text-primary"> Argentina 🇦🇷</span>
            </p>
            <p className="flex justify-between">
              GENDER:
              <span className="text-primary"> Male</span>
            </p>
            <p className="flex justify-between">
              BLOOD TYPE:
              <span className="text-primary">O+ </span>
            </p>
            <p className="flex justify-between">
              DEPARTMENT:
              <span className="text-primary"> Dev Team</span>
            </p>
          </div>

          {/* Foto / Avatar */}
          <div className=" top-16 right-3 w-24 h-28 bg-gray-800 border border-gray-600 flex items-center justify-center text-gray-400 text-xs">
            FOTO
          </div>
        </div>

        {/* Barcode */}
        <div className="flex flex-col justify-between px-3 mt-2 items-center">
          <p>
            Security Clearance Level: <span className="text-primary">S+</span>
          </p>
          <img src="barcode.jpg" alt="" srcset="" />
          {/* Código empleado */}
          <div className=" text-xs text-gray-400">
           | Status: <span className="text-primary">Not infected yet</span>  |
          </div>
        </div>
      </section>
    </div>
  );
};

export default UmbrellaIDCard;
