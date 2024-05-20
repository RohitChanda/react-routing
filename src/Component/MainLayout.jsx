import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default MainLayout;
