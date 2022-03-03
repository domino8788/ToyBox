import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Empty = (props) => {
  return (
    <View style={styles.block}>
      {props.image && <Image source={props.image} style={styles.image} />}
      <Text style={styles.description}>{props.text}</Text>
    </View>
  );
};

Empty.defaultProps = {
  text: 'empty',
  image: null,
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
    fontSize: 24,
    color: '#9e9e9e',
  },
});

export default Empty;
