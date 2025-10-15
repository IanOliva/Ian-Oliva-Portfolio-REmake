import ReactGA from 'react-ga4';


// Inicializar Google Analytics
export const initGA = () => {
  if (import.meta.env.VITE_GA_MEASUREMENT_ID && import.meta.env.NODE_ENV === 'production') {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID  // Vite
                          
    
    ReactGA.initialize(measurementId);
  }
};

// Trackear pageview
export const logPageView = () => {
  if (import.meta.env.NODE_ENV === 'production') {
    ReactGA.send({ 
      hitType: "pageview", 
      page: window.location.pathname + window.location.search 
    });
  }
};