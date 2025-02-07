class User {
  #firstName;
  #secondName;
  #age;

  constructor(firstName, secondName, age){
    if(!firstName || !secondName || typeof age !== 'number'){
      throw new Error();
    }
    this.#firstName = firstName;
    this.#secondName = secondName;
    this.#age = age;
  }
  get age() {
    return this.#age;
  }
  set age(value) {
    this.#age = value;
  }
  set firstName(value) {
    this.#firstName = value;
  }
  set secondName(value) {
    this.#secondName = value;
  }
  get name() {
    return `${this.#firstName} ${this.#secondName}`;
  }
  introduce() {
    return `My name is ${this.name}, I'm ${this.#age}`;
  }
  celebrateBirthday(){
    this.#age += 1;
  }
}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
  return new User(firstName, secondName, age);
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
  const users = [];
  for (let i = 0; i < data.length; i++){
    const firstName = data[i].firstName;
    const secondName = data[i].secondName;
    const age = data[i].age;
    users.push(new User(firstName, secondName, age));
  }
  return users;
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<Users>} users
 * @param {number} age
 * @returns {Array<Users>}
 */
module.exports.findUsersByAge = function (users, age) {
  result = [];
  for (let i = 0; i < users.length; i++){
    if(users[i].age === age){
      result.push(users[i]);
    }
  }
  return result;
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  function sort(users) {
    for(let i = 0; i < users.length - 1; i++){
      for(let j = 0; j < users.length - i - 1; j++){
        if(users[j + i].age - users[j].age > 0){
          const temp = users[j];
          users[j] = users[j + 1];
          users[j + i] = temp;
        }
      }
    }
    return users;
  }
  return sort;
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  for(let i = 0; i < users.length; i++) {
    if(i % 2 === 1){
      users[i].celebrateBirthday();
    }
  }
  return users;
};
