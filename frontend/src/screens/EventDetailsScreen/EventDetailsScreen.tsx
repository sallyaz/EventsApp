import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import TextElement from '../../components/reusable/TextElement';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useCancelRSVPMutation,
  useGetEventByIdQuery,
  useRegisterRSVPMutation,
  useUpdateRSVPMutation,
} from '../../services/events/eventsApi';
import {goBack} from '../../utils/navigationRef';
import {CancelRSVPHandler, RegisterRSVPHandler, UpdateRSVPHandler} from '../../components/EventDetailsHelper/EventDetailsHelper';
import ButtonElement from '../../components/reusable/ButtonElement';

const screenWidth = Dimensions.get('window').width;

const EventDetailsScreen = () => {
  const route = useRoute<RouteProp<{ EventsDetailsScreen: { id: string } }, 'EventsDetailsScreen'>>();
  const id = Number(route.params?.id);
  const {data: event, refetch} = useGetEventByIdQuery(id);
  const [registerRSVP, {error: registerError}] = useRegisterRSVPMutation();
  const [updateRSVP, {error: updateError}] = useUpdateRSVPMutation();
  const [cancelRSVP, {error: cancelError}] = useCancelRSVPMutation();

  const [hasRSVPed, setHasRSVPed] = useState(false);

  const navigation = useNavigation();

useLayoutEffect(() => {
  if (!navigation.canGoBack()) {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <TextElement customStyle={{ marginLeft: 15, color: '#007aff' }}>{'< Back'}</TextElement>
        </TouchableOpacity>
      ),
    });
  }
}, [navigation]);

  useEffect(() => {
    const checkRSVPStatus = async () => {
      try {
        const userName = await AsyncStorage.getItem('userName');
        const isRegistered = event?.rsvpCount.participants.find(
          (participant: any) => participant === userName,
        );
        setHasRSVPed(!!isRegistered);
      } catch (e) {
        console.error('Error checking RSVP status:', e);
      }
    };
    checkRSVPStatus();
  }, [event]);

  

  if (!event) {
    return (
      <View style={styles.loading}>
        <TextElement>Loading event details...</TextElement>
      </View>
    );
  }
   const onRegister = RegisterRSVPHandler(id,registerRSVP,refetch,setHasRSVPed,registerError, event);;
   const onUpdate = UpdateRSVPHandler(id, event, updateRSVP, refetch, updateError);
   const onCancel = CancelRSVPHandler( goBack, cancelRSVP, id, refetch, event, setHasRSVPed, cancelError);

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
          {!hasRSVPed && <Button title="Register RSVP" onPress={onRegister} />}
          {hasRSVPed && (
            <>
              <ButtonElement title="Update RSVP"  onPress={onUpdate}/>
              <View style={{marginVertical: 6}} />
              <ButtonElement title="Cancel RSVP" color="red" onPress={onCancel}/>
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
