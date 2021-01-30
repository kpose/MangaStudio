import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import {firebase} from '../../firebase/config';
import {Props} from '../../Navigation/types';
import {AuthContext} from '../../Navigation/AuthProvider';

const Home = ({navigation}: Props) => {
  const {user, logout, userdata} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text> Seris Screen</Text>
      <Button title="Logout" onPress={() => logout()} />
    </View>
  );
};

export default Home;
