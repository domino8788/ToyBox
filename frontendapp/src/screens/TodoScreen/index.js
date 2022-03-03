import React, { useState, useCallback, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { Header, List } from 'components';
import image_young_and_happy from 'assets/images/young_and_happy.png';
import produce from 'immer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useStyles } from 'hooks';
import todosStorage from 'storages/todosStorage';

const defaultColor = '#26a69a';

const TodoScreen = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: '작업환경 설정', done: true },
    { id: 2, text: '리액트 네이티브 기초 공부', done: false },
    { id: 3, text: '투두리스트 만들어보기', done: false },
  ]);
  useEffect(() => {
    todosStorage.get().then(setTodos).catch(console.error);
  }, []);

  useEffect(() => {
    todosStorage.set(todos).catch(console.error);
  }, [todos]);
  const styles = useStyles(makeStyles({ backgroundColor: defaultColor }), []);
  const { top } = useSafeAreaInsets();

  const onInsert = useCallback((text) => {
    setTodos(
      produce((todos) => {
        const nextId = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
        const todo = {
          id: nextId,
          text,
          done: false,
        };
        todos.push(todo);
      }),
    );
  }, []);

  const onToggle = useCallback((id) => {
    setTodos(
      produce((todos) => {
        const targetTodo = todos.find((todo) => todo.id === id);
        if (targetTodo) targetTodo.done = !targetTodo.done;
      }),
    );
  }, []);

  const onRemove = useCallback((id) => {
    setTodos(
      produce((todos) => {
        const targetTodoIndex = todos.findIndex((todo) => todo.id === id);
        if (targetTodoIndex !== -1) todos.splice(targetTodoIndex, 1);
      }),
    );
  }, []);

  return (
    <>
      <View style={[styles.statusBarPlaceholder, { height: top }]} />
      <StatusBar backgroundColor={defaultColor} barStyle="light-content" />
      <Header.FormattedDate backgroundColor={defaultColor} />
      {todos.length === 0 ? (
        <List.Item.Empty image={image_young_and_happy} text="야호! 할일이 없습니다." />
      ) : (
        <List.Linear data={todos} onToggle={onToggle} onRemove={onRemove} Item={List.Item.Todo} />
      )}
      <List.Item.Add placeholder="할일을 입력하세요." onInsert={onInsert} />
    </>
  );
};

const makeStyles = (props) => ({
  statusBarPlaceholder: {
    backgroundColor: props.backgroundColor,
  },
});

export default TodoScreen;
