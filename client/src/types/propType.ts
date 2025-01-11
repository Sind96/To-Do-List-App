export interface TaskProps {
  _id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TaskFormProps {
  onSubmit: (title: string) => void;
}

export interface TaskListProps {
  tasks: TaskProps;
  onUpdate: (id: string, updatedTask: Partial<TaskProps>) => void;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string, completed: boolean) => void;
}
