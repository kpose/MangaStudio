import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

type LargButtonProps = {
  title: String;
  onPress: () => void;
};
const LargeButton = (props: LargButtonProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.title}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LargeButton;
