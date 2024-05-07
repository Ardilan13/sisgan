import { useEffect, useState } from "react";

export default function Sidebar() {
  const [sidebarHeight, setSidebarHeight] = useState("auto");

  useEffect(() => {
    const calculateSidebarHeight = () => {
      const headerHeight = document.getElementById("header")?.clientHeight || 0;
      const windowHeight = window.innerHeight;
      const remainingHeight = windowHeight - headerHeight;
      setSidebarHeight(`${remainingHeight}px`);
    };

    calculateSidebarHeight();
    window.addEventListener("resize", calculateSidebarHeight);
    return () => {
      window.removeEventListener("resize", calculateSidebarHeight);
    };
  }, []);

  return (
    <div
      className="h-full px-8 py-2 bg-white w-64 flex flex-col"
      style={{ height: sidebarHeight }}
    >
      <div className="flex items-center gap-x-2">
        <img src="/logo.jpeg" className="w-12" alt="logo sisgan" />
        <h1 className="font-bold text-3xl">SISGAN</h1>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul>
          <li className="p-4">Opción 1</li>
          <li className="p-4">Opción 2</li>
          <li className="p-4">Opción 3</li>
        </ul>
      </div>
      <div className="p-4">Pie de página de la barra lateral</div>
    </div>
  );
}
