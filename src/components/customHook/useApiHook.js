import { useState } from "react";

export const useAPiHook = () => {
    const [apiData, setApiData] = useState([]);
    
  const fetchDataApi = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setApiData(data);
  };

  return {
    apiData,
    fetchDataApi,
  };
};
