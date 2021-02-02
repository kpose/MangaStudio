import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, Button, Text, ScrollView, View} from 'react-native';
import styles from './styles';
import {AuthContext} from '../../Navigation/AuthProvider';
import {Props} from '../../Navigation/types';
import useFetch from '../../helpers/useFetch';
import {KEYS} from '../../utils';

import {HomeHeader, Spinner, ForYou, DigitalComics} from '../../components';

const Home = ({navigation}: Props) => {
  const {logout, user} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <HomeHeader />
      <ForYou />
      <DigitalComics />
    </View>
  );
};

export default Home;
