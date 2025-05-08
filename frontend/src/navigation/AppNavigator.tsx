import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Navigation
import MainNavigation from './MainNavigator';
import AuthNavigation from './AuthNavigator';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import { navigationRef } from '../utils/navigationRef';


const AppNavigation: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false); // Replace with real auth logic

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