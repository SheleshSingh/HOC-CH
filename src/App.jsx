import React from "react";
import WithBorder from "./components/HOC/WithBorder";
import Test from "./components/Test";
import Alpha from "./components/Alpha";
import { useCounter } from "./components/customHook/useCounter";
import Beta from "./components/Beta";

const App = () => {
  // const WithBorderTest = WithBorder(Test);
  // const WithBorderAlpha = WithBorder(Alpha);

  const { count, increment, decrement, reset } = useCounter();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {/* <WithBorderTest />
      <WithBorderAlpha />
      <Alpha /> */}

      <h1>Count :- {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <Test />
      <Beta />
    </div>
  );
};

export default App;
