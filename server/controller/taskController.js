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
    console.error(`Error in getTasks: ${error.message}\n${error.stack}`);
    res.status(500).json({ error: "Internal Server error" });
  }
};

export const postTask = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "Title is required" });

    const newTask = await Task.create({
      title,
      completed: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    res
      .status(201)
      .json({ message: "Task posted successfully", task: newTask });
  } catch (error) {
    console.error(`Error in postTask: ${error.message}\n${error.stack}`);
    res.status(500).json({ error: "Internal Server error" });
  }
};

export const putTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    if (title === undefined && completed === undefined) {
      return res
        .status(400)
        .json({ error: "Provide at least one field to update" });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, completed, updatedAt: Date.now() },
      { new: true, lean: true }
    );
    if (!updatedTask) return res.status(404).json({ error: "Task not found" });

    res
      .status(200)
      .json({ message: "Task updated successfully", task: updatedTask });
  } catch (error) {
    console.error(`Error in putTask: ${error.message}\n${error.stack}`);
    res.status(500).json({ error: "Internal Server error" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) return res.status(404).json({ error: "Task not found" });

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error(`Error in deleteTask: ${error.message}\n${error.stack}`);
    res.status(500).json({ error: "Internal Server error" });
  }
};
