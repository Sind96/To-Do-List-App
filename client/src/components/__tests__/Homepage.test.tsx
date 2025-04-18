import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import HomePage from "../../pages/HomePage.tsx";
import * as api from "../../services/api.services.ts";

const mockTasks = [
  { _id: "1", title: "Task One", completed: false },
  { _id: "2", title: "Task Two", completed: true },
];

jest.mock("../../services/api.services.ts");

const mockFetch = api.fetchTasks as jest.Mock;
const mockCreate = api.createTask as jest.Mock;
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
    mockCreate.mockResolvedValue({
      _id: "3",
      title: "New Task",
      completed: false,
    });

    render(<HomePage />);

    fireEvent.change(screen.getByPlaceholderText(/add a new task/i), {
      target: { value: "New Task" },
    });
    fireEvent.click(screen.getByRole("button", { name: /add/i }));

    expect(await screen.findByText("New Task")).toBeInTheDocument();
    expect(mockCreate).toHaveBeenCalledWith("New Task");
  });

  test("filters tasks correctly", async () => {
    mockFetch.mockResolvedValue(mockTasks);
    render(<HomePage />);

    expect(await screen.findByText("Task One")).toBeInTheDocument();
    expect(await screen.findByText("Task Two")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Completed"));
    await waitFor(() => {
      expect(screen.queryByText("Task One")).not.toBeInTheDocument();
      expect(screen.getByText("Task Two")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText("Incomplete"));
    await waitFor(() => {
      expect(screen.getByText("Task One")).toBeInTheDocument();
      expect(screen.queryByText("Task Two")).not.toBeInTheDocument();
    });

    fireEvent.click(screen.getByText("All"));
    expect(screen.getByText("Task One")).toBeInTheDocument();
    expect(screen.getByText("Task Two")).toBeInTheDocument();
  });

  test("can delete a task", async () => {
    mockFetch.mockResolvedValue(mockTasks);
    mockDelete.mockResolvedValue({});

    render(<HomePage />);
    expect(await screen.findByText("Task One")).toBeInTheDocument();

    const deleteButton = screen.getAllByRole("button", { name: /delete/i })[0];
    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(screen.queryByText("Task One")).not.toBeInTheDocument();
    });
  });
});
