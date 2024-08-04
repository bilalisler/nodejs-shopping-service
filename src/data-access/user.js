const User = require("../models/user");
module.exports = class UserDataAccess {
  constructor() {
  }

  async getUser(id) {
    return User.query().findById(id).withGraphFetched('borrows');
  }

  async getUsers() {
    return User.query().withGraphFetched('borrows');
  }

  async createUser(bookData) {
    return User.query().insert(bookData);
  }
};
