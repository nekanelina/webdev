import { useState,useEffect } from "react";
import useField from "../hooks/useField";
import useSignup from "../hooks/useSignup";
import ClipLoader from "react-spinners/ClipLoader";
import { set } from "mongoose";
import { is } from "date-fns/locale";
const Signup = ({setIsAuthenticated}) => {
  
  const email = useField("email");
  const password = useField("password");
  const name = useField("text");
  const [popupOpen,setPopup]= useState(false);


  const { signup, isLoading, error } = useSignup("/api/users/");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    signup({ email: email.value, password: password.value, name: name.value });
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
    <form className="signup" onSubmit={handleFormSubmit}>
      <h3>Sign Up</h3>
      <label>Name:</label>
      <input {...name} />
      <label>Email address:</label>
      <input {...email} />
      <label>Password:</label>
      <input {...password} />

      <button>Sign up</button>
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

export default Signup;
