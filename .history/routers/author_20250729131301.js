const router = require("express").Router();
const authorController = require("../controllers/authorController")
//add author
router.post("/", authorController.addAuthor);
router.get("/", authorController.getAllAuthors);
router.get("/:id", authorController.getAnAuthors);
router.put("/:id", authorController.updateAuthor);
router.delete("/:id", authorController.deleteAuthor);

module.exports = router;