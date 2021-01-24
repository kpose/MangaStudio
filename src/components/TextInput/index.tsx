import React from 'react';
import {View, Text, TextInput, ViewStyle} from 'react-native';
import styles from './styles';
import {COLORS} from '../../utils';

type InputProps = {
  text?: String;
  onChange?: () => void;
  placeholder: String;
  defaultValue: any;
  style: ViewStyle;
  secureTextEntry?: boolean;
};

const Input = (props: InputProps) => {
  return (
    <View>
      <TextInput
        style={[styles.input, props.style]}
        onChangeText={props.onChange}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        placeholderTextColor={COLORS.SILVER}
        returnKeyType="next"
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

export default Input;
