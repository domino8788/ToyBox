import React, { useContext, useCallback } from 'react';
import { Pressable, StyleSheet, TextInput, useWindowDimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Context, { SEARCH_KEYWORD } from 'stores/Context';

const Search = ({ placeholder, placeholderTextColor }) => {
  const { width } = useWindowDimensions();
  const [{ keyword }, dispatch] = useContext(Context);
  const onChangeText = useCallback(
    (newKeyword) => {
      dispatch(SEARCH_KEYWORD, { keyword: newKeyword });
    },
    [dispatch],
  );

  return (
    <View style={[styles.block, { width: width - 32 }]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={keyword}
        onChangeText={onChangeText}
        autoFocus
      />
      <Pressable style={({ pressed }) => [styles.button, pressed && { opacity: 0.5 }]}>
        <Icon name="cancel" size={20} color="#9e9e9e" />
      </Pressable>
    </View>
  );
};

Search.defaultProps = {
  placeholder: '검색어를 입력하세요',
  placeholderTextColor: 'darkgray',
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: '#263238',
  },
  button: {
    marginLeft: 8,
  },
});

export default Search;
