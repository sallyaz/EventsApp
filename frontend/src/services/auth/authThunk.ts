import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppDispatch} from '../../app/store';
import {setAuthenticated, setLoading} from './authSlice';

export const checkAuthStatus = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const token = await AsyncStorage.getItem('userName');
    await new Promise(resolve => setTimeout(resolve, 3000));
    dispatch(setAuthenticated(!!token));
  } catch (e) {
    console.error('Error checking auth status:', e);
    dispatch(setAuthenticated(false));
  } finally {
    dispatch(setLoading(false));
  }
}
