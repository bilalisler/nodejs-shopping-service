const express = require('express');
const router = express.Router();

const {
  createUser,
  fetchUser,
} = require('@/src/validations/user');
const validate = require("../../middlewares/validate");

const Controller = require("../controllers/user");
const DataAccess = require("../../data-access/user");
const Service = require("../../services/user");

// Inject Dependencies
const UserDataAccess = new DataAccess();
const UserService = new Service(UserDataAccess);
const UserController = new Controller(UserService);

router.get('/', async (req, res, next) => UserController.getUsers(req, res).catch(next));
router.get('/:id', validate(fetchUser), async (req, res, next) => UserController.getUser(req, res).catch(next));
router.post('/', validate(createUser), async (req, res, next) => UserController.createUser(req, res).catch(next));

module.exports = router;
