import request from "supertest";
import app from "../../index.js";
import { connectTestDB, disconnectTestDB } from "../../utils/setupTestDB.js";
import Task from "../../model/Task.js";

beforeAll(async () => await connectTestDB());
afterAll(async () => await disconnectTestDB());

describe("Task API Endpoints", () => {
  beforeEach(async () => await Task.deleteMany({}));
  test("POST /tasks should create a task", async () => {
    const response = await request(app).post("/tasks").send({
      title: "Integration Test Task",
    });

    expect(response.status).toBe(201);
    expect(response.body.task).toHaveProperty("_id");
    expect(response.body.task.title).toBe("Integration Test Task");
  });

  test("GET /tasks should return tasks", async () => {
    await Task.create({
      title: "Existing Task",
      completed: false,
    });

    const response = await request(app).get("/tasks");

    expect(response.status).toBe(200);
    expect(response.body.tasks.length).toBe(1);
    expect(response.body.tasks[0].title).toBe("Existing Task");
  });

  test("PUT /tasks/:id should update task", async () => {
    const task = await Task.create({
      title: "Update me",
      completed: false,
    });

    const response = await request(app).put(`/tasks/${task._id}`).send({
      title: "Updated task",
      completed: true,
    });

    expect(response.status).toBe(200);
    expect(response.body.task.title).toBe("Updated task");
    expect(response.body.task.completed).toBe(true);
  });

  test("DELETE /tasks/:id should remove a task", async () => {
    const task = await Task.create({
      title: "Delete test",
      completed: false,
    });

    const response = await request(app).delete(`/tasks/${task._id}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Task deleted successfully");
  });
});
