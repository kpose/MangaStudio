import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import {firebase} from '../../firebase/config';
import {Props} from '../../Navigation/types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({navigation}: Props) => {
  /* const handleSignout = () => {
    firebase.auth().signOut();
    navigation.navigate('Signin');
  }; */

  return (
    <View style={styles.container}>
      <Text> hOMe Screen</Text>
      <MaterialCommunityIcons
        name="home"
        //color={focused ? 'red' : 'blue'}
        color={'#000'}
        size={24}
      />
      {/* <Button title="Logout" onPress={() => handleSignout()} /> */}
    </View>
  );
};

export default Home;
