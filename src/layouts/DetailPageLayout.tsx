import { Footer, Nav } from "../components";
import { Outlet } from "react-router-dom";

const DetailPageLayout = () => {
  return (
    <div className="flex flex-col justify-between h-lvh">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DetailPageLayout;
