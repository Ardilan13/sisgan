import { useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

interface IData {
  id: number;
  name: string;
  age: number;
  email: string;
}

export default function Ganado() {
  const [selectedRows, setSelectedRows] = useState<IData[]>([]);

  const handleRowSelected = (state: { selectedRows: IData[] }) => {
    setSelectedRows(state.selectedRows);
  };

  const handleDeleteSelectedRows = () => {
    console.log("Rows to delete:", selectedRows);
    // Implementa la lógica para eliminar las filas seleccionadas
  };

  const columns: TableColumn<IData>[] = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age.toString(), // Asegúrate de convertir el número a string si es necesario
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
  ];

  const data: IData[] = [
    { id: 1, name: "John Doe", age: 30, email: "john@example.com" },
    { id: 2, name: "Jane Smith", age: 25, email: "jane@example.com" },
    // Añade más datos según sea necesario
  ];

  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        selectableRows
        onSelectedRowsChange={handleRowSelected}
        selectableRowsHighlight
        selectableRowSelected={(row) =>
          selectedRows.some((r) => r.id === row.id)
        }
        contextActions={
          <button onClick={handleDeleteSelectedRows}>
            Eliminar seleccionados
          </button>
        }
      />
    </div>
  );
}
