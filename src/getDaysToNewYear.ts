/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  let date: Date;

  if(typeof targetDate === 'string') {
    date = new Date(targetDate.split('.').reverse().join('-'));
  } else {
    date = targetDate;
  }

  if(!(date instanceof Date) || isNaN(date.getTime())){
    throw new Error;
  }

  let nextNewYear = new Date(date.getFullYear() + 1, 0, 1);
  if(date.getMonth() === 0 && date.getDate() === 1) {
    nextNewYear = new Date(date.getFullYear() + 2, 0, 1);
  } 
  if(date > nextNewYear) {
    nextNewYear = new Date(date.getFullYear() + 1, 0, 1);
  }
  const diffInMs = nextNewYear.getTime() - date.getTime();
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  return diffInDays;
};
