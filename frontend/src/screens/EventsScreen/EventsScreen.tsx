import React, { useState } from 'react';
import {FlatList, Image, StyleSheet, RefreshControl, View} from 'react-native';
import { navigate } from '../../utils/navigationRef';
// Redux
import {useAppDispatch, useAppSelector} from '../../hooks/useAppDispatch';
import { getEvents } from '../../services/events/eventsThunk';

// Reusable Components
import TextElement from '../../components/reusable/TextElement';
import ButtonElement from '../../components/reusable/ButtonElement';
import ScreenWrapper from '../../components/screenWrapper/ScreenWrapper';
import colors from '../../constants/colors';

type ItemProps = {
  title: string;
  date: string;
  location: string;
  rsvpCount: {participants: number; guests: number};
  description: string;
  image: string;
};

const Item = ({title, date, location, rsvpCount, description, image}: ItemProps) => (
  <View style={styles.item}>
    <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
      <Image
        source={require('../../../assets/Events/eventsIcon.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={{marginVertical: 10}}>
        <TextElement customStyle={styles.title}>{title}</TextElement>
        <TextElement>🗓️ Where: {location}</TextElement>
        <TextElement>📍 When: {date}</TextElement>
        <TextElement>👥 RSVP Count: {rsvpCount.guests}</TextElement>
      </View>
    </View>

    <ButtonElement
      title={'RSVP'}
      onPress={() => {
        navigate('EventsDetailsScreen', {
          title: title,
          date: date,
          location: location,
          rsvpCount: rsvpCount,
          description: description,
          image : image,

        });
        console.log(` 👥 RSVP for ${title}`);
      }}
    />
  </View>
);

const EventsScreen = () => {
  const dispatch = useAppDispatch();
  const eventsInfo = useAppSelector((state: any) => state.events?.eventsInfo);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await dispatch(getEvents());
    setRefreshing(false);
  };

  return (
    <ScreenWrapper backgroundColor={colors.bgColor}>
      {eventsInfo.length === 0 ? (
        <View style={{width: '90%'}}>
          <Image
            source={require('../../../assets/Events/eventsIcon.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <TextElement customStyle={styles.messageText}>
            There`s No Active Events. Please Try Later!
          </TextElement>
        </View>
      ) : (
          <FlatList
            data={eventsInfo}
            renderItem={({item}) => (
              <Item
                title={item.title}
                date={item.date}
                location={item.location}
                rsvpCount={item.rsvpCount}
                description={item.description}
                image={item.image}
              />
            )}
            keyExtractor={item => item.id}
            refreshControl={
              <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['grey']}
              progressBackgroundColor={'black'}
            />
            }
          />
   
      )}
    </ScreenWrapper>
  );
};

export default EventsScreen;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  messageText: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
    textAlign: 'center',
  },

  item: {
    borderRadius: 15,
    borderWidth: .2,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 32,
    marginVertical: 8,
  },
});
