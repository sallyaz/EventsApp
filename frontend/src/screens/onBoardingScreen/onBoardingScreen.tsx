import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { navigate } from '../../utils/navigationRef';

const OnBoardingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>OnBoardingScreen</Text>
      <Button
        title="Go to Sign In"
        onPress={() => {
          // Navigate to SignInScreen
          console.log("Navigating to SignInScreen");
          navigate('signIn');
          
        }}
      />
    </View>
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({})