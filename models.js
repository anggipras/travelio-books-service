const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksFavSchema = new Schema({
    custName: {
      type: String,
      required: true,
    },
    custEmail: {
      type: String,
      required: true,
    },
  });
  
const BooksFav = mongoose.model("favbooks", booksFavSchema);
module.exports = BooksFav;