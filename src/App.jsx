import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { initGA } from './utils/Analitics';
import { usePageTracking } from './hooks/usePageTracking';

// Componente interno que usa el hook
function AppRoutes() {
  usePageTracking(); // Ahora SÍ tiene acceso al router

  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  useEffect(() => {
    // Inicializar GA cuando la app carga
    initGA();
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;