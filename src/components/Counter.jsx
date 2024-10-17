import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const decrementCount = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
    }
  };
  return (
    <div
      style={{
        border: "2px solid yellow",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <h3>Counter: {count} </h3>
      <button onClick={incrementCount}>Add</button>
      <button onClick={decrementCount}>Reduce</button>
    </div>
  );
};

export default Counter;
