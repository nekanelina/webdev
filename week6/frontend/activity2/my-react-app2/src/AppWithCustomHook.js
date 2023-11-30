// AppWithCustomHook.js
import React from "react";
import useField from "./useField"; // Assuming you've created the useField custom hook
import "./App.css"; // Import your CSS file for styling

const App = () => {
  const nameInput = useField("text");
  const bornInput = useField("date");
  const heightInput = useField("number");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (if needed)
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input {...nameInput} />
        </div>
        <div className="form-group">
          <label>Birthdate:</label>
          <input {...bornInput} />
        </div>
        <div className="form-group">
          <label>Height:</label>
          <input {...heightInput} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {nameInput.value} {bornInput.value} {heightInput.value}
      </div>
    </div>
  );
};

export default App;
