import React, { useState } from "react";

export default function Counter() {
  // State to hold the count value
  const [count, setCount] = useState(0);

  // Function to increase the count
  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
}
