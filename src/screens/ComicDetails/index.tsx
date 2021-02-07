import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {HomeStackProps} from '../../Navigation/types';

const ComicDetails = ({route, navigation}: HomeStackProps) => {
  const data = route.params;
  console.log(data);
  return (
    <View style={styles.container}>
      <Text>comic details</Text>
    </View>
  );
};

export default ComicDetails;
