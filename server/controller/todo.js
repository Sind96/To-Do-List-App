const toDoList = require("../model/todo");

exports.postTasks = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).send("Title is required");
    const newTask = new toDoList({
      title,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    await newTask.save();
    res.status(201).send(newTask);
  } catch (error) {
    console.log(`There has been an error with postTasks:`, error);
    res.status(500).send(`Internal Server Error`);
  }
};

exports.putTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    const updatedTasks = await toDoList.findByIdAndUpdate(
      id,
      { title, completed, updatedAt: new Date() },
      { new: true }
    );
    if (!updatedTask) return res.status(404).send("Task not found");
  } catch (error) {
    console.log(`There has been an error with putTasks:`, error);
    res.status(500).send(`Internal Server Error`);
  }
};

exports.deleteTasks = async (req, res) => {
  try {
  } catch (error) {
    console.log(`There has been an error with deleteTasks:`, error);
    res.status(500).send(`Internal Server Error`);
  }
};

exports.getTasks = async (req, res) => {
  try {
  } catch (error) {
    console.log(`There has been an error with getTasks:`, error);
    res.status(500).send(`Internal Server Error`);
  }
};
