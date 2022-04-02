import React, { useMemo, useCallback } from 'react';
import { Calendar } from 'react-native-calendars';
import { StyleSheet } from 'react-native';

const CalendarView = ({ markedDates, selectedDate, onSelectDate }) => {
  const markedSelectedDate = useMemo(
    () => ({
      ...markedDates,
      [selectedDate]: {
        selected: true,
        marked: markedDates[selectedDate]?.marked,
      },
    }),
    [markedDates, selectedDate],
  );
  const onDayPress = useCallback(
    (day) => {
      onSelectDate(day.dateString);
    },
    [onSelectDate],
  );

  return <Calendar style={styles.calendar} markedDates={markedSelectedDate} onDayPress={onDayPress} theme={theme} />;
};

CalendarView.defaultProps = {
  markedDates: {},
  selectedDate: '',
  onSelectDate: () => {},
};

const theme = {
  selectedDayBackgroundColor: '#009688',
  arrowColor: '#009688',
  dotColor: '#009688',
  todayTextColor: '#009688',
};

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

export default CalendarView;
