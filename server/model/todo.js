const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toDoListSchema = new Schema({
  title: String,
  completed: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

const toDoList = mongoose.model("toDoList", toDoListSchema);

module.exports = toDoList;
