import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, ComicDetails} from '../screens';
import {HomeStackParamList} from './types';

const Stack = createStackNavigator<HomeStackParamList>();

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
          initialParams={{data: {}}}
        />
      </Stack.Navigator>
    </>
  );
};

export default HomeStack;
