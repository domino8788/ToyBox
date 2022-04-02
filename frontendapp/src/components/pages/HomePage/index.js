import React from 'react';
import { View, StatusBar, Button } from 'react-native';
import { useStyles } from 'hooks';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const defaultColor = '#26a69a';

const HomePage = (props) => {
  const styles = useStyles(makeStyles({ backgroundColor: defaultColor }), []);
  const { top } = useSafeAreaInsets();
  const { navigation } = props;
  return (
    <>
      <View style={[styles.statusBarPlaceholder, { height: top }]} />
      <StatusBar backgroundColor={defaultColor} barStyle="light-content" />
      <Button title="Todo 열기" onPress={() => navigation.navigate('Todo')} />
      <Button title="Day Log 열기" onPress={() => navigation.navigate('DayLog')} />
      <Button title="Public Gallery 열기" onPress={() => navigation.navigate('PublicGallery')} />
    </>
  );
};

const makeStyles = (props) => ({
  statusBarPlaceholder: {
    backgroundColor: props.backgroundColor,
  },
});

export default HomePage;
