import React, { useRef } from 'react';

import Input from 'components/atoms/Input';

const SignInput = ({ isSignUp, onSubmit, form, createChangeTextHandler }) => {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  return (
    <>
      <Input
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
      <Input
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
        <Input
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
    </>
  );
};

export default SignInput;
