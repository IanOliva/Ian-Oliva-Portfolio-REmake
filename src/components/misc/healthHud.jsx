

export default function Hud({ status = "fine" }) {
  // status puede ser "fine", "caution" o "danger"
  const colorClasses = {
    fine: "text-green-400 drop-shadow-[0_0_6px_rgba(65,255,106,0.5)]",
    caution: "text-yellow-400 drop-shadow-[0_0_6px_rgba(255,210,85,0.55)]",
    danger: "text-red-500 drop-shadow-[0_0_6px_rgba(255,74,74,0.6)]",
  };

  return (
    <div
      className="relative top-20 w-[150px] h-[75px] bg-[#0a0c0d] border-4 border-[#1a1d1f] rounded-md shadow-[0_0_0_2px_#060708_inset,0_0_24px_#000,0_8px_40px_rgba(0,0,0,0.6)] overflow-hidden"
      aria-label={`Estado: ${status}`}
    >
      {/* Bloque lateral izquierdo */}
      <div className="absolute left-0 top-0 bottom-0 w-[22%] bg-gradient-to-b from-[#171628] to-[#2a2840] opacity-90 shadow-[inset_-1px_0_0_rgba(0,0,0,0.65)]">
        <div className="absolute inset-y-2 left-[6px] right-1 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0)_0_7px,rgba(0,0,0,0.55)_7px_8px)] mix-blend-multiply" />
      </div>

      {/* Scanlines */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0_8px,rgba(120,160,160,0.18)_8px_9px)] animate-[scrollLines_3s_linear_infinite] mix-blend-lighten pointer-events-none" />

      {/* CRT Sweep */}
      <div className="absolute -inset-x-[20%] -inset-y-[40%] bg-[radial-gradient(120%_20%_at_50%_-10%,rgba(255,255,255,0.18),rgba(255,255,255,0)_60%)] animate-[sweep_4.8s_linear_infinite] pointer-events-none" />

      {/* Noise */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-soft-light animate-[jitter_260ms_steps(2,end)_infinite]" style={{
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='90' height='90' viewBox='0 0 90 90'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>")`,
      }} />

      {/* Barra de vida */}
      <div className="absolute left-[26%] right-4 bottom-3 h-1 rounded-sm bg-gradient-to-r from-[#1a2] via-[#1f4] to-[#9f6] opacity-25" />

      {/* Texto de estado */}
      <div
        className={`absolute right-4 bottom-4 text-xl font-mono tracking-wider animate-[pulse_1.5s_ease-in-out_infinite, flick_5.5s_steps(1,end)_infinite] ${
          colorClasses[status]
        }`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </div>

      <style jsx>{`
        @keyframes scrollLines {
          to {
            background-position-y: 100%;
          }
        }
        @keyframes sweep {
          to {
            transform: translateY(160%);
          }
        }
        @keyframes pulse {
          0%, 100% {
            text-shadow: 0 0 4px rgba(65, 255, 106, 0.35), 0 0 14px rgba(65, 255, 106, 0.25);
          }
          50% {
            text-shadow: 0 0 10px rgba(65, 255, 106, 0.7), 0 0 26px rgba(65, 255, 106, 0.5);
          }
        }
        @keyframes jitter {
          50% {
            transform: translateY(0.2px);
          }
        }
        @keyframes flick {
          0%, 19.999%, 22%, 62.999%, 64%, 100% {
            opacity: 1;
          }
          20%, 21.999%, 63%, 63.999% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
