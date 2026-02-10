import React, { memo } from "react";

const CallBack = () => {
  console.log("hello CallBack Child");
  return (
    <div>
      <h1>CallBack</h1>
    </div>
  );
};

const CallBackMemo = memo(CallBack);
export default CallBackMemo;
