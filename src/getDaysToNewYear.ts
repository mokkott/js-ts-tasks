/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  let date: Date;

  if (typeof targetDate === 'string') {
    const [day, month, year] = targetDate.split('.').map(Number);
    if (!day || !month || !year) {
      throw new Error("Invalid date format");
    }
    date = new Date (year, month - 1, day) ;
  } else {
    date = new Date (targetDate);
  }  
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date");
  }
  const targetNewYear = new Date(2024, 0, 1);
  const timeDiff = targetNewYear.getTime() - date.getTime();
  const diffInDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  return diffInDays; 
};
