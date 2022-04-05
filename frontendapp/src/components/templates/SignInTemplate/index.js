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
    const { email, password } = form;
    const info = { email, password };
    handleIsLoading(true);
    try {
      const { user } = isSignUp ? await signUp(info) : await signIn(info);
      console.log(user);
    } catch (e) {
      Alert.alert('실패');
      console.log(e);
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
