import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Index from "./layout/Index";
import Info from "./layout/Info";
import Ganado from "./pages/Ganado";
import Movimiento from "./pages/Movimiento";
import Usuario from "./pages/Usuario";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Index />}>
          <Route element={<Info />}>
            <Route path="/home" element={<Home />} />
            <Route path="/ganado" element={<Ganado />} />
            <Route path="/movimiento" element={<Movimiento />} />
            <Route path="/usuario" element={<Usuario />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
