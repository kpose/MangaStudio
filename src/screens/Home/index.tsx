import React, {useContext} from 'react';
import {SafeAreaView, Button, Text} from 'react-native';
import styles from './styles';
import {AuthContext} from '../../Navigation/AuthProvider';
import {Props} from '../../Navigation/types';

import {HomeHeader} from '../../components';

const Home = ({route, navigation}: Props) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      {/* destructure props and pass image from user to header */}
      <HomeHeader />
      <Text>Welcome user {user.uid}</Text>
      <Button title="Logout" onPress={() => logout()} />
    </SafeAreaView>
  );
};

export default Home;
