import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {Card} from '../index';
import useFetch from '../../helpers/useFetch';
import {KEYS} from '../../utils';

const DigitalComics = () => {
  const [digitalComics, setDigitalComics] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await fetch(
        `https://gateway.marvel.com:443/v1/public/comics?format=digital%20comic&apikey=${KEYS.PUBLICKEY}&hash=${KEYS.MD5KEY}`,
      )
        .then((response) => response.json())
        .then((data) => setDigitalComics(data))
        .catch((error) => console.log(error));
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="small" color="#0000ff" />;
  }
  console.log(digitalComics);
  return (
    <View>
      {/* <FlatList
        data={digitalComics.data.results}
        horizontal={true}
        renderItem={({item}) => <Card title={item.title} />}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      /> */}
    </View>
  );
};

export default DigitalComics;
