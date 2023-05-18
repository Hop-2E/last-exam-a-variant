import express from "express";
import {
  createTodo,
  removeTodo,
  text,
  countTodo,
  endPoint,
  getTodo,
  updateTodo,
} from "../controller/todo.js";
const router = express.Router();

router.route("/").get(text);
router.route("/test").get(endPoint);
router.route("/add").post(createTodo);
router.route("/delete/:id").delete(removeTodo);
router.route("/update").put(updateTodo);
router.route("/count").get(countTodo);
router.route("/:id").get(getTodo);

export default router;
