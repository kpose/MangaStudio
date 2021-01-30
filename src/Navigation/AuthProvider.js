import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        error,
        login: async (email, password) => {
          try {
            setLoading(true);
            await auth()
              .signInWithEmailAndPassword(email, password)
              .then((response) => {
                const uid = response.user.uid;
                const usersRef = firestore().collection('users');
                usersRef
                  .doc(uid)
                  .get()
                  .then((firestoreDocument) => {
                    if (!firestoreDocument.exists) {
                      alert('User does not exist anymore.');
                      return;
                    }
                    //const user = firestoreDocument.data();
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              });
          } catch (error) {
            setLoading(false);
            var errorCode = error.code;
            if (errorCode === 'auth/user-not-found') {
              setError('User Not Found!');
            } else if (errorCode === 'auth/wrong-password') {
              setError('Wrong Email/Password Combination');
            } else if (errorCode === 'auth/invalid-email') {
              setError('Invalid Email Address');
            } else if (errorCode === 'auth/invalid-email') {
              setError('Check your internet connection');
            }
            setLoading(false);
          }
        },

        //setError('login error');
        register: async (email, password, username) => {
          try {
            setLoading(true);
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then((response) => {
                const uid = response.user.uid;
                const data = {
                  id: uid,
                  email,
                  username,
                  avatarUri:
                    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
                };

                const usersRef = firestore().collection('users');
                usersRef
                  .doc(uid)
                  .set(data)
                  .then(() => {
                    setLoading(false);
                  })
                  .catch((error) => {
                    alert(error);
                  });
              });
          } catch (error) {
            setLoading(false);
            var errorCode = error.code;
            console.log(errorCode);
            if (errorCode === 'auth/weak-password') {
              setError('Please, select a stronger password');
            } else if (errorCode === 'auth/email-already-in-use') {
              setError('Email already in use');
            } else if (errorCode === 'auth/invalid-email')
              setError('Invalid Email Address');
            setLoading(false);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
