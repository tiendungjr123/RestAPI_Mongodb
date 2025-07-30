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
  getAllBooks: (req, res) => {

  }
};

module.exports = bookController;