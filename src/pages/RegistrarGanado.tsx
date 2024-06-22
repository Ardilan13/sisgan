import Create from "../components/Create";
import { useLocation } from "react-router-dom";
import ApiService from "../api/ApiService";
import { useState, useEffect } from "react"; // Import useState and useEffect

export default function RegistrarGanado() {
  const location = useLocation();
  const { data, isEdit } = location.state || {};

  const [lots, setLots] = useState([]); // Initialize state for lots data
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiService.get("/lots");
        setLots(response.data);
      } catch (error) {
        console.error("Error fetching lots data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    console.log("Lots:", lots);
  }, []);

  const fields = [
    { name: "birthDate", label: "Fecha de nacimiento", type: "date" },
    { name: "weight", label: "Peso", type: "number" },
    { name: "height", label: "Altura", type: "number" },
    {
      name: "sex",
      label: "Sexo",
      type: "select",
      options: [
        { label: "Macho", value: "M" },
        { label: "Hembra", value: "H" },
      ],
    },
    { name: "breed", label: "Raza", type: "text" },
    {
      name: "lotId",
      label: "Lote",
      type: "select",
      options: [
        { label: "A", value: "10" },
        { label: "B", value: "11" },
      ],
      // options: isLoading ? [] : lots.map((lot) => lot), // Dynamic options based on lots
    },
  ];

  return (
    <Create
      fieldConfigurations={fields}
      endpoint={"/cattle/save"}
      initialData={data}
      isEdit={isEdit}
    />
  );
}
