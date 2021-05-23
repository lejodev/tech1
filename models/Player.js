const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const Player = mongoose.Schema({
  name: String,
  position: String,
  nation: String,
  club: String,
});

Player.plugin(mongoosePaginate);

module.exports = mongoose.model("Player", Player);
