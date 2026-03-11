import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Sub</button>
      <button onClick={() => setCount(0)}>Zero</button>
      <p>Count is: {count}</p>
    </>
  );
}