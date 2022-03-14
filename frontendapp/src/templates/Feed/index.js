import React, { useState, useCallback, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, List } from 'components';
import Context from 'stores/Context';
import { useNavigation } from '@react-navigation/native';

const Feed = () => {
  const [store] = useContext(Context);
  const [hidden, setHidden] = useState(false);
  const navigation = useNavigation();
  const onScrolledToBottom = (isBottom) => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };
  const onItemPress = useCallback(
    (log) => {
      navigation.navigate('Write', { log });
    },
    [navigation],
  );

  const onFloatingButtonPress = useCallback(() => {
    navigation.navigate('Write');
  }, [navigation]);

  return (
    <View style={styles.block}>
      <List.Linear data={store.logs} item={List.Item.Feed} onScrolledToBottom={onScrolledToBottom} onPress={onItemPress} />
      <Button.Floating hidden={hidden} onPress={onFloatingButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: { flex: 1 },
});

export default Feed;
