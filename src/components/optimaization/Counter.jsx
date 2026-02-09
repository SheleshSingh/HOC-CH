import React, { useEffect, useState } from "react";
import Vijay from "./Vijay";

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Counter Com");
  });
  return (
    <div>
      <h1>Counter Com</h1>
      <h1>Count :- {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Vijay count={0} />
      <Vijay count={6} />
      <Vijay count={true} />
      <Vijay count={false} />
      <Vijay count={""} />
      <Vijay count={null} />
      <Vijay count={undefined} />
      <Vijay count={[]} />
    </div>
  );
};

export default Counter;


// [] x123
// [] x122
// [] x124