import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Index from "./layout/Index";
import Ganado from "./pages/Ganado";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Index />}>
          <Route path="/home" element={<Home />} />
          <Route path="/ganado" element={<Ganado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
