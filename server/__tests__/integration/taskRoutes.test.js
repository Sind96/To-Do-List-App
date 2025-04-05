import request from "supertest";
import mongoose from "mongoose";
import app from "../../index.js";
import { connectTestDB, disconnectTestDB } from "../setupTestDB.js";
import Task from "../../model/Task.js";

beforeAll(async () => await connectTestDB());
afterAll(async () => await disconnectTestDB());

describe("Task API Endpoints", () => {
  beforeEach(async () => await Task.deleteMany({}));
});
