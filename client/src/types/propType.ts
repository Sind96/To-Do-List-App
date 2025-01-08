export interface TaskProps {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TaskFormProps {
  onSubmit: (title: string) => void;
}
