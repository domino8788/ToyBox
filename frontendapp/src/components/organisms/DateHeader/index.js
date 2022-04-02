import React from 'react';
import moment from 'moment';
import { View, Text } from 'react-native';
import { useStyles } from 'hooks';

const DateHeader = (props) => {
  const { backgroundColor, date, format } = props;
  const styles = useStyles(makeStyles(props), [backgroundColor]);
  const formattedDate = moment(date).format(format);
  return (
    <View style={styles.block}>
      <Text style={styles.dateText}>{formattedDate}</Text>
    </View>
  );
};

DateHeader.defaultProps = {
  date: new Date(),
  format: 'YYYY년 MM월 DD일',
  backgroundColor: '#26a69a',
};

const makeStyles = (props) => ({
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
