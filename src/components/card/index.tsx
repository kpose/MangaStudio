import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';

type CardProps = {
  title: string;
  backgroundImageUri: string;
  onPress(): void;
};

const variant = 'portrait_xlarge';
const extension = 'jpg';

const Card = (props: CardProps) => {
  const url = `${props.backgroundImageUri}/${variant}.${extension}`;

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={props.onPress}>
          <View style={styles.imageContainer}>
            <ImageBackground
              source={{uri: url}}
              style={styles.backgroundImage}></ImageBackground>
          </View>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </View>
    </>
  );
};

export default Card;
