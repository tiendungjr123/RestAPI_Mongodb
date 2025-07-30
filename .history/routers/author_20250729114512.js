const router = require("express").Router();

//add author
router.post("/", authorController.addAuthor)