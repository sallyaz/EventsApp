import React, { useEffect, useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

//Redux 
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

//Navigation
import MainNavigation from './MainNavigator';
import AuthNavigation from './AuthNavigator';
import { navigationRef } from '../utils/navigationRef';

import SplashScreen from '../screens/SplashScreen/SplashScreen';
import { checkAuthStatus } from '../services/auth/authThunk';
import { useAppDispatch } from '../hooks/useAppDispatch';

import { AppState, AppStateStatus, Linking } from 'react-native';


const linking = {
  prefixes: ['rsvpevents://'],
  config: {
    screens: {
      EventsDetailsScreen: {
        screens: {
          EventsDetailsScreen: 'event/:id',
        },
      },
    },
  },
};

const AppNavigation: React.FC = () => {
  const dispatch = useAppDispatch();

  const appState = useRef(AppState.currentState);

  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);

  useEffect(() => {
    dispatch(checkAuthStatus())
  }, [dispatch]);

  const renderNavigation = () => {
    if (isLoading) return <SplashScreen />;
    return isAuth ? <MainNavigation /> : <AuthNavigation />;
  };
  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
    {renderNavigation()}
    </NavigationContainer>
  );
};

export default AppNavigation;
