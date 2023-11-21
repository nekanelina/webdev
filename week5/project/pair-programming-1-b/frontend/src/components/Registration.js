import React from "react";
import { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a POST request to the server
      const response = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful
      if (response.ok) {
        // Registration successful, do something
      } else {
        // Registration failed, do something
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <article className="section">
      <form className="registration" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </article>
  );
};

export default Registration;
