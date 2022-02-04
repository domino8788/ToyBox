import React, { useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Header, List } from 'components';
import image_young_and_happy from 'assets/images/young_and_happy.png';

const defaultColor = '#26a69a';

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: '작업환경 설정', done: true },
    { id: 2, text: '리액트 네이티브 기초 공부', done: false },
    { id: 3, text: '투두리스트 만들어보기', done: false },
  ]);
  return (
    <>
      <StatusBar backgroundColor={defaultColor} barStyle="light-content" />
      <Header.DateHeader backgroundColor={defaultColor} />
      {todos.length === 0 ? <List.Empty image={image_young_and_happy} text="야호! 할일이 없습니다." /> : <List.Linear data={todos} />}
      <List.AddItem placeholder="할일을 입력하세요." />
    </>
  );
};

const styles = StyleSheet.create({});

export default Todo;
