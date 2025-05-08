import React from 'react';

// Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingScreen from '../screens/onBoardingScreen/onBoardingScreen';
import SignInScreen from '../screens/SignInScreen/SignInScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{animation: 'slide_from_left', headerShown: false}}>
      <Stack.Screen name={'onBoarding'} component={OnBoardingScreen} />
      <Stack.Screen name={'signIn'} component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;