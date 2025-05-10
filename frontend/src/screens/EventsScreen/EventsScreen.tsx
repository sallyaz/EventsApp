import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import { useAppSelector} from '../../hooks/useAppDispatch';
import TextElement from '../../components/reusable/TextElemnt';
import { SafeAreaView } from 'react-native-safe-area-context';

type ItemProps = {
  title: string;
  date: string;
  location: string;
  description: string;
  rsvpCount: {participants: number; guests: number};
};

const Item = ({title, date, location, description, rsvpCount}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{rsvpCount.guests}</Text>
  </View>
);

const EventsScreen = () => {
  const eventsInfo = useAppSelector((state: any) => state.events?.eventsInfo);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {eventsInfo.lenght == 0 ? (
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
        <SafeAreaView style={styles.container}>
        <FlatList
          data={eventsInfo}
          renderItem={({item}) => <Item title={item.title} date={item.date} location={item.location} description={item.description} rsvpCount={item.rsvpCount} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
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
  messageText: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
