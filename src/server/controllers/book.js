module.exports = class BookController {
  constructor(bookService) {
    this.BookService = bookService;
  }

  async getBook(req, res) {
    const {BookService} = this;
    const {id} = req.params;
    const book = await BookService.getBook(id);
    res.json(book);
  }

  async getBooks(req, res) {
    const {BookService} = this;
    const books = await BookService.getBooks();
    res.json(books);
  }

  async createBook(req, res) {
    const {BookService} = this;
    const book = await BookService.createBook(
      req.body
    );
    res.status(201).json(book);
  }
};

