import LoadingLayout from "./LoadingLayout";
import LoadingBar from "./LoadingBar";

// Se muestra mientras baja el código de la habitación, antes de que exista
// la pantalla de carga de los modelos 3D.
const RouteLoading = () => (
  <LoadingLayout>
    <LoadingBar />
  </LoadingLayout>
);

export default RouteLoading;