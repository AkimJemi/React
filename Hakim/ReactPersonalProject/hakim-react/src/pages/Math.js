import React from "react";
import { useState } from "react";

const Math = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Math</h1>
      <button onClick={() => setCount(0)}>init</button>
      <button onClick={() => setCount(count + 1)}>plus</button>
      <button onClick={() => setCount(count - 1)}>minus</button>
      <h2>{count}</h2>
    </div>
  );
};

export default Math;
