const { MongoClient } = require("mongodb");
const Db = "mongodb+srv://anggipras:godisgood@bookscluster.xqks8.mongodb.net/booksapp?retryWrites=true&w=majorit";
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (db)
      {
        _db = db.db("booksapp");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
    });
  },
 
  getDb: function () {
    return _db;
  },
};