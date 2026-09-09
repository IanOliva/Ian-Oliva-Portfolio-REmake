import React, { useState } from "react";
import FuzzyText from "../misc/FuzzyText";
import LightRays from "../misc/LightRays";
import RingLoader from "react-spinners/RingLoader";

const IntroScreen = ({ onContinue }) => {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      onContinue();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black text-white flex flex-col items-center justify-center">
      <LightRays
        raysOrigin="left"
        raysColor="#b00020"
        raysSpeed={1.5}
        lightSpread={1}
        fadeDistance={2}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0.05}
        className="custom-rays"
      />
      <div className="absolute z-10 flex flex-col items-center">
        <FuzzyText>BIENVENIDO</FuzzyText>
        <p className="text-m text-zinc-400 text-center max-w-md font-typewriter mt-4">
          Una presentación con una estética survival horror.
        </p>
        <button
          onClick={handleClick}
          disabled={loading}
          className="cursor-target px-6 py-3 mt-6 bg-primary hover:bg-primary/80 text-white font-typewriter rounded-md shadow-lg tracking-wider transition-all duration-300 animate-pulse"
        >
          {loading ? (
            <>
             <p className="flex gap-4 ">CARGANDO <RingLoader size={24} color="#ffffff" /></p> 
            </>
          ) : (
            "CONTINUAR"
          )}
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;
