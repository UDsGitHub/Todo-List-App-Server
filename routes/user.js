import express from "express";
import {
  getUser,
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/user.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// CREATE
router.post("/:id/addTodo", verifyToken, addTodo);

// READ
router.get("/", getUser)

router.get("/:id/getTodos", verifyToken, getTodos);

// UPDATE
router.patch("/:id/updateTodo/:todoId", verifyToken, updateTodo);

// DELETE
router.delete("/:id/deleteTodo/:todoId", verifyToken, deleteTodo);

export default router;
