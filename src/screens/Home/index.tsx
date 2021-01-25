import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import {firebase} from '../../firebase/config';
import {Props} from '../../Navigation/types';

const Home = ({navigation}: Props) => {
  /* const handleSignout = () => {
    firebase.auth().signOut();
    navigation.navigate('Signin');
  }; */

  return (
    <View style={styles.container}>
      <Text> hOMe Screen</Text>
      {/* <Button title="Logout" onPress={() => handleSignout()} /> */}
    </View>
  );
};

export default Home;
