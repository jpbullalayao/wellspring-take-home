import { useEffect, useState } from "react";

import axios from "axios";

/**
 * A custom hook that is used to GET data from an API endpoint when
 * given a proper URL endpoint.
 *
 * @param {string} url - The endpoint we are fetching data from
 */
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
