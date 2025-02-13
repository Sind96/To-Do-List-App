import express from "express";
import {
  getTasks,
  postTask,
  putTask,
  deleteTask,
} from "./controller/taskController.js";
const router = express.Router();

router.get("/tasks", getTasks);
router.post("/tasks", postTask);
router.put("/tasks/:id", putTask);
router.delete("/tasks/:id", deleteTask);

export default router;
