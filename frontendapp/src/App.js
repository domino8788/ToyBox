import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Todo } from 'screens';

const App = () => {
  return (
    <SafeAreaView style={styles.block}>
      <Todo />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
