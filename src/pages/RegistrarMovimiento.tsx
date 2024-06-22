import Create from "../components/Create";
import { useLocation } from "react-router-dom";

export default function RegistrarMovimiento() {
  const location = useLocation();
  const { data, isEdit } = location.state || {};

  const fields = [
    { name: "origin", label: "Origen", type: "text" },
    { name: "destination", label: "Destino", type: "text" },
    { name: "applicationDate", label: "Fecha de aplicación", type: "date" },
    { name: "mobilizationDate", label: "Fecha de movilización", type: "date" },
    { name: "vehiclePlate", label: "Placa del vehículo", type: "text" },
    { name: "transporterID", label: "Identificación del transportador", type: "number" },
    { name: "applicantSignature", label: "Firma del solicitante", type: "file" },
    { name: "ICAofficialSignature", label: "Firma del funcionario del ICA", type: "file" },
  ];
  
  return (
    <Create
      fieldConfigurations={fields}
      endpoint={"/movimiento/registrar"}
      initialData={data}
      isEdit={isEdit}
    />
  );
}
