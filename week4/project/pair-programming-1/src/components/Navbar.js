import Header from "./Header";
// import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
// import { Link } from "react-router-dom";
import Layout from "./Layout";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <Header />
          {/* <PageLinks parentClass="nav-link" /> */}
          <Layout />
          <SocialLinks />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
