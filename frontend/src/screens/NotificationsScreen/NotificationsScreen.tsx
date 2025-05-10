import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useAppSelector } from '../../hooks/useAppDispatch';
import TextElement from '../../components/reusable/TextElement';

const NotificationsScreen = () => {
   const eventsInfo = useAppSelector((state: any) => state.events?.eventsInfo);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    {eventsInfo.length === 0 ? (
      <View style={{width:'90%'}}>
        <Image
          source={require('../../../assets/Notifications/notificationIcon.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <TextElement customStyle={styles.messageText}>
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

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
  messageText:{
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
    textAlign: 'center',
  }
})