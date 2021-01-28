import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import {firebase} from '../../firebase/config';
import {Props} from '../../Navigation/types';

const Home = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text> Seris Screen</Text>
      <Button title="Logout" />
    </View>
  );
};

export default Home;
