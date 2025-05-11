import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, RefreshControl, View} from 'react-native';

// Reusable Components
import TextElement from '../../components/reusable/TextElement';
import ScreenWrapper from '../../components/screenWrapper/ScreenWrapper';
import colors from '../../constants/colors';
import {useGetPaginatedEventsQuery} from '../../services/events/eventsApi';
import EventCardInfo, { EventCardProps } from '../../components/eventCardInfo/eventCardInfo';

const EventsScreen = () => {
  const [page, setPage] = useState(1);
  const [eventsList, setEventsList] = useState<EventCardProps[]>([]);

  const [refreshing, setRefreshing] = useState(false);
  const {data, isFetching, refetch} = useGetPaginatedEventsQuery({
    page,
    limit: 5,
  });

  const onEndReached = () => {
    if (
      !isFetching &&
      data?.currentPage !== undefined &&
      data?.totalPages !== undefined
    ) {
      if (data.currentPage < data.totalPages) {
        setPage(prev => prev + 1);
      }
    }
  };

  useEffect(() => {
    if (data?.data) {
      setEventsList(prev =>
        page === 1
          ? data.data
          : [...prev, ...data.data.filter(e => !prev.find(p => p.id === e.id))],
      );
    }
  }, [data, page]);

  const onRefresh = async () => {
    setRefreshing(true);
    setPage(1);
    await refetch();
    setRefreshing(false);
  };

  return (
    <ScreenWrapper style={styles.screenWrap} backgroundColor={colors.bgColor}>
      {!data || data.data.length === 0 ? (
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
          data={eventsList}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          renderItem={({item}) => (
            <EventCardInfo
              id={item.id}
              title={item.title}
              date={item.date}
              location={item.location}
              rsvpCount={item.rsvpCount}
              description={item.description}
              image={item.image}
            />
          )}
          keyExtractor={item => item.id.toString()}
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
  screenWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
});
