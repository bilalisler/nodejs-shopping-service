const {NotFound} = require("../errors");
module.exports = class BorrowService {
  constructor(dataAccess) {
    this.BorrowDataAccess = dataAccess;
  }

  async borrowBook({user_id, book_id}) {
    const {BorrowDataAccess} = this;

    const borrow = await BorrowDataAccess.getBorrowByUserAndBook({user_id, book_id});
    if (borrow) {
      await BorrowDataAccess.updateBorrowBook({user_id, book_id});
      return borrow;
    }

    return BorrowDataAccess.borrowBook({user_id, book_id});
  }

  async returnBook({user_id, book_id, score}) {
    const {BorrowDataAccess} = this;

    const returnBook = await BorrowDataAccess.getBorrowByUserAndBook({user_id, book_id});
    if (!returnBook) {
      throw new NotFound('User not found or has not borrowed a book');
    }

    await BorrowDataAccess.returnBook({user_id, book_id, score});
    return returnBook;
  }
};
