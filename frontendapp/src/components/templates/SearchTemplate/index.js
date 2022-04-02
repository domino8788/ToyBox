import React, { useContext, useCallback, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import Context from 'stores/Context';

import FeedList from 'components/organisms/FeedList';
import { EmptyItem } from 'components/molecules/List/Item';

const SearchTemplate = ({ navigation }) => {
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
  if (keyword === '') {
    return <EmptyItem size="small" text="검색어를 입력하세요." />;
  }
  if (filtered.length === 0) {
    return <EmptyItem size="small" text="검색 결과가 없습니다." />;
  }

  return (
    <View style={styles.block}>
      <FeedList data={filtered} onItemPress={onItemPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: { flex: 1 },
});

export default SearchTemplate;
