import { TaskListProps } from "../types/types";

const TaskItem = ({
  tasks,
  onUpdate,
  onDelete,
  onToggleComplete,
}: TaskListProps) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={tasks.completed}
          onChange={() => onToggleComplete(tasks._id, !tasks.completed)}
          className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
        />
        <div>
          <span
            className={`text-lg ${
              tasks.completed ? "line-through text-gray-400" : "text-gray-700"
            }`}
          >
            {tasks.title}
          </span>
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() =>
            !tasks.completed &&
            onUpdate(tasks._id, {
              title: prompt("Edit Task", tasks.title) || tasks.title,
            })
          }
          disabled={tasks.completed}
          className={`px-2 py-1 rounded ${
            tasks.completed
              ? "text-gray-400 cursor-not-allowed"
              : "text-blue-500 hover:text-blue-700"
          }`}
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(tasks._id)}
          className="text-red-600 hover:text-red-800"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
