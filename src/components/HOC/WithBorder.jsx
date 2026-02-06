import React from "react";

const WithBorder = (Component) => {
  return () => {
    return (
      <div style={{ border: "5px solid red" }}>
        <Component />
      </div>
    );
  };
};

export default WithBorder;
