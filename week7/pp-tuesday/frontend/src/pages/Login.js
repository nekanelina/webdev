import { set } from "mongoose";
import useField from "../hooks/useField";
import useLogin from "../hooks/useLogin";
import { useState,useEffect} from "react";
import ClipLoader from "react-spinners/ClipLoader";
const Login = ({setIsAuthenticated}) => {
  const email = useField("email");
  const password = useField("password");
  const [popupOpen,setPopup]= useState(false);
  const {login,isLoading, error} = useLogin("/api/users/login");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    login({ email: email.value, password: password.value });
    setPopup(true);
  };
  useEffect(() => {
    if(!isLoading&&!error&&popupOpen){
      setPopup(false);
      setIsAuthenticated(true);
    }
  }, [isLoading]);  

  return (
    <>
    <form className="login" onSubmit={handleFormSubmit}>
      <h3>Log In</h3>
      <label>Email address:</label>
      <input {...email} />
      <label>Password:</label>
      <input {...password}/>
      <button>Log in</button>
    </form>
    {popupOpen&&<><div className="overlay"></div>
    <div className="popup">
      <button className={"back-btn"} onClick={()=>{setPopup(!popupOpen)}}>
      <i className="fa-solid fa-arrow-left"></i> Back
          </button>
        <ClipLoader
          color={"#36d7b7"}
          loading={isLoading}
          size={70}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
          {!isLoading&&error&&<><h2>Something went wrong!</h2>
          <p>{error}</p></>}
      </div></>}
      </>
  );
};

export default Login;
