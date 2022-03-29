import React, { useState, useRef } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Button } from 'components';

const SignIn = ({ navigation, route }) => {
  const { params } = route;
  const { isSignUp } = params ?? {};
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
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
        <Text style={styles.text}>{params.title}</Text>
        <View style={styles.form}>
          <Input.Bordered
            hasMarginBottom
            placeholder="이메일"
            placeholderTextColor="darkgray"
            value={form.email}
            onChangeText={createChangeTextHandler('email')}
            autoCapitalize="none"
            autoCorrect={false}
            autoCompleteType="email"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <Input.Bordered
            placeholder="비밀번호"
            placeholderTextColor="darkgray"
            secureTextEntry
            hasMarginBottom={isSignUp}
            value={form.password}
            onChangeText={createChangeTextHandler('password')}
            ref={passwordRef}
            returnKeyType={isSignUp ? 'next' : 'done'}
            onSubmitEditing={() => {
              if (isSignUp) {
                confirmPasswordRef.current.focus();
              } else {
                onSubmit();
              }
            }}
          />
          {isSignUp && (
            <Input.Bordered
              placeholder="비밀번호 확인"
              placeholderTextColor="darkgray"
              secureTextEntry
              value={form.confirmPassword}
              onChangeText={createChangeTextHandler('confirmPassword')}
              ref={confirmPasswordRef}
              returnKeyType="done"
              onSubmitEditing={onSubmit}
            />
          )}
          <View style={styles.buttons}>
            {isSignUp ? (
              <>
                <Button.Transparent text="회원가입" type="rectangle" color="#6200ee" textSize={14} onPress={onSubmit} />
                <Button.Transparent
                  text="로그인"
                  hasMarginBottom
                  type="rectangle"
                  color="#6200ee"
                  textSize={14}
                  theme="secondary"
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              </>
            ) : (
              <>
                <Button.Transparent text="로그인" hasMarginBottom type="rectangle" color="#6200ee" textSize={14} onPress={onSubmit} />
                <Button.Transparent
                  text="회원가입"
                  type="rectangle"
                  color="#6200ee"
                  textSize={14}
                  theme="secondary"
                  onPress={() => {
                    navigation.push('SignIn', { isSignUp: true });
                  }}
                />
              </>
            )}
          </View>
        </View>
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

export default SignIn;
