const express = require("express");
const { mongoose } = require("mongoose");

const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/connection");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you create a new record.
recordRoutes.route("/fav/record").post(function (req, response) {
  let db_connect = dbo.getDb();

  let myquery = { title: req.body.title };
  db_connect.collection("favbooks").findOne(myquery, function (err, result) {
    if (err) throw err;
    if (result == null) {
      let myobj = req.body
      myobj.ammountFav = 1
      
      db_connect.collection("favbooks").insertOne(myobj, function (err, res) {
        if (err) throw console.log(err);
        response.json(res);
      });
    } else {
      let newresult = result
      newresult.ammountFav += 1
      let myquery = { title: result.title };  
      let newvalues = {    
          $set: newresult
      }

      db_connect.collection("favbooks").updateOne(myquery, newvalues, function(err, newres) {
        if (err) throw console.log(err);
        response.json(newres);
      });
    }
  });

});

recordRoutes.route("/fav/list").get(function (request, response) {
  let db_connect = dbo.getDb();
  db_connect.collection("favbooks")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      response.json(result);
    });
});

module.exports = recordRoutes;