import React, {useCallback, useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';

import {FlatList, Image, StyleSheet, View} from 'react-native';
import TextElement from '../../components/reusable/TextElement';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { NotificationItem } from '../../types/types';

const NOTIFICATION_KEY = 'SAVED_NOTIFICATIONS';

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  useFocusEffect(
    useCallback(() => {
      const loadNotifications = async () => {
        const stored = await AsyncStorage.getItem(NOTIFICATION_KEY);
        setNotifications(stored ? JSON.parse(stored) : []);
      };
  
      loadNotifications();
    }, [])
  );

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {notifications.length === 0 ? (
        <View style={{width: '90%'}}>
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
        <FlatList
          data={notifications}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={({item}) => (
            <View style={styles.card}>
            <View style={styles.cardHeader}>
              <TextElement customStyle={styles.title}>{item.title}</TextElement>
              <TextElement customStyle={styles.time}>
                {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </TextElement>
            </View>
            <TextElement customStyle={styles.body}>{item.body}</TextElement>
          </View>
          )}
        />
      )}
    </View>
  );
};

export default NotificationsScreen;

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
    backgroundColor: '#F9FAFB',
    padding: 16,
  },
  card: {
    marginVertical: 10,
    width: '98%',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  title: {
    width: '85%',
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  time: {
    fontSize: 12,
    color: '#6B7280',
  },
  body: {
    fontSize: 14,
    color: '#374151',
  },
});
