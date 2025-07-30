const { Author, Book } = require("../model/model");

const authorController = {
  addAuthor: async (req, res) => {
    try { } catch (err) {
      res.status(500).json(err)
    }
  },
}

module.exports = authorController;