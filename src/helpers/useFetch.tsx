import {useState, useEffect} from 'react';

export default function useFetch(url: string) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  return data;
}
