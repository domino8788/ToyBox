import React, { useState, useCallback, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Context from 'stores/Context';
import { useNavigation } from '@react-navigation/native';

import FloatingButton from 'components/molecules/FloatingButton';
import FeedList from 'components/organisms/FeedList';

const FeedTemplate = () => {
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
      <FeedList data={store.logs} onScrolledToBottom={onScrolledToBottom} onItemPress={onItemPress} />
      <FloatingButton hidden={hidden} onPress={onFloatingButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: { flex: 1 },
});

export default FeedTemplate;
