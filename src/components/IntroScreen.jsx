import React from "react";

const IntroScreen = ({ onContinue }) => {
  return (
    <div className="fixed inset-0 z-[999] bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl md:text-8xl font-resident tracking-wide text-center">
        Bienvenido
      </h1>
      <p className="text-m text-zinc-400 text-center max-w-md font-typewriter">
        Una presentación con una estética survival horror.
      </p>
      <button
        onClick={onContinue}
        className="px-6 py-3 mt-6 bg-primary hover:bg-red-800 text-white font-typewriter rounded-md shadow-lg tracking-wider transition-all duration-300 animate-pulse"
      >
        CONTINUAR
      </button>
    </div>
  );
};

export default IntroScreen;
