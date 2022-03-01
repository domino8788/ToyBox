import React, { useState } from 'react';
import { StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Header } from 'components';

const WriteScreen = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView style={styles.avoidingView} behavior={Platform.select({ ios: 'padding' })}>
        <Header.Write />
        <Input.Editor
          title={title}
          titlePlaceholder="제목을 입력하세요"
          body={body}
          bodyPlaceholder="당신의 오늘을 기록해보세요"
          onChangeTitle={setTitle}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoidingView: {
    flex: 1,
  },
});

export default WriteScreen;
