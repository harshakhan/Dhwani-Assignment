const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stateSchema = new Schema({
  _id: {
    type: Number,
    required: true
  },
  state_name: {
    type: String,
    required: true,
    max: 200,
    min: 5,
    
  }
}
);

module.exports = mongoose.model('State', stateSchema)