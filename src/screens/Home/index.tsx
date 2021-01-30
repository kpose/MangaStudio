import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, Button, Text} from 'react-native';
import styles from './styles';
import {AuthContext} from '../../Navigation/AuthProvider';
import {Props} from '../../Navigation/types';
import firestore from '@react-native-firebase/firestore';

import {HomeHeader, Spinner} from '../../components';

const Home = ({navigation}: Props) => {
  const {logout, user} = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const usersRef = firestore().collection('users');
    usersRef
      .doc(user.uid)
      .get()
      .then((firestoreDocument) => {
        if (!firestoreDocument.exists) {
          alert('User does not exist anymore.');
          return;
        }
        const user = firestoreDocument.data();
        setUserDetails(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (userDetails === null) {
    return <Spinner />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader userData={userDetails} />
      <Button title="Logout" onPress={() => logout()} />
    </SafeAreaView>
  );
};

export default Home;
