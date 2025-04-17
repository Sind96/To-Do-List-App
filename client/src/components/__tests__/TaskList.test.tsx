import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "../TaskList.tsx";
import { TaskProps } from "../@types/task.types.ts";

describe("", () => {
  const mockTasks: TaskProps[] = [
    {
      _id: "1",
      title: "Test Task 1",
      completed: false,
      createdAt: "",
      updatedAt: "",
    },
    {
      _id: "2",
      title: "Test Task 2",
      completed: true,
      createdAt: "",
      updatedAt: "",
    },
  ];

  const onUpdate = jest.fn();
  const onDelete = jest.fn();
  const onToggleComplete = jest.fn();

  beforeEach(() => {
    render(<TaskList 
      tasks={mockTasks}
      onUpdate={onUpdate}
      onDelete={onDelete}
      onToggleComplete={onToggleComplete}
      />)
  })
});
