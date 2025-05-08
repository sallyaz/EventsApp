import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux';

const SignInScreen = () => {
    const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SignInScreen</Text>
      {/* <Button title="Login" onPress={() => dispatch(loginUser())} /> */}
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({})