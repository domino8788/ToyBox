import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from 'components/Button';

const Write = ({ onSave }) => {
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.pop();
  };
  return (
    <View style={styles.block}>
      <View style={styles.iconButtonWrapper}>
        <Button.Transparent onPress={onGoBack} name="arrow-back" color="#424242" type="circle" />
      </View>
      <View style={styles.buttons}>
        <Button.Transparent name="delete-forever" color="#ef5350" hasMarginRight type="circle" />
        <Button.Transparent name="check" color="#009688" type="circle" onPress={onSave} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: 8,
  },
});

export default Write;
