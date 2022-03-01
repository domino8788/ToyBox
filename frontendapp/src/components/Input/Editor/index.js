import React, { useRef } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const Editor = ({
  title,
  titlePlaceholder,
  titlePlaceholderTextColor,
  body,
  bodyPlaceholder,
  bodyPlaceholderTextColor,
  onChangeTitle,
  onChangeBody,
}) => {
  const bodyRef = useRef();
  return (
    <View style={styles.block}>
      <TextInput
        placeholder={titlePlaceholder}
        placeholderTextColor={titlePlaceholderTextColor}
        style={styles.titleInput}
        returnKeyType="next"
        onChangeText={onChangeTitle}
        value={title}
        onSubmitEditing={() => {
          bodyRef.current.focus();
        }}
      />
      <TextInput
        placeholder={bodyPlaceholder}
        placeholderTextColor={bodyPlaceholderTextColor}
        style={styles.bodyInput}
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
        ref={bodyRef}
      />
    </View>
  );
};

Editor.defaultProps = {
  title: '',
  titlePlaceholder: '제목을 입력하세요.',
  titlePlaceholderTextColor: 'darkgray',
  body: '',
  bodyPlaceholder: '내용을 입력하세요.',
  bodyPlaceholderTextColor: 'darkgray',
  onChangeTitle: () => {},
  onChangeBody: () => {},
};

const styles = StyleSheet.create({
  block: { flex: 1, padding: 16 },
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: '#263238',
  },
});

export default Editor;
