const {NotFound} = require("../errors");
module.exports = class UserService {
  constructor(dataAccess) {
    this.UserDataAccess = dataAccess;
  }

  async getUser(id) {
    const {UserDataAccess} = this;

    const user = await UserDataAccess.getUser(id);
    if (!user) {
      throw new NotFound('User not found')
    }

    return user
  }

  async getUsers() {
    const {UserDataAccess} = this;

    return UserDataAccess.getUsers();
  }

  async createUser(userData) {
    const {UserDataAccess} = this;

    return UserDataAccess.createUser(userData);
  }
};
