import React, { useState, useContext, useMemo, useCallback } from 'react';
import { CustomView, List } from 'components';
import Context from 'stores/Context';
import { formatDate } from 'helpers';
import { useNavigation } from '@react-navigation/native';

const Calendar = () => {
  const [{ logs }] = useContext(Context);
  const [selectedDate, setSelectedDate] = useState(formatDate(new Date(), 'yyyy-MM-dd'));
  const navigation = useNavigation();
  const markedDates = useMemo(
    () =>
      logs.reduce((acc, current) => {
        const formattedDate = formatDate(new Date(current.date), 'yyyy-MM-dd');
        acc[formattedDate] = { marked: true };
        return acc;
      }, {}),
    [logs],
  );
  const onItemPress = useCallback(
    (log) => {
      navigation.navigate('Write', { log });
    },
    [navigation],
  );
  const filteredLogs = useMemo(() => logs.filter((log) => formatDate(new Date(log.date), 'yyyy-MM-dd') === selectedDate), [logs, selectedDate]);

  return (
    <List.Linear
      data={filteredLogs}
      item={List.Item.Feed}
      header={<CustomView.Calendar markedDates={markedDates} selectedDate={selectedDate} onSelectDate={setSelectedDate} />}
      onPress={onItemPress}
    />
  );
};

export default Calendar;
