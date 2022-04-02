import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInTemplate from 'components/templates/SignInTemplate';

const Stack = createNativeStackNavigator();

const PublicGalleryPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInTemplate} options={{ headerShown: false }} initialParams={{ title: 'Public Gallery' }} />
    </Stack.Navigator>
  );
};

export default PublicGalleryPage;
