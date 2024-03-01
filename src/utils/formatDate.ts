import dayjs from 'dayjs';

const formatDate = (date: string | undefined): string => {
  if (date) {
    return dayjs(date).format('HH:mm:ss, D MMMM YYYY');
  }

  return '-';
};

export default formatDate;
