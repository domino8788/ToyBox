import React, { useContext, useCallback, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { List } from 'components';
import Context from 'stores/Context';

const Search = ({ navigation }) => {
  const [{ keyword, logs }] = useContext(Context);
  const filtered = useMemo(
    () => (keyword === '' ? [] : logs.filter((log) => [log.title, log.body].some((text) => text.includes(keyword)))),
    [keyword, logs],
  );
  const onItemPress = useCallback(
    (log) => {
      navigation.navigate('Write', { log });
    },
    [navigation],
  );
  return (
    <View style={styles.block}>
      <List.Linear data={filtered} item={List.Item.Feed} onPress={onItemPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: { flex: 1 },
});

export default Search;
