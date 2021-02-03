import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, ComicDetails} from '../screens';
import {StatusBar} from 'react-native';

//import {AuthStackParamList} from './types';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Comics"
          component={Home}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="ComicDetails"
          component={ComicDetails}
          options={{gestureEnabled: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default HomeStack;
