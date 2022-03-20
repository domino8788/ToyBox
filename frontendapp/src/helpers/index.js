import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

export const formatDate = (date, formatString = 'yyyy-MM-dd', option = { locale: ko }) => {
  const d = new Date(date);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;

  if (diff < 60 * 1) {
    return '방금 전';
  }
  if (diff < 60 * 60 * 24 * 3) {
    return formatDistanceToNow(d, { addSuffix: true, ...option });
  }
  return format(d, formatString, option);
};

export const truncate = (text) => {
  const replaced = text.replace(/\n/g, ' ');
  return replaced.length <= 100 ? replaced : replaced.slice(0, 100).concat('...');
};
