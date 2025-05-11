import notifee, { TimestampTrigger, TriggerType } from '@notifee/react-native';

export const onDisplayNotification = async(e: any) => {
    // Request permissions (required for iOS)
    await notifee.requestPermission()
  
    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
  
    // Display a notification
    await notifee.displayNotification({
      title: 'Events',
      body: `You Have Successfully Registered To ${e.title} Event`,
      android: {
        channelId,
        smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  };

  export const onCreateTriggerNotification = async (e: any) => {
    const timestamp = Date.now() + 10 * 1000; 

    // Create a time-based trigger
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp // fire at 11:10am (10 minutes before meeting)
    };

    // Create a trigger notification
    await notifee.createTriggerNotification(
      {
        title: `${e.title} Will Start Soon`,
        body: 'Today at 11:20am',
        android: {
          channelId: 'default',
        },
      },
      trigger,
    );
  };