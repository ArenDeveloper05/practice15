import { useLocation } from "react-router-dom";
import "./App.css";
import AppRoutes from "./router/AppRoutes";
import { useEffect, useState } from "react";
import PageLoading from "./components/page-loading/PageLoading";

function App() {
  const location = useLocation();
  let [locationChanged, setLocationChanged] = useState(false);

  useEffect(() => {
    console.log(`Route changed to ${location.pathname}`);
    setLocationChanged(true);

    const id = setTimeout(() => {
      setLocationChanged(false);
    }, 3500);

    return () => {
      clearTimeout(id);
    }
  }, [location]);

  return (
    <div className="App">
      <AppRoutes />
      {locationChanged && <PageLoading />}
    </div>
  );
}

export default App;