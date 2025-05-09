import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useAppSelector } from '../../hooks/useAppDispatch';
import TextElement from '../../components/reusable/TextElemnt';

const NotificationsScreen = () => {
   const eventsInfo = useAppSelector((state: any) => state.events?.eventsInfo);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    {!eventsInfo ? (
      <View>
        <Image
          source={require('../../../assets/Notifications/notificationIcon.png')}
          style={{width: 80, height: 80, alignSelf: 'center'}}
          resizeMode="contain"
        />
        <TextElement customStyle={{fontSize: 16, fontWeight: '500', marginTop: 10}}>
          There`s No Waiting Notifications. Please Try Later!
        </TextElement>
      </View>
    ) : (
      <Text>{JSON.stringify(eventsInfo)}</Text>
    )}
  </View>
  )
}

export default NotificationsScreen

const styles = StyleSheet.create({})