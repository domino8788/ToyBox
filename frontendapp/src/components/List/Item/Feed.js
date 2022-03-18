import React from 'react';
import { Platform, Pressable, StyleSheet, Text } from 'react-native';
import { formatDate, truncate } from 'helpers';

const Feed = (props) => {
  const { title, body, date, onPress } = props;

  return (
    <Pressable
      style={({ pressed }) => [styles.block, Platform.OS === 'ios' && pressed && { backgroundColor: '#efefef' }]}
      android_ripple={{ color: '#ededed' }}
      onPress={onPress}
    >
      <Text style={styles.date}>{formatDate(date, 'PPP EEE p')}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{truncate(body)}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  date: {
    fontSize: 12,
    color: '#546e7a',
    marginBottom: 8,
  },
  title: {
    color: '#263238',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    color: '#37474f',
    fontSize: 16,
    lineHeight: 21,
  },
});

export default Feed;
