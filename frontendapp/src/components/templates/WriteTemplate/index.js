import React, { useState, useContext, useCallback, useMemo } from 'react';
import { StyleSheet, Platform, KeyboardAvoidingView, Alert, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { formatDate } from 'helpers';
import Context, { INSERT_LOG, UPDATE_LOG, DELETE_LOG } from 'stores/Context';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import WriteHeader from 'components/organisms/WriteHeader';
import Editor from 'components/molecules/Editor';

const CenterDateText = ({ date, onPressDate, onPressTime }) => {
  const dateText = useMemo(() => formatDate(new Date(date), 'PPP'), [date]);
  const timeText = useMemo(() => formatDate(new Date(date), 'p'), [date]);
  return (
    <>
      <Pressable onPress={onPressDate}>
        <Text style={styles.text}>{dateText}</Text>
      </Pressable>
      <View style={styles.separator} />
      <Pressable onPress={onPressTime}>
        <Text style={styles.text}>{timeText}</Text>
      </Pressable>
    </>
  );
};

const WriteTemplate = ({ route }) => {
  const log = route.params?.log;
  const [title, setTitle] = useState(log?.title ?? '');
  const [body, setBody] = useState(log?.body ?? '');
  const [date, setDate] = useState(log ? new Date(log.date) : new Date());
  const [, dispatch] = useContext(Context);
  const navigation = useNavigation();
  const [mode, setMode] = useState('date');
  const [visible, setVisible] = useState(false);
  const onPressDate = useCallback(() => {
    setMode('date');
    setVisible(true);
  }, []);
  const onPressTime = useCallback(() => {
    setMode('time');
    setVisible(true);
  }, []);
  const onConfirm = useCallback((selectedDate) => {
    setVisible(false);
    setDate(selectedDate);
  }, []);
  const onCancel = useCallback(() => {
    setVisible(false);
  }, []);

  const onSave = useCallback(() => {
    if (log) {
      dispatch(UPDATE_LOG, {
        id: log.id,
        title,
        body,
        date: new Date(date).toISOString(),
      });
    } else {
      dispatch(INSERT_LOG, {
        title,
        body,
        date: new Date(date).toISOString(),
      });
    }
    navigation.pop();
  }, [log, title, body, date, dispatch, navigation]);
  const onDelete = useCallback(() => {
    if (log) {
      Alert.alert(
        '??????',
        '????????? ??????????????????????',
        [
          { text: '??????', style: 'cancel' },
          {
            text: '??????',
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
        <WriteHeader
          onSave={onSave}
          onDelete={onDelete}
          isEditing={!!log}
          center={<CenterDateText date={date} onPressDate={onPressDate} onPressTime={onPressTime} />}
          onChangeDate={setDate}
        />
        <Editor
          title={title}
          titlePlaceholder="????????? ???????????????"
          body={body}
          bodyPlaceholder="????????? ????????? ??????????????????"
          onChangeTitle={setTitle}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
      <DateTimePickerModal isVisible={visible} mode={mode} onConfirm={onConfirm} onCancel={onCancel} date={date} />
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
  separator: {
    width: 8,
  },
  text: {
    color: '#212121',
  },
});

export default WriteTemplate;
