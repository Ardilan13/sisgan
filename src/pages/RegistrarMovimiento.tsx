import Create from "../components/Create";

export default function RegistrarMovimiento() {
  const fields = [
    { name: "Origen", type: "text" },
    { name: "Destino", type: "text" },
    { name: "Fecha de aplicación", type: "date" },
    { name: "Fecha de movilización", type: "date" },
    { name: "Placa del vehículo", type: "text" },
    { name: "Identificación del transportador", type: "number" },
    { name: "Firma del solicitante", type: "file" },
    { name: "Firma del funcionario del ICA", type: "file" },
  ];
  return (
    <Create fieldConfigurations={fields} endpoint={"/movimiento/registrar"} />
  );
}
