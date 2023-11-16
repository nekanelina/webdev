import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <ul className="nav-links" id="nav-links">
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/Services">
          Services
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/Tours">
          Tours
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/Register">
          Registration
        </Link>
      </li>
    </ul>
  );
};

export default Layout;
