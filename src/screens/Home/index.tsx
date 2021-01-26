import React from 'react';
import {SafeAreaView, Button} from 'react-native';
import styles from './styles';
import {firebase} from '../../firebase/config';
import {Props} from '../../Navigation/types';

import {HomeHeader} from '../../components';

const Home = ({route, navigation}: Props) => {
  //console.log(route.params);

  /* const handleSignout = () => {
    firebase.auth().signOut();
    navigation.navigate('Signin');
  }; */
  return (
    <SafeAreaView style={styles.container}>
      {/* destructure props and pass image from user to header */}
      <HomeHeader />
      {/* <Button title="Logout" onPress={() => handleSignout()} /> */}
    </SafeAreaView>
  );
};

export default Home;

/* const handleSignout = () => {
    firebase.auth().signOut();
    navigation.navigate('Signin');
  }; */

{
  /* <Button title="Logout" onPress={() => handleSignout()} /> */
}
