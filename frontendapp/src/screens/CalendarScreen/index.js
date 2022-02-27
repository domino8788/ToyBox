import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'components';

const CalendarScreen = () => {
  return (
    <View style={styles.block}>
      <Button.Floating />
    </View>
  );
};

const styles = StyleSheet.create({
  block: { flex: 1 },
});

export default CalendarScreen;
