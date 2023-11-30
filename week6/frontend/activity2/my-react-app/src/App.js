// App.js

import React from "react";
import SingleCounter from "./SingleCounter"; // Update the import path as needed
import "./App.css"; // Import your CSS file for styling

const App = () => {
  return (
    <div className="app-container">
      <SingleCounter />
      <SingleCounter />
      <SingleCounter />
    </div>
  );
};

export default App;
