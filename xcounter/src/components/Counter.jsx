import { useState } from "react";

export default function Counter() {
  //   const [increment, setIncrement] = useState(0);
  //   const [decrement, setDecrement] = useState(0);
  const [count, setCount] = useState(0);

  const Incre = () => {
    setCount((prevCnt) => prevCnt + 1);
  };

  const Decre = () => {
    setCount((prevCnt) => prevCnt - 1);
  };
  return (
    <>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={Incre}>Increment</button>
      <button onClick={Decre}>Decrement</button>
    </>
  );
}