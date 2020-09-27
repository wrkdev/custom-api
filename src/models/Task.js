const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  summary: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdBy: {
    type: String,
    required: true
  },
  updatedBy: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Task", taskSchema);