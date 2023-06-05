import ReactDOM from "react-dom/client";
import "./index.css";
import Footer from "./components/Footer.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import QuienesSomos from "./pages/QuienesSomos.jsx";
import Faq from "./pages/FAQ";
import Servicios from "./pages/Servicios";
import Inicio from "./pages/Inicio";
import NavBarTop from "./components/NavBar/NavBarTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="App">
      <NavBarTop />
      <main className="bg-bg-page mt-[152px] max-[768px]:mt-[79px]">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/QuienesSomos" element={<QuienesSomos />} />
          <Route path="/FAQ" element={<Faq />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Servicios/Personalizada" element={<Servicios section={'custom'}/>}/>
          <Route path="/Servicios/Grabaciones" element={<Servicios section={'grabado'}/>}/>
          <Route path="/Servicios/Limpieza" element={<Servicios section={'clean'}/>}/>
          <Route path="/Servicios/Reparaciones" element={<Servicios section={'repair'}/>}/>
        </Routes>
      </main>
    </div>
    <Footer />
  </BrowserRouter>
);
