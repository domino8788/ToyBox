import React from 'react';
import moment from 'moment';
import { View, Text, StyleSheet } from 'react-native';

function DateHeader(props) {
  const styles = makeStyles(props);
  const formattedDate = moment(props.date).format('YYYY년 MM월 DD일');
  return (
    <View style={styles.block}>
      <Text style={styles.dateText}>{formattedDate}</Text>
    </View>
  );
}

DateHeader.defaultProps = {
  date: new Date(),
  backgroundColor: '#26a69a',
};

const makeStyles = (props) =>
  StyleSheet.create({
    block: {
      padding: 16,
      backgroundColor: props.backgroundColor,
    },
    dateText: {
      fontSize: 24,
      color: 'white',
    },
  });

export default DateHeader;
