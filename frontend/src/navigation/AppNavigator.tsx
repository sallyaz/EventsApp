import React, {use, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Navigation
import MainNavigation from './MainNavigator';
import AuthNavigation from './AuthNavigator';

//Screens
import SplashScreen from '../screens/SplashScreen/SplashScreen';

// Redux
import { navigationRef } from '../utils/navigationRef';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { checkAuthStatus } from '../services/auth/authThunk';


const AppNavigation: React.FC = () => {
  const dispatch = useDispatch();

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