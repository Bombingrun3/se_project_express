const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");

const app = express();

const { PORT = 3001 } = process.env;

app.use(express.json());

app.use("/", mainRouter);

mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db");

app.listen(PORT, () => {
  console.log(`Hello, from Port: ${PORT}`);
});

module.exports = app;
