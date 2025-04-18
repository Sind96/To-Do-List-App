import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import HomePage from "../../pages/HomePage.js";
import {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../../services/api.services.ts";

