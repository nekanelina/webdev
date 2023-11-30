// SingleCounter.js

import React from "react";
import { useCounter } from "./useCounter"; // Update the import path as needed
import "./SingleCounter.css"; // Import your CSS file for styling

const SingleCounter = () => {
  const { counter, increment, decrement, reset } = useCounter(0);

  return (
    <div className="single-counter">
      <h2>Counter:</h2>
      <div className="counter-value">{counter}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default SingleCounter;
