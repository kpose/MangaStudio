import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import {firebase} from '../../firebase/config';
import {Props} from '../../Navigation/types';

const Comics = ({navigation, route}: Props) => {
  const handleSignout = () => {
    firebase.auth().signOut();
    navigation.navigate('Signin');
  };
  //console.log(route.params);

  return (
    <View style={styles.container}>
      <Text> Comics Screen</Text>
      <Button title="Logout" onPress={() => handleSignout()} />
    </View>
  );
};

export default Comics;
