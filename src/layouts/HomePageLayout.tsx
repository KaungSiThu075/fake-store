import { Outlet } from "react-router-dom";
import { Footer, Nav } from "../components";

const HomePageLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomePageLayout;
