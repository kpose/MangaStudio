import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, Button, Text, ScrollView, View} from 'react-native';
import styles from './styles';
import {AuthContext} from '../../Navigation/AuthProvider';
import {Props} from '../../Navigation/types';
import useFetch from '../../helpers/useFetch';
import {KEYS} from '../../utils';

import {HomeHeader, Spinner, ForYou} from '../../components';

const Home = ({navigation}: Props) => {
  const {logout, user} = useContext(AuthContext);

  /* const data = useFetch(
    `https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=${KEYS.PUBLICKEY}&hash=${KEYS.MD5KEY}`,
  );

  console.log(data); */

  /* const list = () => {
    return data.data.results.map((comic) => {
      return (
        <Card
          key={comic.key}
          title={comic.title}
          backgroundImageUri="https://i.annihil.us/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg">
          <Text>{comic.title}</Text>
        </Card>
      );
    });
  }; */

  return (
    <View style={styles.container}>
      <HomeHeader />
      <ForYou />
    </View>
  );
};

export default Home;
