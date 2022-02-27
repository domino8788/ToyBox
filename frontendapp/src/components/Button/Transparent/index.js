import React from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Transparent = ({ name, color, type, hasMarginRight, onPress }) => {
  return (
    <View style={[styles.iconButtonWrapper, hasMarginRight && styles.rightMargin, styleTypeMap[type]]}>
      <Pressable
        style={({ pressed }) => [styles.iconButton, Platform.select({ ios: pressed && { backgroundColor: '#efefef' } })]}
        onPress={onPress}
        android_ripple={{ color: '#ededed' }}
      >
        <Icon name={name} size={24} color={color} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
  },
  circleButton: {
    borderRadius: 16,
  },
  rightMargin: {
    marginRight: 8,
  },
});

const styleTypeMap = {
  circle: styles.circleButton,
};

export default Transparent;
