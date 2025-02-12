import express from "express";
import {
  postTasks,
  putTasks,
  deleteTasks,
  getTasks,
} from "./controller/taskController.js";
const router = express.Router();

router.get("/tasks", getTasks);
router.post("/tasks", postTasks);
router.put("/tasks/:id", putTasks);
router.delete("/tasks/:id", deleteTasks);

export default router;
