const Book = require("../models/book");
module.exports = class BookDataAccess {
  constructor() {
  }

  async getBook(id) {
    return Book.query().findById(id);
  }

  async getBooks() {
    return Book.query();
  }

  async createBook(bookData) {
    return Book.query().insert(bookData);
  }
};
