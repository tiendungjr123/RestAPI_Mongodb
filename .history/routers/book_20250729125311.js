const bookController = require("../controllers/bookControllers");

const router = require("express").Router();

//add a book
router.post("/", bookController.addABook);
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getABook);
//update a book
router.put("/:id", bookController.updateBook)
module.exports = router;