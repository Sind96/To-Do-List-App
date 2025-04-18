import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import HomePage from "../../pages/HomePage.js";
import * as api from "../../services/api.services.ts";

const mockTasks = [
  { _id: "1", title: "Task One", completed: false },
  { _id: "2", title: "Task Two", completed: true },
];

jest.mock("../../services/api.services.ts")

const mockFetch = api.fetchTasks as jest.Mock;
const mockCreate = api.createTask as jest.Mock;
const mockUpdate = api.updateTask as jest.Mock;
const mockDelete = api.deleteTask as jest.Mock;