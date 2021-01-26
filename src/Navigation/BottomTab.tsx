import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Image, TouchableOpacity} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Svg, {Path} from 'react-native-svg';
import {isIphoneX} from 'react-native-iphone-x-helper';

import {Home, Series, Characters, Comics} from '../screens';

import {COLORS} from '../utils';

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({accessibilityState, children, onPress}) => {
  var isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{flexDirection: 'row', position: 'absolute', top: 0}}>
          <View style={{flex: 1, backgroundColor: COLORS.WHITE}}></View>
          <Svg width={75} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.WHITE}
            />
          </Svg>
          <View style={{flex: 1, backgroundColor: COLORS.WHITE}}></View>
        </View>

        <TouchableOpacity
          style={{
            top: -22.5,
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.WHITE,
          }}
          onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 60,
          backgroundColor: COLORS.WHITE,
        }}
        activeOpacity={1}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};

const CustomTabBar = (props) => {
  if (isIphoneX()) {
    return (
      <View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 30,
            backgroundColor: COLORS.WHITE,
          }}></View>
        <BottomTabBar {...props.props} />
      </View>
    );
  } else {
    return <BottomTabBar {...props.props} />;
  }
};

const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            elevation: 0,
          },
        }}
        tabBar={(props) => <CustomTabBar props={props} />}>
        <Tab.Screen
          name="Comics"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome5
                name="book-open"
                color={focused ? COLORS.PRIMARY : COLORS.DARK_GRAY}
                size={30}
              />
            ),
            tabBarButton: (props) => <TabBarCustomButton {...props} />,
          }}
        />

        <Tab.Screen
          name="Series"
          component={Series}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="layers"
                color={focused ? COLORS.PRIMARY : COLORS.DARK_GRAY}
                size={30}
              />
            ),
            tabBarButton: (props) => <TabBarCustomButton {...props} />,
          }}
        />

        <Tab.Screen
          name="Characters"
          component={Characters}
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome
                name="smile-o"
                color={focused ? COLORS.PRIMARY : COLORS.DARK_GRAY}
                size={30}
              />
            ),
            tabBarButton: (props) => <TabBarCustomButton {...props} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;
