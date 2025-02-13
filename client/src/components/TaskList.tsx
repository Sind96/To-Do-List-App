import { TaskListPropsList } from "../types/types";
import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  onUpdate,
  onDelete,
  onToggleComplete,
}: TaskListPropsList) => {
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
};

export default TaskList;
