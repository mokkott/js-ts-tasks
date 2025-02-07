/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  const uniElem = [];

  for (let i = 0; i < arr.length; i++){
    if (!uniElem.includes(arr[i])){
      uniElem.push(arr[i]);
    }
  }
  return uniElem.length;
};
