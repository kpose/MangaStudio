import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Signup, Signin, Welcome} from '../screens';
import {StatusBar} from 'react-native';

import {AuthStackParamList} from './types';
import BottomTab from './BottomTab';

const Stack = createStackNavigator<AuthStackParamList>();

const Authstack = () => {
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={BottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Authstack;
