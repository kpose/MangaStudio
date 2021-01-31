import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {COLORS} from '../../utils';
import {Input} from '../../components';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../Navigation/AuthProvider';

const HomeHeader = (props: any) => {
  const {logout, user} = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState({});

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
    return <ActivityIndicator size="small" color={COLORS.PRIMARY} />;
  }

  return (
    <SafeAreaView
      style={{
        height: 30,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 10,
      }}>
      <TouchableOpacity>
        <Image
          source={{uri: userDetails.avatarUri}}
          resizeMode="contain"
          style={{
            //flex: 1,
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: 'center',
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeHeader;
