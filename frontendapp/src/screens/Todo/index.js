import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Header } from 'components';

function Todo() {
  const defaultColor = '#26a69a';
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={defaultColor} />
      <Header.DateHeader backgroundColor={defaultColor} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default Todo;
