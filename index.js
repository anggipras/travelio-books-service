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

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = process.env.ATLAS_URI;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("booksapp").collection("favbooks");
//   // perform actions on the collection object
  
//   app.get("/fav/list", (request, response) => {
//     collection.find({}).toArray(function (err, result) {
//       if (err) throw err;
//       response.json(result);
//     });
//   })
// });

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