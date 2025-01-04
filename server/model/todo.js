const Schema = mongoose.Schema;

const toDoSchema = new Schema({
  title: String,
  completed: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

const toDoList = mongoose.model("toDoList", toDoSchema);
