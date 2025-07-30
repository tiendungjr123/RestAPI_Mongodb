const mongoose = require("mongoose");

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