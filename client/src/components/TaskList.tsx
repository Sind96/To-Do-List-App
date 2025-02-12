import { TaskListPropsList } from "../types/types";
import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  onUpdate,
  onDelete,
  onToggleComplete,
}: TaskListPropsList) {
  return (
    <div className="space-y-4">
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
