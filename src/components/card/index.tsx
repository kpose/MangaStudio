import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';

type CardProps = {
  title: string;
  backgroundImageUri: string;
};

const Card = (props: CardProps) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={{uri: props.backgroundImageUri}}
            style={styles.backgroundImage}></ImageBackground>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </View>
    </>
  );
};

export default Card;
