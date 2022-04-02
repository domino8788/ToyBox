import React from 'react';
import { View, StatusBar } from 'react-native';
import image_young_and_happy from 'assets/images/young_and_happy.png';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useStyles } from 'hooks';

import { EmptyItem, AddItem, TodoItem } from 'components/molecules/List/Item';
import { Linear } from 'components/molecules/List/Layout';
import DateHeader from 'components/organisms/DateHeader';

const defaultColor = '#26a69a';

const TodoTemplate = ({ todos, onInsert, onToggle, onDelete }) => {
  const styles = useStyles(makeStyles({ backgroundColor: defaultColor }), []);
  const { top } = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.statusBarPlaceholder, { height: top }]} />
      <StatusBar backgroundColor={defaultColor} barStyle="light-content" />
      <DateHeader backgroundColor={defaultColor} />
      {todos.length === 0 ? (
        <EmptyItem image={image_young_and_happy} text="야호! 할일이 없습니다." />
      ) : (
        <Linear data={todos} onItemPress={onToggle} onDelete={onDelete} item={TodoItem} />
      )}
      <AddItem placeholder="할일을 입력하세요." onInsert={onInsert} />
    </>
  );
};

const makeStyles = (props) => ({
  statusBarPlaceholder: {
    backgroundColor: props.backgroundColor,
  },
});

export default TodoTemplate;
