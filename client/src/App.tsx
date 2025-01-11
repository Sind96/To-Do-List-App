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
      console.log("fetchedTasks", fetchedTasks);
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
    console.log("thisisUpdated", updated);
    console.log("thisisUpdated2", tasks);
    setTasks(tasks.map((task) => (task.id === id ? updated : task)));
  };

  const deleteTaskHandler = async (id: string) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
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
    <>
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">To-do List</h1>
        <div className="justify-center text-center">
          <TaskForm onSubmit={addTask} />
        </div>
        <div className="my-2 justify-center text-center">
          <button onClick={() => setFilter("All")} className="mr-2">
            All
          </button>
          <button onClick={() => setFilter("Completed")} className="mr-2">
            Completed
          </button>
          <button onClick={() => setFilter("Incomplete")} className="mr-2">
            Incomplete
          </button>
        </div>
        <div className="my-2 justify-center text-left">
          <TaskList
            tasks={filteredTasks}
            onUpdate={updateTaskHandler}
            onDelete={deleteTaskHandler}
            onToggleComplete={toggleCompleteHandler}
          />
        </div>
      </div>
    </>
  );
}

export default App;
