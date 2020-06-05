const mongoose = require("mongoose");

const Users = new mongoose.Schema({
  _id: String,
  discord: {type: Number, default: 0},
  time: {type: Number, default: Date.now()},
});

module.exports = mongoose.model("User", Users);
