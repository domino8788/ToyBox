import React, { useState, useCallback } from 'react';
import { View, StyleSheet, TextInput, Image, TouchableOpacity, TouchableNativeFeedback, Platform, Keyboard } from 'react-native';
import image_add_white from 'assets/icons/add_white/add_white.png';

function AddItem(props) {
  const [text, setText] = useState('');
  const button = (
    <View style={styles.buttonStyle}>
      <Image source={image_add_white} />
    </View>
  );
  const onPress = useCallback(() => {
    setText('');
    Keyboard.dismiss();
  }, []);
  return (
    <View style={styles.block}>
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor="gray"
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
        returnKeyType="done"
      />
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            {button}
          </TouchableOpacity>
        ),
        android: (
          <View style={styles.circleWrapper}>
            <TouchableNativeFeedback onPress={onPress}>{button}</TouchableNativeFeedback>
          </View>
        ),
      })}
    </View>
  );
}

AddItem.defaultProps = {
  placeholder: '입력',
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    color: 'black',
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    borderRadius: 24,
  },
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: 24,
  },
});

export default AddItem;
