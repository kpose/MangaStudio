import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'

 export type HomeStackParamList = {
  Comics: undefined;
  ComicDetails: { data: {} };
};

export type AuthStackParamList = {
  Welcome: undefined;
  Signin: undefined;
  Signup: undefined;
};

export type HomeBottomTabParamList = {
  Series: undefined;
  Characters: undefined;
  Comics: undefined;
  Home: undefined;
};

type ComicDetailsNavigationProp = StackNavigationProp<
 HomeStackParamList,
  'ComicDetails'
>;

type ComicDetailsRouteProp = RouteProp<HomeStackParamList, 'ComicDetails'>;

export type HomeStackProps = {
  navigation: ComicDetailsNavigationProp;
  route: ComicDetailsRouteProp;
};