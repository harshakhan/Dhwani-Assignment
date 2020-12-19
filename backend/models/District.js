const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const districtSchema = new Schema({
  _id: {
    type: Number,
    required: true
  },
  state_id: {
    type: Number,
    required: true
  },
  district_name: {
    type: String,
    required: true,
    max: 400,
    min: 5,
    
  }
}
);

module.exports = mongoose.model('District', districtSchema)