import { useEffect, useState } from "react";

import axios from "axios";

export const useData = (url: string) => {
  const [data, setData] = useState([]);

  const fetchData = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  };

  useEffect(() => {
    const getData = async () => {
      setData(await fetchData(url));
    };

    getData();
  }, []);

  return data;
};
