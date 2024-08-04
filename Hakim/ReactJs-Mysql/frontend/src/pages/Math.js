import React from "react";
import { useState } from "react";
import "./CSS/Math.css";

const Math = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="mathContainer">
      <h1>Math</h1>
      <button onClick={() => setCount(0)}>init</button>
      <button onClick={() => setCount(count + 1)}>plus</button>
      <button onClick={() => setCount(count - 1)}>minus</button>
      <h2>{count}</h2>
    </div>
  );
};

export default Math;
