import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import Item from './Item';
import Empty from './Empty';
import AddItem from './AddItem';

const Linear = (props) => {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      data={props.data}
      renderItem={({ item }) => <Item id={item.id} text={item.text} done={item.done} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});

export default { Linear, Empty, Item, AddItem };
