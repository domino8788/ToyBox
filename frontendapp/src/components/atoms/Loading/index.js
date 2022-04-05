import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Loading = ({ isLoading }) => (
  <View style={[styles.container, !isLoading && { display: 'none' }]}>
    <ActivityIndicator animating={isLoading} size="large" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 9999,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
});

export default Loading;
