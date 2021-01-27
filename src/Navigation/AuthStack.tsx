import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Signup, Signin, Welcome, Comics} from '../screens';
import {StatusBar} from 'react-native';

import {AuthStackParamList} from './types';
import BottomTab from './BottomTab';

const Stack = createStackNavigator<AuthStackParamList>();

const Authstack = () => {
  return (
    <>
      <StatusBar hidden />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="HomeTabs"
          component={BottomTab}
          options={{gestureEnabled: false}}
        />

        {/*  <Stack.Screen
          name="Home"
          component={Home}
          options={{gestureEnabled: false}}
        /> */}
      </Stack.Navigator>
    </>
  );
};

export default Authstack;
