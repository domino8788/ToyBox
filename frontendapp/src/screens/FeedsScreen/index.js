import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, List } from 'components';
import Context from 'stores/Context';

const FeedsScreen = () => {
  const [store] = useContext(Context);
  return (
    <View style={styles.block}>
      <List.Linear data={store.logs} item={List.Item.Feed} />
      <Button.Floating />
    </View>
  );
};

const styles = StyleSheet.create({
  block: { flex: 1 },
});

export default FeedsScreen;
