const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BudgetSchema  = new Schema({
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
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Budget = mongoose.model("Budget", BudgetSchema);

module.exports = Budget;
