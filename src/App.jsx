import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { initGA } from './utils/Analitics';
import { usePageTracking } from './hooks/usePageTracking';

// Ruta de prueba aislada (no linkeada desde la navegación real) para
// validar el pasillo 3D scroll-driven — ver src/pages/CorridorPreview.jsx
const CorridorPreview = lazy(() => import('./pages/CorridorPreview'));

// Componente interno que usa el hook
function AppRoutes() {
  usePageTracking(); // Ahora SÍ tiene acceso al router

  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route
        path="/corridor-preview"
        element={
          <Suspense fallback={null}>
            <CorridorPreview />
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