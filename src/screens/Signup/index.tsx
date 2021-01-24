import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {COLORS} from '../../utils';
import {LargeButton, Input} from '../../components';
import {Props} from '../../Navigation/types';

const Welcome = ({navigation}: Props) => {
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <>
      <View style={styles.container}>
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          locations={[0, 0.4]}
          colors={['#004e92', '#000428']}
          style={styles.gradient}>
          <View style={{marginLeft: 30}}>
            <Text style={styles.heading}>Create Account,</Text>
            <Text style={styles.heading2}>Sign up to get started!</Text>
          </View>

          <View style={styles.inputStyles}>
            <Input
              placeholder=" Username"
              style={styles.input}
              defaultValue={username}
            />

            <Input
              placeholder=" Email"
              style={styles.input}
              defaultValue={email}
            />
            <Input
              placeholder="Password"
              secureTextEntry={true}
              style={styles.input}
              defaultValue={password}
            />
          </View>

          <View style={styles.button}>
            <LargeButton
              title="SignUp"
              onPress={() => console.warn('started')}
            />
          </View>
          <View style={styles.signup}>
            <Text style={{color: COLORS.WHITE}}> I am already a member, </Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Signin')}>
              <Text style={{color: COLORS.WARNING, fontWeight: 'bold'}}>
                Sign In{' '}
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </LinearGradient>
      </View>
    </>
  );
};

export default Welcome;
