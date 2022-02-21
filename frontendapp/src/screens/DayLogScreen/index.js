import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WriteScreen, FeedsScreen, CalendarScreen, SearchScreen } from 'screens';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const DayLogTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feeds" component={FeedsScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};

const DayLogScreen = () => {
  return (
    <Stack.Navigator initialRouteName="DayLogTab">
      <Stack.Screen name="DayLogTab" component={DayLogTab} options={{ headerShown: false }} />
      <Stack.Screen name="Write" component={WriteScreen} />
    </Stack.Navigator>
  );
};

export default DayLogScreen;
