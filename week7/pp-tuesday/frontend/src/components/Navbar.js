import { Link, useNavigate } from "react-router-dom";
const Navbar = ({isAuthenticated,setIsAuthenticated}) => {
const navigate=useNavigate();
console.log(isAuthenticated);
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Dashboard</h1>
        </Link>
        <nav>
          {isAuthenticated&& (
            <div>
              <span>{JSON.parse(localStorage.getItem("user")).email}</span>
              <Link to="/login"><button onClick={()=>{localStorage.removeItem("user");localStorage.removeItem("token");setIsAuthenticated(false);navigate("/login")}}>Log out</button></Link>
            </div>
          )}
          {!isAuthenticated && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
