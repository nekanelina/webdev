import PageLinks from "./PageLinks";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SocialLinks from "./SocialLinks";

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <Header />
          <PageLinks parentClass="nav-link" />
          <SocialLinks />
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
