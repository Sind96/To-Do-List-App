import {
  getTasks,
  postTask,
  putTask,
  deleteTask,
} from "../../controller/taskController.js";
import Task from "../../model/Task.js";
import { connectTestDB, disconnectTestDB } from "../../utils/setupTestDB.js";

beforeAll(async () => await connectTestDB());
afterAll(async () => await disconnectTestDB());

describe("Task Controller", () => {
  beforeEach(async () => await Task.deleteMany({}));

  test("getTasks should return an empty array initially", async () => {
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await getTasks(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "Tasks fetched successfully",
      tasks: [],
    });
  });

  test("postTask should create a new task", async () => {
    const req = { body: { title: "New Task" } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await postTask(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Task posted successfully",
        task: expect.objectContaining({ title: "New Task", completed: false }),
      })
    );
  });

  test("putTask should update a task", async () => {
    const task = await Task.create({ title: "Old Task", completed: false });
    const req = {
      params: { id: task._id.toString() },
      body: { title: "Updated Task", completed: true },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await putTask(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Task updated successfully",
        task: expect.objectContaining({
          title: "Updated Task",
          completed: true,
        }),
      })
    );
  });

  test("deleteTask should remove a task", async () => {
    const task = await Task.create({ title: "Delete Me", completed: false });
    const req = { params: { id: task._id.toString() } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await deleteTask(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "Task deleted successfully",
    });
  });
});
