/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

interface TableProps {
  data: Array<{ [key: string]: any }>;
}

export default function Table({ data = [] }: TableProps) {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [allSelected, setAllSelected] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const headers = Object.keys(data[0] || {});
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((_, index) => index));
    }
    setAllSelected(!allSelected);
  };

  const toggleRowSelection = (index: number) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const handleEdit = (index: number) => {
    console.log(`Edit row ${index}`);
  };

  const handleDelete = (index: number) => {
    console.log(`Delete row ${index}`);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(Number(event.target.value));
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  if (paginatedData.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-base font-bold uppercase tracking-wider">
              <input
                type="checkbox"
                checked={allSelected}
                onChange={toggleSelectAll}
              />
            </th>
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="px-6 py-3 text-left text-base font-bold uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
            <th className="px-6 py-3 text-left text-base font-bold uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="px-6 py-3 whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(startIndex + rowIndex)}
                  onChange={() => toggleRowSelection(startIndex + rowIndex)}
                />
              </td>
              {headers.map((header) => (
                <td key={header} className="px-6 py-3 whitespace-nowrap">
                  {row[header]}
                </td>
              ))}
              <td className="px-6 py-3 whitespace-nowrap">
                <button
                  onClick={() => handleEdit(startIndex + rowIndex)}
                  className="px-4 py-3 bg-blue rounded-md hover:bg-sky-400 mr-2"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 9.49992V11.9999H2.5L9.87333 4.62659L7.37333 2.12659L0 9.49992ZM11.8067 2.69325C11.8685 2.63158 11.9175 2.55832 11.951 2.47767C11.9844 2.39702 12.0016 2.31057 12.0016 2.22325C12.0016 2.13594 11.9844 2.04949 11.951 1.96884C11.9175 1.88819 11.8685 1.81493 11.8067 1.75325L10.2467 0.193254C10.185 0.131451 10.1117 0.0824196 10.0311 0.0489653C9.95043 0.015511 9.86398 -0.00170898 9.77667 -0.00170898C9.68935 -0.00170898 9.6029 0.015511 9.52225 0.0489653C9.4416 0.0824196 9.36834 0.131451 9.30667 0.193254L8.08667 1.41325L10.5867 3.91325L11.8067 2.69325Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => handleDelete(startIndex + rowIndex)}
                  className="px-4 py-3 bg-red rounded-md hover:bg-rose-400"
                >
                  <svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.999919 10.6667C0.999919 11.4 1.59992 12 2.33325 12H7.66659C8.39992 12 8.99992 11.4 8.99992 10.6667V2.66667H0.999919V10.6667ZM9.66659 0.666667H7.33325L6.66659 0H3.33325L2.66659 0.666667H0.333252V2H9.66659V0.666667Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <div>
          <span>Filas por pagina:</span>
          <select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="mx-2 px-2 py-1 border border-white"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className="flex items-center">
          <span>Pagina:</span>
          <div className="flex items-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="mx-2 px-2 py-1 border border-white"
            >
              {"<"}
            </button>
            <span>{currentPage}</span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="mx-2 px-2 py-1 border border-white"
            >
              {">"}
            </button>
          </div>
          <span>de {totalPages}</span>
        </div>
      </div>
    </div>
  );
}
