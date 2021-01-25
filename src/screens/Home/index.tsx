import React from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './styles';
import {firebase} from '../../firebase/config';
import {COLORS} from '../../utils';
import {Props} from '../../Navigation/types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const nearby = require('../../assets/1.jpg');
const basket = require('../../assets/2.jpg');
const Home = ({navigation}: Props) => {
  /* const handleSignout = () => {
    firebase.auth().signOut();
    navigation.navigate('Signin');
  }; */

  function renderHeader() {
    return (
      <View style={{flexDirection: 'row', height: 50}}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: 20,
            justifyContent: 'center',
          }}>
          <Image
            source={nearby}
            resizeMode="contain"
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              width: '70%',
              height: '100%',
              backgroundColor: COLORS.DARK_GRAY,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
            }}>
            <Text>search component goes here</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: 20,
            justifyContent: 'center',
          }}>
          <Image
            source={basket}
            resizeMode="contain"
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {/* <Button title="Logout" onPress={() => handleSignout()} /> */}
    </SafeAreaView>
  );
};

export default Home;
