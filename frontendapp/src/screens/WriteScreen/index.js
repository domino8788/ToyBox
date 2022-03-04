import React, { useState, useContext, useCallback } from 'react';
import { StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Input, Header } from 'components';
import Context from 'stores/Context';

const WriteScreen = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [, dispatch] = useContext(Context);
  const navigation = useNavigation();
  const onSave = useCallback(() => {
    dispatch({
      type: 'INSERT_LOG',
      payload: {
        title,
        body,
        date: new Date().toISOString(),
      },
    });
    navigation.pop();
  }, [title, body, dispatch, navigation]);
  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView style={styles.avoidingView} behavior={Platform.select({ ios: 'padding' })}>
        <Header.Write onSave={onSave} />
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
