import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Todo } from 'screens';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.block} edges={['bottom']}>
        <Todo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
