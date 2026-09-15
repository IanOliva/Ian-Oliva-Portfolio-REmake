import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { initGA } from './utils/Analitics';
import { usePageTracking } from './hooks/usePageTracking';

// Aislado en su propio chunk: RoomPreview carga three.js + @react-three/fiber
// + @react-three/drei + los modelos 3D. Nada de esto debe descargarse para
// nadie que visite el sitio real en "/".
const RoomPreview = lazy(() => import("./pages/RoomPreview"));

// Componente interno que usa el hook
function AppRoutes() {
  usePageTracking(); // Ahora SÍ tiene acceso al router

  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route
        path="/room-preview"
        element={
          <Suspense fallback={null}>
            <RoomPreview />
          </Suspense>
        }
      />
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