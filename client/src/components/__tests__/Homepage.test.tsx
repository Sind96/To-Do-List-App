import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import HomePage from "../../pages/HomePage.js";
import * as api from "../../services/api.services.ts";

const mockTasks = [
  { _id: "1", title: "Task One", completed: false },
  { _id: "2", title: "Task Two", completed: true },
];

jest.mock("../../services/api.services.ts");

const mockFetch = api.fetchTasks as jest.Mock;
const mockCreate = api.createTask as jest.Mock;
const mockUpdate = api.updateTask as jest.Mock;
const mockDelete = api.deleteTask as jest.Mock;

describe("HomePage Integration", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders tasks from fetchTasks", async () => {
    mockFetch.mockResolvedValue(mockTasks);

    render(<HomePage />);

    expect(await screen.findByText("Task One")).toBeInTheDocument();
    expect(await screen.findByText("Task Two")).toBeInTheDocument();
  });

  test("can add a task", async () => {
    mockFetch.mockResolvedValue([]);
    mockCreate.mockResolvedValue({ _id: "3", title: "New Task", completed: false });

    render(<HomePage />);

    fireEvent.change(screen.getByPlaceholderText(/add a task/i), {
      target: { value: "New Task" },
    });
    fireEvent.click(screen.getByRole("button", { name: /add/i }));

    expect(await screen.findByText("New Task")).toBeInTheDocument();
    expect(mockCreate).toHaveBeenCalledWith("New Task");
  });
});
