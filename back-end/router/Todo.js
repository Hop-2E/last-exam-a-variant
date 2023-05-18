import express from "express";
import {
getAllTodo,
CreateTodo,
DeleteTodo,
UpdateTodo,
} from "../controller/todo.js";

const router = express.Router();

router.route("/").get(getAllTodo).post(CreateTodo).put(UpdateTodo);
router.route("/:id").delete(DeleteTodo).patch(UpdateTodo);

export default router;