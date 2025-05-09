import React, { useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Navigation
import MainNavigation from './MainNavigator';
import AuthNavigation from './AuthNavigator';

//Screens
import SplashScreen from '../screens/SplashScreen/SplashScreen';

// Redux
import { navigationRef } from '../utils/navigationRef';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

// Redux Thunk
import { checkAuthStatus } from '../services/auth/authThunk';

// Hooks
import { useAppDispatch } from '../hooks/useAppDispatch';


const AppNavigation: React.FC = () => {
  const dispatch = useAppDispatch();

  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);

  useEffect(() => {
      dispatch(checkAuthStatus());
  }, [dispatch]);

  const renderNavigation = () => {
    if (isLoading) return <SplashScreen />;
    return isAuth ? <MainNavigation /> : <AuthNavigation />;
  };

  return (
    <NavigationContainer ref={navigationRef}>
    {renderNavigation()}
    </NavigationContainer>
  );
};

export default AppNavigation;