/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  return function numbers(frNum, endNum){
    let finalArr = [];
    for (let i = frNum; i <= endNum; i++) {
      let m = 0;
      for (let k = 2; k <= Math.sqrt(i); k++) {
        if (i % k === 0){
          m = 1;
          break;
        }
      }
      if (m === 0){
        finalArr.push(i);
      }
    }
    return finalArr;
  }
};
