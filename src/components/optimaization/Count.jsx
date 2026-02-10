import React, { useCallback, useMemo, useState } from "react";
import CallBack from "./CallBack";

const Count = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(10);

  console.log("Parent..");

  const testing = () => {
    for (let i = 1; i <= 300000000; i++) {}
    return 3;
  };

  //   testing();
  const data = useMemo(() => {
    return testing();
  }, []);

  const handleClick = () => {
    setTotal(total + 10);
  };

  const memoizedData = useCallback(() => {
    handleClick;
  }, [total]);
  return (
    <div>
      <h1>Count</h1>
      <h1> {data}</h1>
      <button style={{ padding: "10px" }} onClick={() => setCount(count + 1)}>
        Increment:-{count}
      </button>
      <CallBack handleClick={memoizedData} total={total} />
    </div>
  );
};

export default Count;
