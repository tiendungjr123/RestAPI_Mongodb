const router = require("express").Router();
const authorController = require("../controllers/authorController")
//add author
router.post("/", authorController.addAuthor);
router.get("/", authorController.getAllAuthors);

module.exports = router;