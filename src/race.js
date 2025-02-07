/**
 * Write a function that will work similar to standard Promise.race
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.race = function race(promisesArray) {
  return new Promise((resolve, reject) => {
    for(let i = 0; i < promisesArray.length; i++){
      const promise = promisesArray[i];
      promise.then(resolve).catch(reject);
    }
  })
};
