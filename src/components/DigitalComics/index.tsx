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
  const [digitalComics, setDigitalComics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await fetch(
        `https://gateway.marvel.com:443/v1/public/comics?ts=1&format=comic&formatType=comic&apikey=${KEYS.PUBLICKEY}&hash=${KEYS.MD5KEY}`,
      )
        .then((response) => response.json())
        .then((data) => setDigitalComics(data))
        .catch((error) => console.log(error));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Digital Comics</Text>
      <View style={styles.cardContainer}>
        {digitalComics && (
          <FlatList
            data={digitalComics.data.results}
            horizontal={true}
            renderItem={({item}) => (
              <Card
                title={item.title}
                backgroundImageUri={item.thumbnail.path}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default DigitalComics;
