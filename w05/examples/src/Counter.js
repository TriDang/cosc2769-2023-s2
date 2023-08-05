import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
