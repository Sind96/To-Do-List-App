import "./index.css";
import React, { useEffect, useState } from "react";
import {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
} from "./services/api.services";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { TaskProps } from "./types/propType";

function App() {
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



  return (
    <>
      <p className="text-blue-500">Hello</p>
    </>
  );
}

export default App;
