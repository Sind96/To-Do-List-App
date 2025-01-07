const express = require("express");
const {
  postTasks,
  putTasks,
  deleteTasks,
  getTasks,
} = require("./controller/todo");
const router = express.Router();

router.get("/tasks", getTasks);

router.post("/tasks", postTasks);

router.put("/tasks/:id", putTasks);

router.delete("/tasks/:id", deleteTasks);

module.exports = router;
