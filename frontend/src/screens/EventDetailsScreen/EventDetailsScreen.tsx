import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  Button,
  Alert,
} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import TextElement from '../../components/reusable/TextElement';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useGetEventByIdQuery,
  useRegisterRSVPMutation,
} from '../../services/events/eventsApi';

type Params = {
  EventsDetailsScreen: {
    id: number;
  };
};

const screenWidth = Dimensions.get('window').width;

const EventDetailsScreen = () => {
  const route = useRoute<RouteProp<Params, 'EventsDetailsScreen'>>();
  const {id} = route.params;

  const {data: event, refetch} = useGetEventByIdQuery(id);
  const [registerRSVP, {error}] = useRegisterRSVPMutation();

  const [hasRSVPed, setHasRSVPed] = useState(false);

  useEffect(() => {
    const checkRSVPStatus = async () => {
      try {
        const userName = await AsyncStorage.getItem('userName');
        const isRegistered = event?.rsvpCount.participants.find(
            (participant: any) => participant === userName);
        setHasRSVPed(!!isRegistered);
      } catch (e) {
        console.error('Error checking RSVP status:', e);
      }
    };
    checkRSVPStatus();
  }, [event]);

  const handleRSVP = async () => {
    try {
      const userName = await AsyncStorage.getItem('userName');
      if (!id || !userName) {
        Alert.alert('Invalid user or event ID');
        return;
      }
      await registerRSVP({id, userName}).unwrap();
      await refetch().unwrap();
      setHasRSVPed(true);
    } catch (e) {
      console.error('Error in RSVP:', e);
      Alert.alert('RSVP Failed');
    }
  };

  if (!event) {
    return (
      <View style={styles.loading}>
        <TextElement>Loading event details...</TextElement>
      </View>
    );
  }
//   const handleUpdate = async () => {
//     try {
//       const userName = await AsyncStorage.getItem('userName');
//       if (!userName) return;
  
//       const guests = (event?.rsvpCount.guests || 0) + 1;
//       await updateRSVP({ id, userName, guests }).unwrap();
//       await refetch();
//       Alert.alert('RSVP Updated');
//     } catch (e) {
//       Alert.alert('Update Failed');
//     }
//   };

//   const handleCancel = async () => {
//     try {
//       const userName = await AsyncStorage.getItem('userName');
//       if (!userName) return;
  
//       await cancelRSVP({ id, userName }).unwrap();
//       await refetch();
//       setHasRSVPed(false);
//       Alert.alert('RSVP Cancelled');
//     } catch (e) {
//       Alert.alert('Cancellation Failed');
//     }
//   };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{uri: event.image}}
        style={styles.bannerImage}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <TextElement customStyle={styles.title}>{event.title}</TextElement>
        <InfoItem label="📅 Date" value={event.date} />
        <InfoItem label="📍 Location" value={event.location} />
        <InfoItem label="👥 Guests" value={`${event?.rsvpCount.guests ?? 0}`} />
        <InfoItem label="📝 Description" value={event.description} />

        <View style={styles.buttonGroup}>
          {!hasRSVPed && <Button title="Register RSVP" onPress={handleRSVP} />}
          {hasRSVPed && (
            <>
              <Button title="Update RSVP" />
              <View style={{marginVertical: 6}} />
              <Button title="Cancel RSVP" color="red" />
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const InfoItem = ({label, value}: {label: string; value: string}) => (
  <View style={styles.infoItem}>
    <TextElement customStyle={styles.infoLabel}>{label}</TextElement>
    <TextElement customStyle={styles.infoValue}>{value}</TextElement>
  </View>
);

export default EventDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    width: screenWidth,
    height: 240,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 15,
    color: '#1e1e1e',
  },
  infoItem: {
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 14,
    color: '#888',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  buttonGroup: {
    marginTop: 24,
  },
});
