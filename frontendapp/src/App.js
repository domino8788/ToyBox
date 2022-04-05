import React, { useContext } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ContextProvider } from 'stores/Context';
import Context from 'stores/Context';

import HomeScreen from 'components/screens/HomeScreen';
import TodoScren from 'components/screens/TodoScreen';
import DayLogScreen from 'components/screens/DayLogScreen';
import PublicGalleryScreen from 'components/screens/PublicGalleryScreen';
import Loading from 'components/atoms/Loading';

LogBox.ignoreLogs(["[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!"]);

const Drawer = createDrawerNavigator();

const AppContainer = (props) => (
  <ContextProvider>
    <SafeAreaProvider>
      <SafeAreaView style={styles.block} edges={['bottom']}>
        <KeyboardAvoidingView behavior={Platform.select({ ios: 'padding' })} style={styles.avoid}>
          {props.children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  </ContextProvider>
);

const DrawerContainer = () => {
  const [{ common }] = useContext(Context);
  return (
    <>
      <Loading isLoading={common.isLoading} />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerPosition="left" backBehavior="history">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Todo" component={TodoScren} />
          <Drawer.Screen name="DayLog" component={DayLogScreen} />
          <Drawer.Screen name="PublicGallery" component={PublicGalleryScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

const App = () => {
  return (
    <AppContainer>
      <DrawerContainer />
    </AppContainer>
  );
};
const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default App;
