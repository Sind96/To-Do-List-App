import Task from "../model/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().lean();
    const formattedTasks = tasks.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toString(),
    }));

    res.status(200).json({
      message: "Tasks fetched successfully",
      tasks: formattedTasks,
    });
  } catch (error) {
    console.error("Error in getTasks:", error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

export const postTask = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "Title is required" });

    const newTask = new Task({
      title,
      completed: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error in postTask:", error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

export const putTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, completed, updatedAt: new Date() },
      { new: true }
    );

    if (!updatedTask) return res.status(404).json({ error: "Task not found" });

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Error in putTask:", error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) return res.status(404).json({ error: "Task not found" });

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error in deleteTask:", error);
    res.status(500).json({ message: "Internal Server error" });
  }
};
