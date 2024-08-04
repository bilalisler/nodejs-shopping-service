const express = require('express');
const router = express.Router();

const {
  borrowBook, returnBook,
} = require('@/src/validations/borrow');
const validate = require("../../middlewares/validate");

const Controller = require("../controllers/borrow");
const DataAccess = require("../../data-access/borrow");
const Service = require("../../services/borrow");

// Inject Dependencies
const BorrowDataAccess = new DataAccess();
const BorrowService = new Service(BorrowDataAccess);
const BorrowController = new Controller(BorrowService);

router.post('/users/:user_id/borrow/:book_id', validate(borrowBook), async (req, res, next) => BorrowController.borrowBook(req, res).catch(next));
router.post('/users/:user_id/return/:book_id', validate(returnBook), async (req, res, next) => BorrowController.returnBook(req, res).catch(next));

module.exports = router;
