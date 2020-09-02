const mongoose = require('mongoose');

const RecsSchema = new mongoose.Schema({
  uid: String,
  date: {
    type: Date,
    default: Date.now
  },
  points: {
    type:Number,
    required:true
  },
  message: String
});

module.exports = mongoose.model('Rec', RecsSchema);
