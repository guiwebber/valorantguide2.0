import "./App.css";
import Home from "./pages/Home/Home";
import Armas from "./pages/Armas/Armas";
import Agentes from "./pages/Agentes/Agentes";
import Ranks from "./pages/Ranks/Ranks";
import Mapas from "./pages/Mapas/Mapas";
import Sobre from "./pages/Sobre/Sobre";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/agentes" element={<Agentes />} />
          <Route path="/armas" element={<Armas />} />
          <Route path="/ranks" element={<Ranks />} />
          <Route path="/mapas" element={<Mapas />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
