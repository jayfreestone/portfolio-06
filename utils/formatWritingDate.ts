const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

function formatWritingDate(dateStr: string) {
  const dateElem = new Date(dateStr);
  return `${monthNames[dateElem.getMonth()]} ${dateElem.getDate()}, ${dateElem.getFullYear()}`;
}

export default formatWritingDate;
