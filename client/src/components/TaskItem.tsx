import React from "react";
import { TaskListProps } from "../types/propType";

export default function TaskItem({
  task,
  onUpdate,
  onDelete,
  onToggleComplete,
}: TaskListProps) {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id, !task.completed)}
      />
      <span className={task.completed ? "line-through" : ""}>{task.title}</span>
      <div>
        <button
          onClick={() =>
            onUpdate(task.id, {
              title: prompt("Edit Task", task.title) || task.title,
            })
          }
          className="text-blue-500 mr-2"
        >
          Edit
        </button>
        <button onClick={() => onDelete(task.id)} className="text-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}
