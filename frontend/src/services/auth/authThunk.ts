// src/features/auth/authActions.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppDispatch} from '../../app/store';
import {setAuthenticated, setLoading} from './authSlice';
import {authApi} from './authApi';

export const checkAuthStatus = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const token = await AsyncStorage.getItem('userInfo');
    await new Promise(resolve => setTimeout(resolve, 3000));
    dispatch(setAuthenticated(!!token));
  } catch (e) {
    console.error('Error checking auth status:', e);
    dispatch(setAuthenticated(false));
  } finally {
    dispatch(setLoading(false));
  }
};
export const loginUser =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
      // Call the RTK Query endpoint using initiate
      const result = await dispatch(
        authApi.endpoints.login.initiate({email, password}),
      );
      if ('data' in result) {
        if (result?.data?.id) {
          await AsyncStorage.setItem('userInfo', result.data.email);
        }
        dispatch(setAuthenticated(true));
      } else {
        dispatch(setAuthenticated(false));
        // Optional: dispatch error state
      }
    } catch (e) {
      console.error('Error during login:', e);
      dispatch(setAuthenticated(false));
    } finally {
      dispatch(setLoading(false));
    }
  };

// export const logoutUser = () => async (dispatch: AppDispatch) => {
//   dispatch(setLoading(true));
//   try {
//     await AsyncStorage.removeItem('userToken');
//     dispatch(setAuthenticated(false));
//   } finally {
//     dispatch(setLoading(false));
//   }
// };
