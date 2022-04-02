import React, { useState, useContext, useMemo, useCallback } from 'react';
import Context from 'stores/Context';
import { formatDate } from 'helpers';
import { useNavigation } from '@react-navigation/native';

import CalendarView from 'components/molecules/CalendarView';
import FeedList from 'components/organisms/FeedList';

const CalendarTemplate = () => {
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
    <FeedList
      data={filteredLogs}
      header={<CalendarView markedDates={markedDates} selectedDate={selectedDate} onSelectDate={setSelectedDate} />}
      onItemPress={onItemPress}
    />
  );
};

export default CalendarTemplate;
