import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  Button,
  Alert,
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import TextElement from '../../components/reusable/TextElement';
import { useAppDispatch } from '../../hooks/useAppDispatch';
// import { registerRSVP, updateRSVP, cancelRSVP } from '../../features/events/rsvpActions';

type Params = {
  EventsDetailsScreen: {
    id: string;
    title: string;
    date: string;
    location: string;
    rsvpCount: {
      participants: number;
      guests: number;
    };
    description: string;
    image: string;
  };
};

const screenWidth = Dimensions.get('window').width;

const EventDetailsScreen = () => {
  const route = useRoute<RouteProp<Params, 'EventsDetailsScreen'>>();
  const {
    id,
    title,
    date,
    location,
    rsvpCount,
    description,
    image,
  } = route.params;

  const dispatch = useAppDispatch();

  const [hasRSVPed, setHasRSVPed] = useState(false);
  const [guests, setGuests] = useState(1);

  const handleRSVP = async () => {
    try {
    //   await dispatch(registerRSVP({ id, guests }));
      setHasRSVPed(true);
      Alert.alert('RSVP Successful');
    } catch (e) {
      Alert.alert('RSVP Failed');
    }
  };

  const handleUpdate = async () => {
    try {
      const newGuestCount = guests + 1;
    //   await dispatch(updateRSVP({ id, guests: newGuestCount }));
      setGuests(newGuestCount);
      Alert.alert('RSVP Updated');
    } catch (e) {
      Alert.alert('Update Failed');
    }
  };

  const handleCancel = async () => {
    try {
    //   await dispatch(cancelRSVP(id));
      setHasRSVPed(false);
      setGuests(1);
      Alert.alert('RSVP Cancelled');
    } catch (e) {
      Alert.alert('Cancellation Failed');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: image }} style={styles.bannerImage} resizeMode="cover" />

      <View style={styles.content}>
        <TextElement customStyle={styles.title}>{title}</TextElement>

        <InfoItem label="📅 Date" value={date} />
        <InfoItem label="📍 Location" value={location} />
        <InfoItem label="👥 Guests" value={`${rsvpCount.guests}`} />
        <InfoItem label="📝 Description" value={description} />

        <View style={styles.buttonGroup}>
          {!hasRSVPed && (
            <Button title="Register RSVP" onPress={handleRSVP} />
          )}
          {hasRSVPed && (
            <>
              <Button title="Update RSVP" onPress={handleUpdate} />
              <View style={{ marginVertical: 6 }} />
              <Button title="Cancel RSVP" color="red" onPress={handleCancel} />
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
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
