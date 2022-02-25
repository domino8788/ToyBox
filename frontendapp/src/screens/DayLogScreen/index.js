import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WriteScreen, FeedsScreen, CalendarScreen, SearchScreen } from 'screens';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const DayLogTab = () => {
  return (
    <Tab.Navigator screenOptions={{ showLabel: false, activeTintColor: '#009688' }}>
      <Tab.Screen
        name="Feeds"
        component={FeedsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="view-stream" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="event" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="search" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const DayLogScreen = () => {
  return (
    <Stack.Navigator initialRouteName="DayLogTab">
      <Stack.Screen name="DayLogTab" component={DayLogTab} options={{ headerShown: false }} />
      <Stack.Screen name="Write" component={WriteScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default DayLogScreen;
