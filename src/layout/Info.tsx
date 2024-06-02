import { Outlet } from "react-router-dom";

export default function Index() {
  //   const location = useLocation();
  //   const pathnames = location.pathname.split("/").filter((x) => x);

  //   console.log(pathnames);
  return (
    <>
      <div className="flex flex-col gap-y-4 mx-12 my-8">
        <div className=" bg-white px-6 py-3 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold">Dashboard</h2>
        </div>
        <div className=" bg-white px-6 py-3 rounded-lg shadow-sm">
          <Outlet />
        </div>
      </div>
    </>
  );
}
