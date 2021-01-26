import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {COLORS} from '../../utils';
import {Input} from '../../components';

const nearby = require('../../assets/1.jpg');
const basket = require('../../assets/2.jpg');

const HomeHeader = () => {
  return (
    <View style={{flexDirection: 'row', height: 50}}>
      {/*   <TouchableOpacity
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
      </TouchableOpacity> */}

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
        /* add an onpress here to change user image */

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
};

export default HomeHeader;
