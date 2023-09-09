import { useEffect, useState } from "react";

import axios from "axios";

export const useData = (url: string) => {
  const [data, setData] = useState([]);

  const fetchData = async (url: string) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      // In a production environment you'd typically want to
      // raise this error in some JS monitoring application such
      // as Sentry or Rollbar.  For the purposes of this project,
      // we will just console.error the error object.
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    const getData = async () => {
      setData(await fetchData(url));
    };

    getData();
  }, []);

  return data;
};
