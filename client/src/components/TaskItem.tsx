import React from "react";
import { TaskListProps } from "../types/propType";

export default function TaskItem({
  tasks,
  onUpdate,
  onDelete,
  onToggleComplete,
}: TaskListProps) {
  return (
    <div>
      <input
        type="checkbox"
        checked={tasks.completed}
        onChange={() => onToggleComplete(tasks._id, !tasks.completed)}
      />
      <span className={tasks.completed ? "line-through" : ""}>
        {tasks.title}
      </span>
      <div>
        <button
          onClick={() =>
            onUpdate(tasks._id, {
              title: prompt("Edit Task", tasks.title) || tasks.title,
            })
          }
          className="text-blue-500 mr-2"
        >
          Edit
        </button>
        <button onClick={() => onDelete(tasks._id)} className="text-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}
