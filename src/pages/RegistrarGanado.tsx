import Create from "../components/Create";
import { useLocation } from "react-router-dom";

export default function RegistrarGanado() {
  const location = useLocation();
  const { data, isEdit } = location.state || {};

  const fields = [
    { name: "birthDate", label: "Fecha de nacimiento", type: "date" },
    { name: "weight", label: "Peso", type: "number" },
    { name: "height", label: "Altura", type: "number" },
    { name: "sex", label: "Sexo", type: "select", options: ["Macho", "Hembra"] },
    { name: "breed", label: "Raza", type: "text" },
    { name: "lot", label: "Lote", type: "select", options: ["A", "B", "C"] },
  ];
  
  return (
    <Create
      fieldConfigurations={fields}
      endpoint={"/ganado/registrar"}
      initialData={data}
      isEdit={isEdit}
    />
  );
}
