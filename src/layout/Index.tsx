import { Outlet } from "react-router-dom";
import Verify from "../components/Verify";
import Header from "../components/Header";

export default function Index() {
  return (
    <>
      <Verify />
      <Header />
      Index
      <Outlet />
    </>
  );
}
