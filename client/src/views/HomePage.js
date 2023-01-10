import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";
export default function HomePage() {
  return (
    <>
      <Sidebar />
      <Outlet/>
    </>
  );
}
