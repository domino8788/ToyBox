import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Button } from 'components';

const SignIn = ({ route }) => {
  return (
    <SafeAreaView style={styles.fullScreen}>
      <Text style={styles.text}>{route.params.title}</Text>
      <View style={styles.form}>
        <Input.Bordered hasMarginBottom placeholder="이메일" placeholderTextColor="darkgray" />
        <Input.Bordered placeholder="비밀번호" placeholderTextColor="darkgray" />
        <View style={styles.buttons}>
          <Button.Transparent text="로그인" hasMarginBottom type="rectangle" color="#6200ee" textSize={14} />
          <Button.Transparent text="회원가입" type="rectangle" color="#6200ee" textSize={14} theme="secondary" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
