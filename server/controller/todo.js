import Task from "../model/todo.js";

export const postTasks = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).send({ error: "Title is required" });

    const newTask = new Task({
      title,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await newTask.save();
    res.status(201).send(newTask);
  } catch (error) {
    console.error(`Error in postTasks: ${error.message}`);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

export const putTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, completed, updatedAt: new Date() },
      { new: true }
    );

    if (!updatedTask) return res.status(404).send({ error: "Task not found" });

    res.status(200).send(updatedTask);
  } catch (error) {
    console.error(`Error in putTasks: ${error.message}`);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

export const deleteTasks = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) return res.status(404).send({ error: "Task not found" });

    res.status(200).send({ message: "Task deleted successfully" });
  } catch (error) {
    console.error(`Error in deleteTasks: ${error.message}`);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().lean();
    const formattedTasks = tasks.map((task) => ({
      ...task,
      id: task._id.toString(),
    }));
    res.status(200).send(formattedTasks);
  } catch (error) {
    console.error(`Error in getTasks: ${error.message}`);
    res.status(500).send({ error: "Internal Server Error" });
  }
};
