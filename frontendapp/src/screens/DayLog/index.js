import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen from 'screens';
import { Header } from 'components';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const DayLogTab = () => {
  return (
    <Tab.Navigator screenOptions={{ showLabel: false, activeTintColor: '#009688' }}>
      <Tab.Screen
        name="Feeds"
        component={Screen.Feed}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="view-stream" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Screen.Calendar}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="event" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Screen.Search}
        options={{
          title: '검색',
          headerTitle: () => <Header.Search />,
          tabBarIcon: ({ color, size }) => <Icon name="search" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const DayLog = () => {
  return (
    <Stack.Navigator initialRouteName="DayLogTab">
      <Stack.Screen name="DayLogTab" component={DayLogTab} options={{ headerShown: false }} />
      <Stack.Screen name="Write" component={Screen.Write} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default DayLog;
