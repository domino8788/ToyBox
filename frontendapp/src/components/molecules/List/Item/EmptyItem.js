import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Empty = ({ image, text, size }) => {
  return (
    <View style={styles.block}>
      {image && <Image source={image} style={styles.image} />}
      <Text style={[styles.description, sizeToStyle[size]]}>{text}</Text>
    </View>
  );
};

Empty.defaultProps = {
  text: 'empty',
  image: null,
  size: 'medium',
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
  description: {
    color: '#9e9e9e',
  },
  small: {
    fontSize: 16,
  },
  medium: {
    fontSize: 24,
  },
  large: {
    fontSize: 34,
  },
});

const sizeToStyle = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

export default Empty;
