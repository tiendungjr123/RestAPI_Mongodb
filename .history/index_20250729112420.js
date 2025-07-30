const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
mongoose.connect("mongodb+srv://tiendungjr123:123456Aa%40@author.nfcboeb.mongodb.net/?retryWrites=true&w=majority&appName=author", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  });
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));


app.listen(8000, () => {
  console.log("server is running...")
})