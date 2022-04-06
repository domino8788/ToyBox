import React, { useState, useContext, useCallback } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signIn, signUp } from 'lib/auth';
import Context, { HANDLE_COMMON } from 'stores/Context';

import SignForm from 'components/organisms/SignForm';

const SignInTemplate = ({ route }) => {
  const { isSignUp, title } = route.params ?? {};
  const [, dispatch] = useContext(Context);
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const createChangeTextHandler = (name) => (value) => {
    setForm({ ...form, [name]: value });
  };
  const handleIsLoading = useCallback(
    (isLoading) =>
      dispatch(HANDLE_COMMON, {
        key: 'isLoading',
        value: isLoading,
      }),
    [dispatch],
  );
  const onSubmit = async () => {
    Keyboard.dismiss();
    const { email, password, confirmPassword } = form;

    if (isSignUp && password !== confirmPassword) {
      Alert.alert('실패', '비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!email.trim().length || !password.trim().length) {
      Alert.alert('실패', '이메일과 비밀번호를 입력해주세요.');
      return;
    }

    const info = { email, password };
    handleIsLoading(true);
    try {
      const { user } = isSignUp ? await signUp(info) : await signIn(info);
      console.log(user);
    } catch (e) {
      const messages = {
        'auth/email-already-in-use': '이미 가입된 이메일입니다.',
        'auth/wrong-password': '잘못된 비밀번호입니다.',
        'auth/user-not-found': '존재하지 않는 계정입니다.',
        'auth/invalid-email': '유효하지 않은 이메일 주소입니다.',
      };
      const msg = messages[e.code] || `${isSignUp ? '가입' : '로그인'} 실패`;
      Alert.alert('실패', msg);
    } finally {
      handleIsLoading(false);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior={Platform.select({ ios: 'padding' })}>
      <SafeAreaView style={styles.fullScreen}>
        <Text style={styles.text}>{title}</Text>
        <SignForm isSignUp={isSignUp} onSubmit={onSubmit} form={form} createChangeTextHandler={createChangeTextHandler} />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  fullScreen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
  buttons: {
    marginTop: 64,
  },
});

export default SignInTemplate;
