import express from "express";
import {
  todo,
  getAllTodo,
  getTodo,
  create,
  deleteTodo,
  updateTodo,
  toggleTodo,
} from "../controller/Todo.js";

const todoRouter = express.Router();

todoRouter.route("/").post(create);
todoRouter.get("/", getAllTodo);
todoRouter.route("/login").post(getTodo);
todoRouter.route("/:id").get(todo).delete(deleteTodo).put(updateTodo);

export default todoRouter;
