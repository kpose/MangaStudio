import React, {useState} from 'react';
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
import {firebase} from '../../firebase/config';

const Welcome = ({navigation}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const onRegisterPress = async () => {
    setLoading(true);
    if (password !== confirmPassword) {
      Alert.alert("Passwords don't match.");
      setLoading(false);
      return;
    }
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response: any) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
          username,
          avatarUri:
            'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
        };
        const usersRef = firebase.firestore().collection('users');
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            setLoading(false);
            navigation.navigate('Home', {user: data});
          })
          .catch((error: any) => {
            Alert.alert(error);
          });
      })
      .catch((error: any) => {
        var errorCode = error.code;
        if (errorCode === 'auth/invalid-email') {
          Alert.alert('Invalid Email, Try Again!');
        } else if (errorCode === 'auth/email-already-in-use') {
          Alert.alert('Email already in use by another user!');
        } else if (errorCode === 'auth/weak-password') {
          Alert.alert(
            'Choose a strong password combination of numbers and letters!',
          );
        }
        console.log(errorCode);
        setLoading(false);
      });
  };

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
            </View>

            <View style={styles.button}>
              <LargeButton title="SignUp" onPress={() => onRegisterPress()} />
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
