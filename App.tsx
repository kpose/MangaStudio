import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Authstack} from './src/Navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <StatusBar hidden /> */}
      <View style={styles.container}>
        <Authstack />
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
