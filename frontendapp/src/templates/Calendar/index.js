import React, { useState, useContext, useMemo } from 'react';
import { CustomView, List } from 'components';
import Context from 'stores/Context';
import { formatDate } from 'helpers';

const Calendar = () => {
  const [{ logs }] = useContext(Context);
  const [selectedDate, setSelectedDate] = useState(formatDate(new Date(), 'yyyy-MM-dd'));
  const markedDates = useMemo(
    () =>
      logs.reduce((acc, current) => {
        const formattedDate = formatDate(new Date(current.date), 'yyyy-MM-dd');
        acc[formattedDate] = { marked: true };
        return acc;
      }, {}),
    [logs],
  );
  const filteredLogs = useMemo(() => logs.filter((log) => formatDate(new Date(log.date), 'yyyy-MM-dd') === selectedDate), [logs, selectedDate]);

  return (
    <List.Linear
      data={filteredLogs}
      item={List.Item.Feed}
      header={<CustomView.Calendar markedDates={markedDates} selectedDate={selectedDate} onSelectDate={setSelectedDate} />}
    />
  );
};

export default Calendar;
