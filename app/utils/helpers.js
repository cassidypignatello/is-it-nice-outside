const dayMap = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
}

const monthMap = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
}

export function getDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const day = dayMap[date.getDay()];
  const month = `${monthMap[date.getMonth()]} ${date.getDate()}`;
  const fullDate = `${day}, ${month}`;
  return fullDate;
}
