const http = require("http");
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const authRouter = require("./routes/auth/auth");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.status(200).send("Youhou ! ");
});

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

const server = app.listen(process.env.PORT || 5000, (err) => {
  if (err) {
    throw new Error(`Error server lauching : ${err.message}`);
  }
  console.log(`Server listening on port ${server.address().port}`);
});
