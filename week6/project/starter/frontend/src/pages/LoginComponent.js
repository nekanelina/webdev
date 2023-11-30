import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useField from "../hooks/useField";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User logged in successfully!");
        navigate("/");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
  };
};

const LoginComponent = ({ setIsAuthenticated }) => {
  const { email, setEmail, password, setPassword, handleLogin } = useLogin();

  const emailInput = useField("text");
  const passwordInput = useField("password");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    setIsAuthenticated(true);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input {...emailInput} />
        </label>
        <br />
        <label>
          Password:
          <input {...passwordInput} />
        </label>
        <br />
        <button type="submit">Log In</button>
      </form>
      <div>
        {emailInput.value} {passwordInput.value}
      </div>
    </div>
  );
};

export default LoginComponent;
