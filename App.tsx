import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Welcome, Signin, Signup} from './src/screens';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <StatusBar hidden /> */}
      <View style={styles.container}>
        <Signup />
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
