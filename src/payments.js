/**
 * Write a function that returns a function
 * calculating how much money will a person have after all income/debts calculation
 *
 * income is an Object that may look like:
 * {
 *   salary: 100, // person's salary
 *   investment: 200, // person's income he gets from investment activities
 * }
 *
 * debts is an Object that may look like:
 * {
 *   rent: 50, // how much a person should pay for renting a flat/house/etc
 *   food: 25, // how much a person will spend on food
 * }
 *
 * At the end after calculation all person's money we will have: 100 + 200 - 50 - 25 = 225, that's a final answer
 *
 * Note: You MUST use a function sumAllObjectProperties from TestUtils object that will calculate all object numeric properties
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ sumAllObjectProperties: function() }} TestUtils
 * @returns {function}
 */
module.exports.payments = function payments(TestUtils) {
  return function (income, debts) {
    const incomeFiltered = {};
    for (let key in income) {
      if (typeof income[key] === 'number') {
        incomeFiltered[key] = income[key];
      }
    }
    const debtsFiltered = {};
    for (let key in debts) {
      if (typeof debts[key] === 'number') {
        debtsFiltered[key] = debts[key];
      }
    }
    const totalIncome = TestUtils.sumAllObjectProperties.call(incomeFiltered);
    const totalDebts = TestUtils.sumAllObjectProperties.call(debtsFiltered);
    return totalIncome - totalDebts;
  };
};
