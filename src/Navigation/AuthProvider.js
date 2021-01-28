import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

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
            await auth().signInWithEmailAndPassword(email, password);
          } catch (error) {
            setLoading(false);
            console.log(error);
            setError('login error');
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
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
