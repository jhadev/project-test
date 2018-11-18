const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Budget  = new Schema({
  description: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  income: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Budget', Budget);

