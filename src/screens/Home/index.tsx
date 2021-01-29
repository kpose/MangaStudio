import React, {useContext} from 'react';
import {SafeAreaView, Button, Text} from 'react-native';
import styles from './styles';
import {AuthContext} from '../../Navigation/AuthProvider';
import {Props} from '../../Navigation/types';

import {HomeHeader, Spinner} from '../../components';

const Home = ({route, navigation}: Props) => {
  const {user, logout, userdata} = useContext(AuthContext);
  /* if (!user || !userdata) {
    return <Spinner />;
  } */
  return (
    <SafeAreaView style={styles.container}>
      {/* destructure props and pass image from user to header */}
      <HomeHeader />
      <Text>Welcome user {user.uid}</Text>
      {/* {console.log(userdata)} */}
      <Button title="Logout" onPress={() => logout()} />
    </SafeAreaView>
  );
};

export default Home;
