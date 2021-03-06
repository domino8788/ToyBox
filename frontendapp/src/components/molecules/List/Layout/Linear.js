import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

const Linear = ({ data, onDelete, onItemPress, item: Item, onScrolledToBottom, header: Header }) => {
  const onScroll = (e) => {
    if (onScrolledToBottom) {
      const { contentSize, layoutMeasurement, contentOffset } = e.nativeEvent;
      const distanceFromBottom = contentSize.height - layoutMeasurement.height - contentOffset.y;

      if (contentSize.height > layoutMeasurement.height && distanceFromBottom < 72) {
        onScrolledToBottom(true);
      } else {
        onScrolledToBottom(false);
      }
    }
  };
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      data={data}
      renderItem={({ item }) => <Item data={item} onDelete={onDelete} onPress={onItemPress} />}
      keyExtractor={(item) => item.id.toString()}
      onScroll={onScroll}
      ListHeaderComponent={Header}
    />
  );
};

Linear.defaultProps = {
  data: [],
  onDelete: () => {},
  onItemPress: () => {},
  onScrolledToBottom: null,
  header: null,
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
