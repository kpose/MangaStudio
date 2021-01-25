import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


export type AuthStackParamList = {
  Home: {user: {}}
  Signup: undefined;
  Signin: undefined;
  Welcome: undefined
};

//type HomeScreenRouteProp = RouteProp<AuthStackParamList, 'Home'>;

type HomeScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Home'
>;

export type Props = {
  //route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};