import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import FeedTemplate from 'components/templates/FeedTemplate';
import CalendarTemplate from 'components/templates/CalendarTemplate';
import SearchTemplate from 'components/templates/SearchTemplate';
import WriteTemplate from 'components/templates/WriteTemplate';
import SearchHeader from 'components/organisms/SearchHeader';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const DayLogTab = () => {
  return (
    <Tab.Navigator screenOptions={{ showLabel: false, activeTintColor: '#009688' }}>
      <Tab.Screen
        name="Feeds"
        component={FeedTemplate}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="view-stream" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarTemplate}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="event" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchTemplate}
        options={{
          title: '검색',
          headerTitle: () => <SearchHeader placeholder="검색어를 입력하세요" placeholderTextColor="darkgray" />,
          tabBarIcon: ({ color, size }) => <Icon name="search" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const DayLogPage = () => {
  return (
    <Stack.Navigator initialRouteName="DayLogTab">
      <Stack.Screen name="DayLogTab" component={DayLogTab} options={{ headerShown: false }} />
      <Stack.Screen name="Write" component={WriteTemplate} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default DayLogPage;
