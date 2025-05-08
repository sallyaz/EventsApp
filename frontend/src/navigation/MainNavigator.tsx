import React from 'react';
// import Icon from 'react-native-vector-icons/Feather';

// Navigatipon
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Components
import EventsScreen from '../screens/EventsScreen/EventsScreen';
import NotificationsScreen from '../screens/NotificationsScreen/NotificationsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerTitle: ''}}>
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{
        //   tabBarIcon: () => {
        //     return <Icon name="message-circle" size={30} color={colors.blue} />;
        //   },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
        //   tabBarIcon: () => {
        //     return <Icon name="settings" size={30} color={colors.blue} />;
        //   },
        }}
      />
    </Tab.Navigator>
  );
};
interface MainNavigationProps {}

const MainNavigation: React.FC<MainNavigationProps> = (props) => {
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
                options={{headerTitle: 'Settings', headerBackTitle: 'Back'}}
            />
            <Stack.Screen
                name="NotificationsScreen"
                component={NotificationsScreen}
                options={{headerTitle: '', headerBackTitle: 'Back'}}
            />
        </Stack.Navigator>
    );
};

export default MainNavigation;