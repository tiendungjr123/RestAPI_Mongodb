const bookController = require("../controllers/bookControllers");

const router = require("express").Router();

//add a book
router.post("/", bookController)