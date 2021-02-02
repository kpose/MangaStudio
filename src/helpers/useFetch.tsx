import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';

export default function useFetch(url: string) {
  const [data, setData] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //setLoading(true);
    const fetchData = async () => {
      const data = await fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
      //setLoading(false);
    };

    fetchData();
  }, []);
  return data;

  /* if (loading) {
    return <ActivityIndicator size="small" color="#0000ff" />;
  }
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
      setLoading(false);
    };

    fetchData();
  }, []);
  return data; */
}
