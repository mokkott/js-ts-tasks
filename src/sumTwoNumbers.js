/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  if (typeof firstNumber === 'string' && typeof secondNumber === 'string'){
    let firstNumber1 = firstNumber.replaceAll(' ', '');
    let secondNumber2 = secondNumber.replaceAll(' ', '');
    return +firstNumber1 + +secondNumber2;
  }

  return +firstNumber + +secondNumber;
};
