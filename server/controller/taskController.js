import Task from "../model/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().lean();
    const formattedTasks = tasks.map((task) => ({
      ...task,
      id: task._id.toString(),
    }));

    res.status(200).json({
      message: "Tasks fetched successfully",
      tasks: formattedTasks,
    });
  } catch (error) {
    console.error("Error in getTasks:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const postTasks = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "Title is required" });

    const newTask = new Task({
      title,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await newTask.save();
    res.status(201).json({
      message: "Tasks added successfully",
      task: newTask,
    });
  } catch (error) {
    console.error("Error in postTasks:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const putTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    if (!id || !title || completed === undefined) {
      return res
        .status(400)
        .json({ error: "ID, title, and completed status are required" });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, completed, updatedAt: new Date() },
      { new: true }
    );
    if (!updatedTask) return res.status(404).send({ error: "Task not found" });

    res.status(200).json({
      message: "Tasks updated successfully",
      task: updatedTask,
    });
  } catch (error) {
    console.error("Error in putTasks:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteTasks = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "ID required" });

    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) return res.status(404).send({ error: "Task not found" });

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error in deleteTasks:", error);
    res.status(500).json({ message: "Server error" });
  }
};
