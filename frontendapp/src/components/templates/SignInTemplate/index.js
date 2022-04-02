import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SignForm from 'components/organisms/SignForm';

const SignInTemplate = ({ route }) => {
  const { isSignUp, title } = route.params ?? {};
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const createChangeTextHandler = (name) => (value) => {
    setForm({ ...form, [name]: value });
  };
  const onSubmit = () => {
    Keyboard.dismiss();
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
