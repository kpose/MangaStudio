import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {firebase} from './src/firebase/config';

import {Authstack, BottomTab} from './src/Navigation';
import {Home} from './src/screens';
import {Spinner} from './src/components';

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setLoading(false);
            setUser(userData);
          })
          .catch((error) => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {user ? <BottomTab /> : <Authstack />}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
