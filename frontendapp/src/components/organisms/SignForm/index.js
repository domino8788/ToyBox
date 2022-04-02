import React from 'react';
import { StyleSheet, View } from 'react-native';

import SignInput from 'components/molecules/SignInput';
import SignButton from 'components/molecules/SignButton';

const SignForm = ({ isSignUp, onSubmit, form, createChangeTextHandler }) => {
  return (
    <View style={styles.form}>
      <SignInput isSignUp={isSignUp} onSubmit={onSubmit} form={form} createChangeTextHandler={createChangeTextHandler} />
      <SignButton isSignUp={isSignUp} onSubmit={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default SignForm;
