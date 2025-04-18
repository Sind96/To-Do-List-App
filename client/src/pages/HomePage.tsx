import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { TaskProps } from "../@types/task.types";
import {
  createTask,
  deleteTask,
  fetchTasks,
  updateTask,
} from "../services/api.services";

const HomePage = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [filter, setFilter] = useState<"All" | "Completed" | "Incomplete">(
    "All"
  );

  useEffect(() => {
    const loadTasks = async () => {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    };
    loadTasks();
  }, []);

  const addTask = async (title: string) => {
    const newTask = await createTask(title);
    setTasks([...tasks, newTask]);
  };

  const updateTaskHandler = async (
    id: string,
    updatedTask: Partial<TaskProps>
  ) => {
    const updated = await updateTask(id, updatedTask);
    setTasks(tasks.map((task) => (task._id === id ? updated : task)));
  };

  const deleteTaskHandler = async (id: string) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const toggleCompleteHandler = (id: string, completed: boolean) => {
    updateTaskHandler(id, { completed });
  };

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter((task) =>
          filter === "Completed" ? task.completed : !task.completed
        );

  return (
    <div className="p-6 bg-white dark:bg-gray-700 shadow-lg rounded-lg border-t-4 border-blue-500 dark:border-blue-200">
      <h1 className="text-5xl font-extrabold mb-6 text-center text-blue-600 dark:text-blue-200">
        ToDo List
      </h1>
      <TaskForm onSubmit={addTask} />
      <div className="flex justify-center my-4 space-x-2">
        <button
          onClick={() => setFilter("All")}
          className={`${
            filter === "All"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          } px-4 py-2 rounded-md shadow hover:shadow-lg`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Completed")}
          className={`${
            filter === "Completed"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          } px-4 py-2 rounded-md shadow hover:shadow-lg`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("Incomplete")}
          className={`${
            filter === "Incomplete"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          } px-4 py-2 rounded-md shadow hover:shadow-lg`}
        >
          Incomplete
        </button>
      </div>
      <TaskList
        tasks={filteredTasks}
        onUpdate={updateTaskHandler}
        onDelete={deleteTaskHandler}
        onToggleComplete={toggleCompleteHandler}
      />
    </div>
  );
};

export default HomePage;
