import React, { memo, useEffect } from "react";

const Vijay = () => {
  useEffect(() => {
    console.log("hello Vijay");
  });
  return <h1 style={{ margin: "50px" }}>Vijay </h1>;
};

const VijayMemo = memo(Vijay);

export default VijayMemo;
