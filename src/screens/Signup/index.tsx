import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {COLORS} from '../../utils';
import {LargeButton, Input, Spinner} from '../../components';
import {Props} from '../../Navigation/types';

import {AuthContext} from '../../Navigation/AuthProvider';

const Welcome = ({navigation}: Props) => {
  const {register, loading, error} = useContext(AuthContext);

  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

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
              <Text style={styles.heading}>Create Account,</Text>
              <Text style={styles.heading2}>Sign up to get started!</Text>
            </View>

            <View style={styles.inputStyles}>
              <Input
                placeholder=" Username"
                style={styles.input}
                value={username}
                onChangeText={(text) => setUsername(text)}
              />

              <Input
                placeholder=" Email"
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />

              <Input
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />

              <Input
                placeholder="Confirm Password"
                secureTextEntry={true}
                style={styles.input}
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
              />
              <Text style={styles.warning}>{error}</Text>
            </View>

            <View style={styles.button}>
              <LargeButton
                title="SignUp"
                onPress={() => register(email, password)}
              />
            </View>
          </KeyboardAvoidingView>
          <View style={styles.signup}>
            <Text style={{color: COLORS.WHITE}}> I am already a member, </Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Signin')}>
              <Text style={{color: COLORS.WARNING, fontWeight: 'bold'}}>
                Sign In{' '}
              </Text>
            </TouchableWithoutFeedback>
          </View>
          {loading && <Spinner />}
        </LinearGradient>
      </View>
    </>
  );
};

export default Welcome;
