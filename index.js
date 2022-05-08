const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());

app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/connection");

app.get("/", (req, resp) => {
    resp.send("Books Service is Working");
});
 
app.listen(port, () => {
//   perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error("err");
 
  });
  console.log(`Server is running on port: ${port}`);
});

// const express = require("express");
// const mongoose = require("mongoose");
// const BooksFav = require('./models');
// const app = express();
// const cors = require("cors");
// app.use(cors());

// app.use(express.json());

// const Router = require("./aroutes")

// app.use(Router);

// mongoose.connect("mongodb+srv://anggipras30:Godislove30~@cluster0.b5eev.mongodb.net/booksapp?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }
// ).then((result) => console.log("connected to mongo db")).catch((err) => console.log(err))

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });

// app.get("/", (req, resp) => {
//     resp.send("Books Service is Working");
// });

// app.listen(5000, () => {
//   console.log("Server is running at port 5000");
// });