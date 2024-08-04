module.exports = class BorrowController {
  constructor(borrowService) {
    this.BorrowService = borrowService;
  }

  async borrowBook(req, res) {
    const {BorrowService} = this;
    const record = await BorrowService.borrowBook(
      req.params
    );
    res.status(201).json(record);
  }

  async returnBook(req, res) {
    const {BorrowService} = this;
    const {user_id, book_id} = req.params;
    const {score} = req.body;
    const record = await BorrowService.returnBook({user_id, book_id, score});
    res.json(record);
  }
};

