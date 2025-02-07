/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  let i = 0;
  let finalArr = [];
  while (i < arr.length) {
    if (arr[i] === value) {
      i++;
      continue;
    }

    if (Array.isArray(arr[i]) && Array.isArray(value)) {
      if (arr[i].length === value.length && arr[i].every((v, index) => v === value[index])) {
        i++;
        continue;
      }
    }
    if (typeof arr[i] === 'object' && typeof value === 'object') {
      if (JSON.stringify(arr[i]) === JSON.stringify(value)) {
        i++;
        continue;
      }
    }

    finalArr.push(arr[i]);
    i++;
  }
  return finalArr;
};
