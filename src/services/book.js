const {NotFound} = require("../errors");
module.exports = class BookService {
  constructor(dataAccess) {
    this.BookDataAccess = dataAccess;
  }

  async getBook(id) {
    const {BookDataAccess} = this;

    const book = await BookDataAccess.getBook(id);
    if(!book){
      throw new NotFound('Book does not exist');
    }

    return book;
  }

  async getBooks() {
    const {BookDataAccess} = this;

    return BookDataAccess.getBooks();
  }

  async createBook(bookData) {
    const {BookDataAccess} = this;

    return BookDataAccess.createBook(bookData);
  }
};
