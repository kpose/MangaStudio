import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Image, TouchableOpacity} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Home, Series, Characters, Comics} from '../screens';

import {COLORS} from '../utils';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons
                name="home"
                //color={focused ? 'red' : 'blue'}
                color={'#000'}
                size={24}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;
