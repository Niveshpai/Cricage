const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: { type: String, required: true },
  innings: { type: Number, required: true },
  runs: {type: Number, required: true},
  highest: {type: Number, required: true},
  avg: {type: Number, required: true},
  link:{type:String},
});

const Player = mongoose.model('players', playerSchema);

module.exports = Player;