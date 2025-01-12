import React from "react";
import { TaskListPropsList } from "../types/propType";
import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  onUpdate,
  onDelete,
  onToggleComplete,
}: TaskListPropsList) {
  console.log("Tasks in TaskList:", tasks);

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          tasks={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
}
