import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./routes/Root";
import Artistas from "./routes/Artistas";
import ErrorPage from "./routes/ErrorPage";
import Contacto from "./routes/Contacto";
import Nosotros from "./routes/Nosotros";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="Artistas" element={<Artistas />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="Contacto" element={<Contacto />} />
        <Route path="Nosotros" element={<Nosotros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
