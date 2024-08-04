module.exports = class UserController {
  constructor(userService) {
    this.UserService = userService;
  }

  async getUser(req, res) {
    const {UserService} = this;
    const {id} = req.params;
    const user = await UserService.getUser(id);
    res.json(user);
  }

  async getUsers(req, res) {
    const {UserService} = this;
    const users = await UserService.getUsers();
    res.json(users);
  }

  async createUser(req, res) {
    const {UserService} = this;
    const user = await UserService.createUser(
      req.body
    );
    res.status(201).json(user);
  }
};

