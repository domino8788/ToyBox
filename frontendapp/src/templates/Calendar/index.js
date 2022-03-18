import React, { useContext } from 'react';
import { CustomView } from 'components';
import Context from 'stores/Context';
import { formatDate } from 'helpers';

const Calendar = () => {
  const [{ logs }] = useContext(Context);
  const markedDates = logs.reduce((acc, current) => {
    const formattedDate = formatDate(new Date(current.date), 'yyyy-MM-dd');
    acc[formattedDate] = { marked: true };
    return acc;
  }, {});
  console.log(markedDates);

  return <CustomView.Calendar markedDates={markedDates} />;
};

export default Calendar;
