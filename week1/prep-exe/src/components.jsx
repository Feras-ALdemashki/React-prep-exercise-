import React, { useState } from "react";

const ActionButton = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

const Count = ({ count }) => {
  return <h1>Count is :{count}</h1>;
};
export const Counter = () => {
  const [count, setCount] = useState(0);
  const feedBack = count > 10 ? "It's higher than 10!" : "Keep counting...";
  return (
    <div className="Counter">
      <Count count={count} />
      <ActionButton onClick={() => setCount(count + 1)} label="Add 1!" />
      <ActionButton onClick={() => setCount(count + 2)} label="Add 2!" />
      <ActionButton
        onClick={() => setCount(Math.max(0, count - 1))}
        label="Subtract 1!"
      />
      <ActionButton
        onClick={() => setCount(Math.max(0, count - 2))}
        label="Subtract 2!"
      />

      <p>{feedBack}</p>
    </div>
  );
};
