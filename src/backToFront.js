/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  if (symbolsCount > str.length || symbolsCount === 0){
    return str;
  } else {
    let symbol = str.slice(str.length - symbolsCount);
    return symbol + str + symbol;
  }
};
