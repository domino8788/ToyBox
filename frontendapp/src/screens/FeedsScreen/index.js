import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, List } from 'components';
import Context from 'stores/Context';

const FeedsScreen = () => {
  const [store] = useContext(Context);
  const [hidden, setHidden] = useState(false);
  const onScrolledToBottom = (isBottom) => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };
  return (
    <View style={styles.block}>
      <List.Linear data={store.logs} item={List.Item.Feed} onScrolledToBottom={onScrolledToBottom} />
      <Button.Floating hidden={hidden} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: { flex: 1 },
});

export default FeedsScreen;
