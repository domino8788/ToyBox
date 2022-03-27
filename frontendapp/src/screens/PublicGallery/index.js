import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Template from 'templates';

const Stack = createNativeStackNavigator();

const PublicGallery = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={Template.SignIn} options={{ headerShown: false }} initialParams={{ title: 'Public Gallery' }} />
    </Stack.Navigator>
  );
};

export default PublicGallery;
