/* eslint-disable @typescript-eslint/no-explicit-any */
import Create from "../components/Create";
import { useLocation } from "react-router-dom";

export default function RegistrarLote() {
  const location = useLocation();
  const { data, isEdit } = location.state || {};

  const fields = [{ name: "lotName", label: "Nombre del lote", type: "text" }];

  return (
    <div>
      {
        <Create
          fieldConfigurations={fields}
          endpoint={"/lots/save"}
          update="/lots/patch"
          initialData={data}
          isEdit={isEdit}
        />
      }
    </div>
  );
}
