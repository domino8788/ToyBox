import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

const Linear = (props) => {
  const { data, onToggle, onRemove, item: Item } = props;
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      data={data}
      renderItem={({ item }) => <Item {...item} onToggle={onToggle} onRemove={onRemove} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

Linear.defaultProps = {
  data: [],
  onToggle: () => {},
  onRemove: () => {},
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

export default Linear;
