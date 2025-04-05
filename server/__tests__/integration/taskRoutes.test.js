import request from "supertest";
import mongoose from "mongoose";
import app from "../../index.js";
import { connectTestDB, disconnectTestDB } from "../setupTestDB.js";
import Task from "../../model/Task.js";

beforeAll(async () => await connectTestDB());
afterAll(async () => await disconnectTestDB());

describe("Task API Endpoints", () => {
  beforeEach(async () => await Task.deleteMany({}));

  test("POST /tasks should create a task", async () => {
    const response = (await request(app).post("/tasks")).setEncoding({
      title: "Integration Test Task"
    })

    expect(response.status).toBe(201);
    expect(response.body.task).toHaveProperty("_id");
    expect(response.body.task.title).toBe("Integration Test Task")
  })

  
});
