import React, { useEffect } from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/useAppDispatch';
import TextElement from '../../components/reusable/TextElemnt';
import { getEvents } from '../../services/events/eventsThunk';

const EventsScreen = () => {
  const eventsInfo = useAppSelector((state: any) => state.events?.eventsInfo);

    const dispatch = useAppDispatch();
  
      useEffect(() => {
        // Fetch events data here
        dispatch(getEvents());
      }, [])
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {!eventsInfo ? (
        <View style={{width: '90%'}}>
          <Image
            source={require('../../../assets/Events/eventsIcon.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <TextElement
            customStyle={styles.messageText}>
            There`s No Active Events. Please Try Later!
          </TextElement>
        </View>
      ) : (
        <Text>{JSON.stringify(eventsInfo)}</Text>
      )}
    </View>
  );
};

export default EventsScreen;

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
});
