import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskForm from "../TaskForm";
import "@testing-library/jest-dom";

describe("TaskForm", () => {
  test("renders input and button", () => {
    render(<TaskForm onSubmit={jest.fn()} />);
    expect(screen.getByPlaceholderText("Add a new task")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });

  test("calls onSubmit with correct title and clears input", () => {
    const handleSubmit = jest.fn();
    render(<TaskForm onSubmit={handleSubmit} />);

    const input = screen.getByPlaceholderText("Add a new task");
    const button = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "new task" } });
    fireEvent.click(button);

    expect(handleSubmit).toHaveBeenCalledWith("new task");
    expect(input).toHaveValue("");
  });

  test("does not call onSubmit if input is empty", () => {
    const handleSubmit = jest.fn();
    render(<TaskForm onSubmit={handleSubmit} />);

    const button = screen.getByRole("button", { name: /add/i });

    fireEvent.click(button);
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  test("does not call onSubmit if input is only spaces", () => {
    const handleSubmit = jest.fn();
    render(<TaskForm onSubmit={handleSubmit} />);

    const input = screen.getByPlaceholderText("Add a new task");
    const button = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.click(button);

    expect(handleSubmit).not.toHaveBeenCalled();
  });
});
