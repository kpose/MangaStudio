import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, Button, Text} from 'react-native';
import styles from './styles';
import {AuthContext} from '../../Navigation/AuthProvider';
import {Props} from '../../Navigation/types';
import useFetch from '../../helpers/useFetch';
import {KEYS} from '../../utils';

import {HomeHeader, Spinner} from '../../components';

const Home = ({navigation}: Props) => {
  const {logout, user} = useContext(AuthContext);
  const [comics, setComics] = useState({});

  const data = useFetch(
    `https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=${KEYS.PUBLICKEY}&hash=${KEYS.MD5KEY}`,
  );
  //setComics(data);
  //console.log(comics);

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <Button title="Logout" onPress={() => logout()} />
    </SafeAreaView>
  );
};

export default Home;
