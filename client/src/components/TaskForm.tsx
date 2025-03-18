import React, { useState } from "react";
import { TaskFormProps } from "../@types/task.types";

const TaskForm = ({ onSubmit }: TaskFormProps) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!title.trim()) return;
    onSubmit(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-4 items-center">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition"
      >
        Add
      </button>
    </form>
  );
};

export default TaskForm;
