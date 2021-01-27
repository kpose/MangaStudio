import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


export type AuthStackParamList = {
 HomeTabs: {params: {}, screen: string}
  Signup: undefined;
  Signin: undefined;
  Welcome: undefined;
  Home: undefined
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