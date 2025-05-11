import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {onCreateTriggerNotification, onDisplayNotification} from '../NotificationsHandler/NotificationsHandler';

export const RegisterRSVPHandler =
  (
    id: number,
    registerRSVP: any,
    refetch: any,
    setHasRSVPed: any,
    registerError: any,
    event: any,
  ) =>
  async () => {
    try {
      const userName = await AsyncStorage.getItem('userName');
      if (!id || !userName) {
        Alert.alert('Invalid user or event ID');
        return;
      }
      await registerRSVP({id, userName}).unwrap();
      await refetch().unwrap();
      setHasRSVPed(true);

      setTimeout(()=> onDisplayNotification(event),1000)
      onCreateTriggerNotification(event);
    } catch (e) {
      console.error('Error in RSVP:', e);
      Alert.alert(
        'RSVP Failed',
        registerError
          ? JSON.stringify(registerError)
          : 'An unknown error occurred',
      );
    }
  };
export const UpdateRSVPHandler =
  (id: number, event: any, updateRSVP: any, refetch: any, updateError: any) =>
  async () => {
    try {
      const userName = await AsyncStorage.getItem('userName');
      if (!userName || !id) return;
      const guests = (event?.rsvpCount.guests ?? 0) + 1;

      await updateRSVP({
        id,
        rsvpCount: {
          ...event?.rsvpCount,
          guests,
        },
      }).unwrap();
      await refetch().unwrap();
      console.log('Guests after update:', event?.rsvpCount.guests);

      Alert.alert('RSVP Updated');
    } catch (e) {
      console.error('Update Failed:', e);
      Alert.alert(
        'Update Failed',
        updateError ? JSON.stringify(updateError) : 'An unknown error occurred',
      );
    }
  };

export const CancelRSVPHandler =
  (
    goBack: any,
    cancelRSVP: any,
    id: number,
    refetch: any,
    event: any,
    setHasRSVPed: any,
    cancelError: any,
  ) =>
  async () => {
    try {
      const userName = await AsyncStorage.getItem('userName');
      if (!userName) return;

      Alert.alert('RSVP Cancelled', '', [
        {
          text: 'OK',
          onPress: () => goBack(),
        },
      ]);
      await cancelRSVP({id, userName}).unwrap();
      await refetch();
      console.log('RSVP Cancelled', event);

      setHasRSVPed(false);
    } catch (e) {
      console.error('Update Failed:', e);
      Alert.alert(
        'Cancel Failed',
        cancelError ? JSON.stringify(cancelError) : 'An unknown error occurred',
      );
    }
  };
