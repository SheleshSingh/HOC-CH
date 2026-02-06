import React, { useEffect } from "react";
import { useAPiHook } from "./customHook/useApiHook";

const Beta = () => {
  const { apiData, fetchDataApi } = useAPiHook();

  useEffect(() => {
    fetchDataApi("https://jsonplaceholder.typicode.com/users");
  }, []);
  console.log(apiData);
  return (
    <div>
      {apiData.map((item, index) => (
        <p key={index}>{item.username}</p>
      ))}
    </div>
  );
};

export default Beta;
