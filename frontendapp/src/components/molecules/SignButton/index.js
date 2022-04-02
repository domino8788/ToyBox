import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from 'components/atoms/Button';

const SignButton = ({ isSignUp, onSubmit }) => {
  const navigation = useNavigation();
  const primaryTitle = isSignUp ? '회원가입' : '로그인';
  const secondaryTitle = isSignUp ? '로그인' : '회원가입';

  const onSecondaryButtonPress = () => {
    if (isSignUp) {
      navigation.goBack();
    } else {
      navigation.push('SignIn', { isSignUp: true });
    }
  };

  return (
    <View style={styles.buttons}>
      <Button text={primaryTitle} hasMarginBottom type="rectangle" color="#6200ee" textSize={14} onPress={onSubmit} />
      <Button text={secondaryTitle} type="rectangle" color="#6200ee" textSize={14} theme="secondary" onPress={onSecondaryButtonPress} />
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

export default SignButton;
