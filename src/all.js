/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
 return new Promise((resolve, reject) => {
  if(promisesArray.length === 0){
    return resolve([]);
  }
  let result = new Array(promisesArray.length);
  let count = 0;
  let rejected = false;

  promisesArray.forEach((promise, index) => {
    Promise.resolve(promise)
    .then(value => {
      result[index] = value;
      count += 1;
      if (count === promisesArray.length){
        resolve(result);
      }
    })
    .catch(error => {
      if (!rejected) {
        rejected = true;
        reject(error);
      }
    });
  });
 });
};
