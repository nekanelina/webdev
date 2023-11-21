import React, { useState } from "react";
import "./ContactUs.css"; // Import the CSS file

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isStrongPassword, setIsStrongPassword] = useState(false);
  const [nationality, setNationality] = useState("en");

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    setIsStrongPassword(validatePassword(inputPassword));
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const validateEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password strength criteria
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const getGreeting = () => {
    switch (nationality) {
      case "en":
        return "Hello";
      case "de":
        return "Hallo";
      case "fr":
        return "Bonjour";
      default:
        return "";
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Clear the inputs
    setEmail("");
    setPassword("");
    setNationality("en");
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className={isValidEmail ? "valid-input" : "invalid-input"}
          />

          <label htmlFor="password" className="label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className={isStrongPassword ? "valid-input" : "invalid-input"}
          />

          <label htmlFor="nationality" className="label">
            Nationality:
          </label>
          <select
            id="nationality"
            value={nationality}
            onChange={handleNationalityChange}
            className="select-input"
          >
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>

          <p>{getGreeting()}</p>

          <p>Your email is {email}</p>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
