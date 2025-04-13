import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskForm from "../TaskForm";

describe("TaskForm", () => {
  test("renders input and button", () => {
    render(<TaskForm onSubmit={jest.fn()} />);
    
  });
});
