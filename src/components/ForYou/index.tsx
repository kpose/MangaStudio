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
import {KEYS} from '../../utils';
import {useNavigation} from '@react-navigation/native';

const ForYou = () => {
  const [comics, setComics] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await fetch(
        `https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=${KEYS.PUBLICKEY}&hash=${KEYS.MD5KEY}`,
      )
        .then((response) => response.json())
        .then((data) => setComics(data))
        .catch((error) => console.log(error));
      setLoading(false);
    };

    fetchData();
  }, []);

  /*  if (loading) {
    return <ActivityIndicator size="small" color="#0000ff" />;
  } */

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}> For You</Text>
      <View style={styles.cardContainer}>
        {comics && (
          <FlatList
            data={comics.data.results}
            horizontal={true}
            renderItem={({item}) => (
              <Card
                title={item.title}
                backgroundImageUri={item.thumbnail.path}
                onPress={() => navigation.navigate('ComicDetails')}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default ForYou;
