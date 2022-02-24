import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FloatingButton } from 'components';

function CalendarScreen() {
  return (
    <View style={styles.block}>
      <FloatingButton />
    </View>
  );
}

const styles = StyleSheet.create({
  block: { flex: 1 },
});

export default CalendarScreen;
