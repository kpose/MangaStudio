import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'

 export type HomeTabsParamList = {
  Home: undefined;
  Series: undefined;
  Comics: undefined;
  Characters: undefined;
};

type HomeTabNavigationProp = BottomTabNavigationProp<
  HomeTabsParamList,
  'Home'
>;

export type HomeTabProps = {
  navigation: HomeTabNavigationProp;
};