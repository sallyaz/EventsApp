import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { logoutUser, setLoading } from '../../services/auth/authSlice';

const LogoutScreen = () => {
const dispatch = useAppDispatch();
  useEffect(() => {
    const logout = async () => {
      try {
        await AsyncStorage.clear();
        dispatch(logoutUser());
      } catch (e) {
        console.warn('Logout failed:', e);
            Alert.alert(
                'Login Failed',
                e ? JSON.stringify(e) : 'Invalid credentials',
              );
      }
    };

    logout();
  }, []);
  return null; // or a spinner/loading screen
};

export default LogoutScreen;
