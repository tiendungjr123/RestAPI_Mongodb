const bookController = require("../controllers/bookControllers");

const router = require("express").Router();

//add a book
router.post("/", bookController.addABook);
router.get("/", bookController.getAllBooks);
router.get("/", bookController.getABook);

module.exports = router;