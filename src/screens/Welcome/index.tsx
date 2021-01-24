import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import styles from './styles';
import {LargeButton} from '../../components';
import {Props} from '../../Navigation/types';

const Welcome = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 0.4]}
        colors={['#004e92', '#000428']}
        style={styles.gradient}>
        <LottieView
          source={require('../../assets/reading.json')}
          autoPlay
          loop
          style={{height: 400, width: 400}}
        />

        <Text style={styles.heading}>Read more</Text>
        <Text style={styles.heading}>great books</Text>
        <Text style={styles.heading2}>
          Discover many awesome books and expand your knowledge during this
          quarantine.
        </Text>

        <LargeButton
          title="Start Reading"
          onPress={() => navigation.navigate('Signin')}
        />
      </LinearGradient>
    </View>
  );
};

export default Welcome;
