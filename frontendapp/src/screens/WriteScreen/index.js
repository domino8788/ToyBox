import React, { useState, useContext, useCallback } from 'react';
import { StyleSheet, Platform, KeyboardAvoidingView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Input, Header } from 'components';
import Context, { INSERT_LOG, UPDATE_LOG, DELETE_LOG } from 'stores/Context';

const WriteScreen = ({ route }) => {
  const log = route.params?.log;
  const [title, setTitle] = useState(log?.title ?? '');
  const [body, setBody] = useState(log?.body ?? '');
  const [, dispatch] = useContext(Context);
  const navigation = useNavigation();
  const onSave = useCallback(() => {
    if (log) {
      dispatch(UPDATE_LOG, {
        id: log.id,
        title: title,
        body: body,
        date: new Date().toISOString(),
      });
    } else {
      dispatch(INSERT_LOG, {
        title,
        body,
        date: new Date().toISOString(),
      });
    }
    navigation.pop();
  }, [title, body, dispatch, navigation]);
  const onDelete = useCallback(() => {
    if (log) {
      Alert.alert(
        '삭제',
        '정말로 삭제하시겠어요?',
        [
          { text: '취소', style: 'cancel' },
          {
            text: '삭제',
            onPress: () => {
              dispatch(DELETE_LOG, { id: log.id });
              navigation.pop();
            },
            style: 'destructive',
          },
        ],
        {
          cancelable: true,
        },
      );
    }
  }, []);

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView style={styles.avoidingView} behavior={Platform.select({ ios: 'padding' })}>
        <Header.Write onSave={onSave} onDelete={onDelete} isEditing={!!log} />
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
