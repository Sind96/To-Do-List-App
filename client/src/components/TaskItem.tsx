import { TaskListProps } from "../types/propType";

export default function TaskItem({
  tasks,
  onUpdate,
  onDelete,
  onToggleComplete,
}: TaskListProps) {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={tasks.completed}
          onChange={() => onToggleComplete(tasks._id, !tasks.completed)}
          className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
        />
        <span
          className={`text-lg ${
            tasks.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {tasks.title}
        </span>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() =>
            onUpdate(tasks._id, {
              title: prompt("Edit Task", tasks.title) || tasks.title,
            })
          }
          className="text-blue-500 hover:text-blue-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(tasks._id)}
          className="text-red-600 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
