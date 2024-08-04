const express = require('express');
const router = express.Router();

const {
  createBook, fetchBook
} = require('@/src/validations/book');
const validate = require("../../middlewares/validate");

const Controller = require("../controllers/book");
const DataAccess = require("../../data-access/book");
const Service = require("../../services/book");

// Inject Dependencies
const BookDataAccess = new DataAccess();
const BookService = new Service(BookDataAccess);
const BookController = new Controller(BookService);

router.get('/', async (req, res, next) => BookController.getBooks(req, res).catch(next));
router.get('/:id', validate(fetchBook), async (req, res, next) => BookController.getBook(req, res).catch(next));
router.post('/', validate(createBook), async (req, res, next) => BookController.createBook(req, res).catch(next));

module.exports = router;
