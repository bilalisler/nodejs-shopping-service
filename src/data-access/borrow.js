const Borrow = require("../models/borrow");
module.exports = class BorrowDataAccess {
  constructor() {
  }

  async getBorrowByUserAndBook({user_id, book_id}) {
    return Borrow
      .query()
      .findOne({
        user_id,
        book_id
      });
  }

  async updateBorrowBook({user_id, book_id}) {
    return Borrow
      .query()
      .findOne({
        user_id,
        book_id,
      })
      .patch({
        borrow_date: new Date(),
      })
  }

  async borrowBook({user_id, book_id}) {
    return Borrow
      .query()
      .insert({
        user_id,
        book_id,
        borrow_date: new Date(),
      });
  }

  async returnBook({user_id, book_id, score}) {
    return Borrow
      .query()
      .findOne({
        user_id,
        book_id
      })
      .update({
        return_date: new Date(),
        score
      });
  }
};
