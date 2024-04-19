const express = require("express");
const Task = require("../models/Task");
const router = express.Router();
const {
  getTasks,
  getTask,
  postTask,
  putTask,
  deleteTask,
  getTasksStats,
} = require("../controllers/taskControllers");
const { verifyAccessToken } = require("../middlewares.js");

router.get("/", verifyAccessToken, getTasks);
router.post("/", verifyAccessToken, postTask);
router.get("/stats", verifyAccessToken, getTasksStats);
router.get("/:taskId", verifyAccessToken, getTask);
router.put("/:taskId", verifyAccessToken, putTask);
router.delete("/:taskId", verifyAccessToken, deleteTask);

module.exports = router;
