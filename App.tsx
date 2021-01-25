import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Authstack} from './src/Navigation';
import {Home} from './src/screens';

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState(null);
  return (
    <>
      <StatusBar barStyle="dark-content" />
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
