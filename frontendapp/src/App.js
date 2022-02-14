import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Todo } from 'screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={styles.block} edges={['bottom']}>
          <KeyboardAvoidingView behavior={Platform.select({ ios: 'padding' })} style={styles.avoid}>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Todo" component={Todo} />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
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
