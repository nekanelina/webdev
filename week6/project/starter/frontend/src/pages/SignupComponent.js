import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useField from "../hooks/useField";

const useSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await fetch("/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User signed up successfully!");
        navigate("/");
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSignup,
  };
};

const SignupComponent = ({ setIsAuthenticated }) => {
  const { handleSignup } = useSignup();

  const emailInput = useField("text");
  const passwordInput = useField("password");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup();
    setIsAuthenticated(true);
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input {...emailInput} />
        </label>
        <br />
        <label>
          Password:
          <input {...passwordInput} />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <div>
        {emailInput.value} {passwordInput.value}
      </div>
    </div>
  );
};

export default SignupComponent;
