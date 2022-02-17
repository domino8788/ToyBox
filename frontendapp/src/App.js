import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Todo } from 'screens';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppContainer = (props) => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.block} edges={['bottom']}>
      <KeyboardAvoidingView behavior={Platform.select({ ios: 'padding' })} style={styles.avoid}>
        {props.children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const DrawerContainer = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home" drawerPosition="left" backBehavior="history">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Todo" component={Todo} />
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
