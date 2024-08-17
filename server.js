const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();

connectDB();

// initialising directories
if (!fs.existsSync("./public")) {
  fs.mkdirSync("./public");
}
if (!fs.existsSync("./public/resume")) {
  fs.mkdirSync("./public/resume");
}
if (!fs.existsSync("./public/profile")) {
  fs.mkdirSync("./public/profile");
}

const app = express();
const port = process.env.PORT || 4444;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Setting up middlewares
app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//   res.append("Access-Control-Allow-Origin", ["*"]);
//   res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.append("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

// Routing

app.use("/api/v1/resume", require("./routes/resume"));
app.use("/api/v1/mail", require("./routes/mail"));
// app.use("api/v1/download", require("./routes/downloadRoutes"));

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});

module.exports = app;
