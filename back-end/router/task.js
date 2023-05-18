import {
 getAllTodo,
 createTodo,
 updateTodo,
 removeTodo,
 count,
 checked
} from "../Controller/task.js";
import express from "express";

const task = express.Router();

task.route("/list").get(getAllTodo);
task.route("/add").post(createTodo);
task.route("/delete/:id").delete(removeTodo);
task.route("/update/:id").patch(updateTodo);
task.route("/count").get(count)
task.route("/checked").patch(checked)
export default task;