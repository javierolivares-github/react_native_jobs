import { useState, useEffect } from 'react';
import axios from 'axios';


const useFetch = ( endpoint, query ) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': 'f88909b636msh54c626c26fd3cfcp121d74jsnb8c7b0624556',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch {
      setError(error);
      alert('There is an error');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return { data, isLoading, error, reFetch };
}

export default useFetch;