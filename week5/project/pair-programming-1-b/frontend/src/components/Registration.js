import { useState } from "react";
import { useNavigate } from "react-router-dom";
const apiUrl = "http://localhost:3001/api/tours";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const user = { email, password, name };

    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log("Error");
    }
    if (response.ok) {
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setName("");

      console.log("new user added:", json);
      navigate("/");
    }
  };
  return (
    <div className="login-page">
      <h2>Register</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Username</label>
        <input
          value={name}
          name="name"
          id="name"
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="******"
          id="password"
          name="password"
        />
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="******"
          id="confirmPassword"
          name="confirmPassword"
        />

        <button className="submit-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
