import mongoose from "mongoose";

const toDoListSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

export default mongoose.model("Task", toDoListSchema);
