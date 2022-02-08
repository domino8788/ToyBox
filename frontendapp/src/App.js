import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Todo } from 'screens';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.block} edges={['bottom']}>
        <KeyboardAvoidingView behavior={Platform.select({ ios: 'padding' })} style={styles.avoid}>
          <Todo />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
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
