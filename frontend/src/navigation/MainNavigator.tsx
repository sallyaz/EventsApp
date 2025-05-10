import React from 'react';

// Navigatipon
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Components
import EventsScreen from '../screens/EventsScreen/EventsScreen';
import NotificationsScreen from '../screens/NotificationsScreen/NotificationsScreen';
import EventsDetailsScreen from '../screens/EventDetailsScreen/EventDetailsScreen';
import colors from '../constants/colors';

// Icons
import EventsTabIcon from '../../assets/Events/EventsTabIcon'; // Adjust the path as needed
import NotificationTabIcon from '../../assets/Notifications/NotificationTabIcon'; // Adjust the path as needed

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabBarIcon = ({
  route,
  focused,
}: {
  route: {name: string};
  focused: boolean;
}) => {
  switch (route.name) {
    case 'Events':
      return <EventsTabIcon color={focused ? colors.primary : '#000'} />;
    case 'Notifications':
      return <NotificationTabIcon color={focused ? colors.primary : '#000'} />;
    default:
      return null;
  }
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerTitle: route.name,
        tabBarIcon: ({focused}) => (
          <TabBarIcon route={route} focused={focused} />
        ),
      })}>
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
};
interface MainNavigationProps {}

const MainNavigation: React.FC<MainNavigationProps> = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EventsScreen"
        component={EventsScreen}
        options={{headerBackTitle: 'Back'}}
      />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{headerBackTitle: 'Back'}}
      />
      <Stack.Screen
        name="EventsDetailsScreen"
        component={EventsDetailsScreen}
        options={{headerTitle: 'Event Details', headerBackTitle: 'Back'}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
