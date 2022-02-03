import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Header, List } from 'components';
import image_young_and_happy from 'assets/images/young_and_happy.png';

const defaultColor = '#26a69a';

function Todo() {
  return (
    <>
      <StatusBar backgroundColor={defaultColor} barStyle="light-content" />
      <Header.DateHeader backgroundColor={defaultColor} />
      <List.Empty image={image_young_and_happy} text="야호! 할일이 없습니다." />
      <List.AddItem placeholder="할일을 입력하세요." />
    </>
  );
}

const styles = StyleSheet.create({});

export default Todo;
