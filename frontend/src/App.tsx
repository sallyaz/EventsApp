// src/App.tsx
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AppNavigation from './navigation/AppNavigator';
import notifee, { EventType } from '@notifee/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const NOTIFICATION_KEY = 'SAVED_NOTIFICATIONS';

export default function App() {

  const saveNotification = async (notification: any) => {
    try {
      const existing = await AsyncStorage.getItem(NOTIFICATION_KEY);
      const list = existing ? JSON.parse(existing) : [];
  
      const updated = [...list, {
        id: notification.id,
        title: notification.title,
        body: notification.body,
        timestamp: new Date().toISOString(),
      }];
  
      await AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save notification:', e);
    }
  };
  
  useEffect(() => {
    const unsubscribe = notifee.onForegroundEvent(({ type, detail }) => {
      if (type === EventType.DELIVERED) {
        saveNotification(detail.notification);
      }
    });
  
    return () => unsubscribe();
  }, []);

  return (
    <Provider store={store}>
      <AppNavigation />
     </Provider>

  );
}
