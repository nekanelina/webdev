import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSignup = function (setIsAuthenticated) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Added confirmPassword state

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      if (password !== confirmPassword) {
        // Check if passwords match
        console.error("Passwords do not match");
        return;
      }

      const response = await fetch("/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        sessionStorage.setItem("user", JSON.stringify(user));
        console.log("User signed up successfully!");
        setIsAuthenticated(true);
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
    confirmPassword, // Added confirmPassword to the return object
    setConfirmPassword, // Added setConfirmPassword to the return object
    handleSignup,
  };
};

export default useSignup;
