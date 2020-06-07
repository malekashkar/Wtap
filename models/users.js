const mongoose = require("mongoose");

const Verified = new mongoose.Schema({
  _id: String,
  minecraft: String,
  discord: String
});

module.exports = mongoose.model("Verified", Verified);
