import express from "express";
import {
  postTasks,
  putTasks,
  deleteTasks,
  getTasks,
} from "./controller/todo.js";
const router = express.Router();

router.get("/tasks", getTasks);
router.post("/tasks", postTasks);
router.put("/tasks/:id", putTasks);
router.delete("/tasks/:id", deleteTasks);

export default router;
