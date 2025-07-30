const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const authorRouter = require("./routers/author")
dotenv.config();
mongoose.connect((process.env.MOGODB_URL), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  });
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

//router
app.use("/v1/author", authorRouter)
app.listen(8000, () => {
  console.log("server is running...")
})