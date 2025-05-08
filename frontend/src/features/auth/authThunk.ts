// src/features/auth/authThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkAuthStatus = createAsyncThunk('auth/checkAuth', async () => {
  const token = await AsyncStorage.getItem('userToken');
  return !!token;
});

export const loginUser = createAsyncThunk('auth/login', async () => {
  await AsyncStorage.setItem('userToken', 'mock_token');
  return true;
});

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  await AsyncStorage.removeItem('userToken');
  return false;
});
