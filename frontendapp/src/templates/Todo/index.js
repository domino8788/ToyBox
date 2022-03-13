import React from 'react';
import { View, StatusBar } from 'react-native';
import { Header, List } from 'components';
import image_young_and_happy from 'assets/images/young_and_happy.png';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useStyles } from 'hooks';

const defaultColor = '#26a69a';

const Todo = ({ todos, onInsert, onToggle, onDelete }) => {
  const styles = useStyles(makeStyles({ backgroundColor: defaultColor }), []);
  const { top } = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.statusBarPlaceholder, { height: top }]} />
      <StatusBar backgroundColor={defaultColor} barStyle="light-content" />
      <Header.FormattedDate backgroundColor={defaultColor} />
      {todos.length === 0 ? (
        <List.Item.Empty image={image_young_and_happy} text="야호! 할일이 없습니다." />
      ) : (
        <List.Linear data={todos} onToggle={onToggle} onDelete={onDelete} item={List.Item.Todo} />
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

export default Todo;
