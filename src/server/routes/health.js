const express = require('express');
const router = express.Router();
const Controller = require("../controllers/health");

const BookController = new Controller();

router.get('/health', async (req, res, next) => BookController.getHealth(req, res).catch(next));

module.exports = router;
