import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Screen from 'screens';
import { ContextProvider } from 'stores/Context';

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

const DrawerContainer = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home" drawerPosition="left" backBehavior="history">
      <Drawer.Screen name="Home" component={Screen.Home} />
      <Drawer.Screen name="Todo" component={Screen.Todo} />
      <Drawer.Screen name="DayLog" component={Screen.DayLog} />
    </Drawer.Navigator>
  </NavigationContainer>
);

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
