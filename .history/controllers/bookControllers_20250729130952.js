const { Book, Author } = require("../model/model");

const bookController = {
  addABook: async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const saveBook = await newBook.save();
      if (req.body.author) {
        const author = Author.findById(req.body.author);
        await author.updateOne({ $push: { books: saveBook._id } });
      }
      res.status(200).json(saveBook);
    }
    catch (err) {
      res.status(500).json(err);
    }
  },
  //get all books
  getAllBooks: async (req, res) => {
    try {
      const allBooks = await Book.find();
      res.status(200).json(allBooks);
    } catch (err) {
      res.status(500).json(500)
    }
  },
  //get a book
  getABook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id).populate("author");
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json(500)
    }
  },
  updateBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      await book.updateOne({ $set: req.body });
      res.status(200).json("Update successfuly");
    } catch (err) {
      res.status(500).json(500)
    }
  },
  deleteBook: async (req, res) => {
    try {
      await Author.updateMany({ books: req.params.id }, { $pull: { books: req.params.id } })
      await Book.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfuly");
    } catch (err) {
      res.status(500).json(500)
    }
  },
};

module.exports = bookController;