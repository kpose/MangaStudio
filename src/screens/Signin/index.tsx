import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {COLORS} from '../../utils';
import {LargeButton, Input} from '../../components';
import {Props} from '../../Navigation/types';

const Welcome = ({navigation}: Props) => {
  const [email, setEmail] = useState<string>('');
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
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={{marginLeft: 30}}>
              <Text style={styles.heading}>Welcome,</Text>
              <Text style={styles.heading2}>Sign in to continue!</Text>
            </View>

            <View style={styles.inputStyles}>
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
              <TouchableWithoutFeedback onPress={() => console.warn('forgot')}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableWithoutFeedback>
            </View>

            <View style={styles.button}>
              <LargeButton
                title="Login"
                onPress={() => console.warn('started')}
              />
            </View>
          </KeyboardAvoidingView>
          <View style={styles.signup}>
            <Text style={{color: COLORS.WHITE}}> I am a new user, </Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Signup')}>
              <Text style={{color: COLORS.WARNING, fontWeight: 'bold'}}>
                Sign Up{' '}
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </LinearGradient>
      </View>
    </>
  );
};

export default Welcome;
