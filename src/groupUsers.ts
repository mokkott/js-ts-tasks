/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */
module.exports.groupUsers = function (users: Array<unknown>): Record<'employees' | 'contractors', Array<unknown>> {
  return users.reduce<Record<'employees' | 'contractors', Array<unknown>>>(
    (result, user) => {
      if((user as any)?.type === 'EMPLOYEE') {
        result.employees.push(user);
      } else if ((user as any)?.type === 'CONTRACTOR') {
        result.contractors.push(user);
      }
      return result;
    },
    {employees: [], contractors: []}
  );
};
