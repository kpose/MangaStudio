import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


export type AuthStackParamList = {
  HomeTabs: {user: {}}
  Signup: undefined;
  Signin: undefined;
  Welcome: undefined
};

type HomeScreenRouteProp = RouteProp<AuthStackParamList, 'HomeTabs'>;

type HomeScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'HomeTabs'
>;

export type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};