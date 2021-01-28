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

import {Authstack, BottomTab, Router} from './src/Navigation';
import {Home, Series} from './src/screens';
import {Spinner} from './src/components';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Router />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
