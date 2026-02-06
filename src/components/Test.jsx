import React, { useEffect } from "react";
import { useCounter } from "./customHook/useCounter";
import { useAPiHook } from "./customHook/useApiHook";

const Test = () => {
  const { count, increment, decrement, reset } = useCounter();
  const { apiData, fetchDataApi } = useAPiHook();
  console.log(apiData);
  useEffect(() => {
    fetchDataApi("https://69731167b5f46f8b5826076e.mockapi.io/notes");
  }, []);
  return (
    <div>
      <h1>Test</h1>
      <h1>Count :- {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      {apiData.map((item, index) => (
        <p key={index}>{item.color}</p>
      ))}
    </div>
  );
};

export default Test;
