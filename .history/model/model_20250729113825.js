const mongoose = require("mongoose");


const authorSchema = new mongoose.Schema({
  name: {
    type: String
  },
  year: {
    type: Number
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book"
    }
  ]
})
const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  publishedDate: {
    type: String
  },
  genres: {
    type: String
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author"
  }
})

const Book = mongoose.model("Book", bookSchema);

module.exports = { Book };