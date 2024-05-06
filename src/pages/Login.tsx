import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const fakeResponse = { token: "fakeToken" };
    localStorage.setItem("token", fakeResponse.token);

    if (fakeResponse.token) {
      navigate("/home");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center p-8 bg-white rounded-md gap-2">
        <img className="w-32" src="/logo.jpeg" alt="logo sisgan" />
        <h2 className="font-bold text-3xl">Bienvenido a SISGAN</h2>
        <p className="text-sm">
          ¿No tienes una cuenta?{" "}
          <NavLink to={"/"} className="text-primary-100">
            Registrate aqui
          </NavLink>
        </p>
        <form
          className="flex flex-col items-center w-full mt-4 gap-4"
          onSubmit={handleLogin}
        >
          <div className="w-full">
            <input
              className="w-full py-2 px-6 rounded-md bg-secondary-100"
              type="text"
              value={username}
              placeholder="Cedula de ciudadania"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="w-full">
            <input
              className="w-full py-2 px-6 rounded-md bg-secondary-100"
              type="password"
              value={password}
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-primary-100 text-white rounded-md p-2"
            type="submit"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
