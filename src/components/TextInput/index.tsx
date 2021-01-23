import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import {COLORS} from '../../utils';

type InputProps = {
  text: String;
  onChange: () => void;
  placeholder: String;
  defaultValue: any;
};

const Input = (props: InputProps) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={props.onChange}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        placeholderTextColor={COLORS.BLACK}
        returnKeyType="next"
      />
    </View>
  );
};

export default Input;
