import React from 'react';
import { View, Image, Platform, StyleSheet } from 'react-native';
import TextElement from '../reusable/TextElement';
import ButtonElement from '../reusable/ButtonElement';
import { navigate } from '../../utils/navigationRef';
import { useGetEventByIdQuery } from '../../services/events/eventsApi';

export type EventCardProps = {
  id: number;
  title: string;
  date: string;
  location: string;
  rsvpCount: { participants: number; guests: number };
  description: string;
  image: string;
};

const EventCardItem = ({
  id,
  title,
  date,
  location,
  rsvpCount,
  description,
  image,
}: EventCardProps) => {
  const { data: latestEvent } = useGetEventByIdQuery(id);

 // Use fresh data if available
 const activeEvent = latestEvent ?? {
    id,
    title,
    date,
    location,
    rsvpCount,
    description,
    image,
  };




  return (
    <View
      style={{
        ...styles.item,
        borderWidth: Platform.OS === 'ios' ? 0.5 : 1,
        padding: 20,
      }}>
      <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
        <Image
          source={require('../../../assets/Events/eventsIcon.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={{ marginVertical: 20 }}>
          <TextElement customStyle={styles.title}>{activeEvent.title}</TextElement>
          <TextElement>🗓️ Where: {activeEvent.location}</TextElement>
          <TextElement>📍 When: {activeEvent.date}</TextElement>
          <TextElement>👥 RSVP Count: {activeEvent.rsvpCount.guests}</TextElement>
        </View>
      </View>

      <ButtonElement
        title={'RSVP'}
        onPress={() => {
          navigate('EventsDetailsScreen', {
            id: activeEvent.id,
            title: activeEvent.title,
            date: activeEvent.date,
            location: activeEvent.location,
            rsvpCount: activeEvent.rsvpCount,
            description:  activeEvent.description,
            image: activeEvent.image,
          });
          console.log(`👥 RSVP for ${title}`);
        }}
      />
    </View>
  );
};

export default EventCardItem;

const styles = StyleSheet.create({
  item: {
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  title: {
    fontSize: 32,
    marginVertical: 8,
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
});
