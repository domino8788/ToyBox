import React from 'react';
import { Platform, Pressable, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Transparent = ({ icon, color, iconColor, type, text, textColor, textSize, hasMarginRight, hasMarginBottom, onPress }) => {
  return (
    <View style={[hasMarginRight && styles.rightMargin, hasMarginBottom && styles.bottomMargin]}>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: color },
          styles.defaultButtonWrapper,
          styleTypeMap[type],
          Platform.select({ ios: pressed && { backgroundColor: '#efefef' } }),
        ]}
        onPress={onPress}
        android_ripple={{ color: '#ededed' }}
      >
        {icon && <Icon name={icon} size={24} color={iconColor} />}
        {text ? <Text style={[{ color: textColor, fontSize: textSize }, styles.text]}>{text}</Text> : null}
      </Pressable>
    </View>
  );
};

Transparent.defaultProps = {
  icon: null,
  color: '#00FF0000',
  iconColor: 'black',
  type: 'circle',
  text: '',
  textColor: 'black',
  textSize: 14,
  hasMarginRight: false,
  hasMarginBottom: false,
  onPress: () => {},
};

const styles = StyleSheet.create({
  defaultButtonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  circleButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  squareButton: {
    width: 32,
    height: 32,
    borderRadius: 4,
  },
  rectangleButton: {
    height: 48,
    borderRadius: 4,
  },
  rightMargin: {
    marginRight: 8,
  },
  bottomMargin: {
    marginBottom: 8,
  },
  text: {
    fontWeight: 'bold',
  },
});

const styleTypeMap = {
  circle: styles.circleButton,
  square: styles.squareButton,
  rectangle: styles.rectangleButton,
};

export default Transparent;
