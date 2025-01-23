/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  let maxCommonSubstring = '';
  for (let len = str1.length; len > 0; len--){
    for (let i = 0; i <= str1.length - len; i++){
      const substring = str1.slice(i, i + len);

      if (str2.includes(substring)){
        return substring;
      }
    }
  }
  return maxCommonSubstring;
};
