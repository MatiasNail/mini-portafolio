import { Routes,Route } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Habilidades from "./pages/Habilidades";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="sobre-mi" element={<SobreMi />} />
        <Route path="habilidades" element={<Habilidades />} />
        <Route path="proyectos" element={<Proyectos />} />
        <Route path="contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
}
