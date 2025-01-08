import React from "react";
import { TaskListProps } from "../types/propType";
import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  onUpdate,
  onDelete,
  onToggleComplete,
}: TaskListProps) {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
}
