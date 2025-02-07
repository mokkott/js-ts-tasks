/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }

  let maxsequence = [];
  let cursequence = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] === arr[i - 1]) {
      cursequence.push(arr[i]);
    } else {
      if (cursequence.length > maxsequence.length) {
        maxsequence = cursequence;
      }
      cursequence = [arr[i]];
    }
  }

  if (cursequence.length > maxsequence.length) {
    maxsequence = cursequence;
  }

  return maxsequence;
};
